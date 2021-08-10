import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container-fluid ">
          <div className=" container row ">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="container-fluid">
                <img src="/images/banner.jpg" className="banner" alt="" />
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 ">
              <div className="ml-5 mt-5 content container-fluid">
                <h1>Keep Track of Your Sales and Success</h1>
                <div className="d-flex">
                  <Link to="/categories">
                    {" "}
                    <button type="button" class="btn btn-info mt-4 ">
                      See Catagories
                    </button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
