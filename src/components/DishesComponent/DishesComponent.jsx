import React, { useEffect, useState } from "react";
import useFetchDishes from "../Api/useFetchDishes";
import Refrigerator from "../../assets/refrigerator.png";
import { FaRegStar } from "react-icons/fa";
import Banana from "../../assets/Banana.jpg";
import { Link } from "react-router-dom";
const DishesComponent = () => {
  const { data, loading, error } = useFetchDishes();
  const [dishData, setDisheshData] = useState([]);

  useEffect(() => {
    setDisheshData(data.dishes);
  }, [loading]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="">
      <div className="flex items-center flex-col gap-10">
        {dishData &&
          dishData.map((value, i) => (
            <>
              <div className="w-full px-1 lg:w-[60%] flex justify-between ">
                <div className="left-box w-[60%] flex flex-col gap-3">
                  <div className="flex items-center">
                    <div>
                      <h1
                        className="text-[1rem] lg:text-[1.7rem]"
                        style={{ fontFamily: "Roboto, sans-serif" }}
                      >
                        {value.name}
                      </h1>
                    </div>
                    <div className="green-box ml-3 lg:ml-6">
                      <span></span>
                    </div>
                    <div className="green-star ml-3 lg:ml-6">
                      <span>{value.rating}</span>
                      <FaRegStar />
                    </div>
                  </div>
                  <div className="flex justify-between ">
                    <div className="flex lg:w-[50%]">
                      <div className="w-[40px] h-[45px]">
                        <img
                          src={Refrigerator}
                          alt=""
                          className="w-[100%] h-[100%]"
                        />
                        <span className="text-[0.6rem] text-[#9B9B9B]">
                          Refrigerator
                        </span>
                      </div>
                      <div className="w-[40px] h-[45px] ml-[0.3rem] lg:ml-[2rem]">
                        <img
                          src={Refrigerator}
                          alt=""
                          className="w-[100%] h-[100%]"
                        />
                        <span className="text-[0.6rem] text-[#9B9B9B]">
                          Refrigerator
                        </span>
                      </div>
                    </div>

                    <div className="w-[50%]">
                      <h1 className="font-bold text-[1.1rem]">Ingredent</h1>
                      <span className="text-[#FFC787] ">View List</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span
                      className="text-[1rem] lg:text-[1.1rem] text-[#B2B2B2]"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      {value.description}
                    </span>
                  </div>
                </div>
                <div className="right-box ">
                  <div className="w-[150px] h-[120px] lg:w-[200px] lg:h-[160px] relative">
                    <img src={value.image} className="h-[100%] w-[100%]" />
                    <button className="button">Add</button>
                  </div>
                </div>
              </div>
              <hr className="w-[70%]" />
            </>
          ))}
      </div>
    </div>
  );
};

export default DishesComponent;
