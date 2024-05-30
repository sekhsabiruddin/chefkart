import React from "react";
import { useState, useEffect } from "react";
import Banana from "../../assets/Banana.jpg";
import { LuCalendarDays } from "react-icons/lu";
import { LuAlarmClock } from "react-icons/lu";
import useFetchDishes from "../Api/useFetchDishes";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const Header = () => {
  const [selected, setSelected] = useState("China");
  const { data, loading, error } = useFetchDishes();
  const [populardishesh, setPopularDishes] = useState([]);
  useEffect(() => {
    setPopularDishes(data.popularDishes);
  }, [loading]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleClick = (country) => {
    setSelected(country);
  };
  return (
    <div>
      <div className="mb-2 flex items-center">
        <MdOutlineKeyboardArrowLeft />
        <h1
          className="text-[1.2rem]"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Selected Dishes
        </h1>
      </div>
      <div className="bg-black w-full min-h-[30px] relative">
        <div className="flex justify-center ">
          <div
            className="boxShodow bg-[#FFFFFF] w-[370px] lg:w-[400px] absolute top-[15px] flex p-5 justify-between "
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            <div className="flex items-center border-left w-[50%]">
              <LuCalendarDays />
              <span className="ml-3">21 May 2021</span>
            </div>
            <div className="flex items-center ">
              <LuAlarmClock />
              <span className="ml-3">10:30 Pm-12:30 Pm</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[5rem]">
        <div className="flex justify-center  gap-2 lg:gap-10">
          {["Italian", "India", "China", "Rasia"].map((country) => (
            <div
              key={country}
              className={`${
                selected === country ? "selected-rounder" : "rounder"
              } px-5 py-1 lg:px-5 lg:py-1`}
              onClick={() => handleClick(country)}
            >
              <span>{country}</span>
            </div>
          ))}
        </div>
      </div>
      {/* //popular dishesh */}
      <div>
        <div className="text-[1.2rem] mt-2 px-2 lg:text-[1.6rem]">
          <h1>Popular Deshes</h1>
        </div>
        {/* //image start */}
        <div className="px-2 flex justify-center my-[1rem]">
          <div className="w-[100%] lg:w-[80%] flex gap-3 lg:gap-10">
            {populardishesh &&
              populardishesh.map((value, i) => (
                <div
                  className="popular-image-box w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]"
                  key={i}
                >
                  <div className="">
                    <img src={value.image} alt="" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
