import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Login from './Pages/Login/Login';
import Register from "./Register/Register";
import Footer from './Pages/Shared/Footer/Footer';
import Menus from "./Pages/Menus/Menus";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/menus" element={<Menus></Menus>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
