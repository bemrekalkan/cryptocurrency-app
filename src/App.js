//? rafce👇

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Exchanges,
  Home,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <BrowserRouter>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/">
                  <Home />
                </Route>

                <Route path="/exchanges">
                  <Exchanges />
                </Route>

                <Route path="/cryptocurrencies">
                  <Cryptocurrencies />
                </Route>

                <Route path="/crypto/:coinId">
                  <CryptoDetails />
                </Route>

                <Route path="/news">
                  <News />
                </Route>
              </Routes>
            </div>
          </Layout>
        </div>
      </BrowserRouter>
      <div className="footer"></div>
    </div>
  );
};

export default App;
