import React from "react";
import Navbar from "../components/navbar";
import Announcement from "../components/announcement";
import Slider from "../components/slider";
import Category from "../components/category";
import Products from "../components/products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider/>
      <Category/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default home;
