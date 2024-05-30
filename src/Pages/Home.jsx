import React from "react";
import Header from "../components/Header/Header";
import DishesComponent from "../components/DishesComponent/DishesComponent";

const Home = () => {
  return (
    <div>
      <div className="boxShodow1 pb-5">
        <Header />
      </div>
      <div className="mt-5">
        <DishesComponent />
      </div>
    </div>
  );
};

export default Home;
