import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navb_ from "./components/navbar/navbar";
import TopHeader from "./components/navbar/top_header";
import Home from "./container/home/home";
import About from "./container/about/about";
import RoomAndSuites from "./container/room-and-suites/room-and-suites";
import Contact from "./container/contact/contact";
import FullRoom from "./container/Full_Room/Full_Room";
import Footer from "./components/footer/footer";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopHeader></TopHeader>
        <Navb_></Navb_>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/About" component={About}></Route>
        <Route exact path="/RoomAndSuites" component={RoomAndSuites}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
        <Route exact path="/FullRoom/:roomType" component={FullRoom}></Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
