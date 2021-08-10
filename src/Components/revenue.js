import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config.json";
import "../styles/css/landing.css";
import Card from "./cards";
const Revenue = () => {
  const image_url = "/images/pro2.jpg";
  const [revenueInfo, setRevenueInfo] = useState([]);

  const getData = async () => {
    const response = await axios.get(config.RevenueAPI);
    console.log(response.data.cards);
    setRevenueInfo(response.data.cards);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="container-fluid ">
          <div className=" container-fluid row ">
            {revenueInfo.map((info) => {
              return (
                <div className="col-10 col-md-4 mt-4 ">
                  <div className="">
                    <Card
                      key={info.title_en}
                      title={info.title_en}
                      value={info.value_en}
                      imgUrl={image_url}
                    ></Card>
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
export default Revenue;
