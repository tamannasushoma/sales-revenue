import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import config from "./config.json";
import "./App.css";
import LandingPage from "./Components/landing-page";
import Navbar from "./Components/navbar";
import Revenue from "./Components/revenue";
import Sales from "./Components/sales";
import CategoryType from "./Components/category";

function App() {
  const [lang, setLang] = useState(true);

  const getData = async () => {
    const response = await axios.get(config.StylesAPI);
    console.log(response.data.languages);
    setLang(response.data.languages);
    console.log(lang);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div>
        <div className="dropdown ml-3 mt-3">
          <button
            className="btn btn-secondary dropdown-toggle "
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Language
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              className="dropdown-item"
              onClick={() => {
                setLang(true);
              }}
            >
              en
            </a>
            <a
              className="dropdown-item"
              onClick={() => {
                setLang(false);
              }}
            >
              bn
            </a>
          </div>
        </div>
        <Switch>
          <Route
            path="/categories"
            render={() => <CategoryType language={lang} />}
          />
          <Route
            path="/Total Sales Amount"
            render={() => <Sales language={lang} />}
          />
          <Route
            path="/Total Revenue"
            render={() => <Revenue language={lang} />}
          />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
