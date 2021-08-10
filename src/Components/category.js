import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../config.json";
import "../styles/css/landing.css";
import Card from "./cards";
const CategoryType = (props) => {
  const image_url = "/images/dollar.jpg";

  const [category, setCategory] = useState([]);

  const getData = async () => {
    const response = await axios.get(config.categoryAPI);
    console.log(response.data.cards);
    setCategory(response.data.cards);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="container-fluid ">
          <div className=" container-fluid row ">
            {category.map((cat) => {
              return (
                <div className="col-10 col-md-6 mt-4 ">
                  <div className="ml-5 mr-5 pl-5 pr-5">
                    <Link to={"/" + cat.title_en}>
                      <Card
                        key={cat.title_en}
                        title={cat.title_en}
                        value={cat.value_en}
                        imgUrl={image_url}
                      ></Card>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoryType;
