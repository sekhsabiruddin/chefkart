import React from "react";
import { FaRegClock } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
const SinglePage = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center mt-3">
          <div className="w-[60%] flex ">
            <div className="left w-[70%] ">
              <div className="flex">
                <h1
                  className="text-[1rem] lg:text-[1.3rem]"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Mashala Mugal
                </h1>
                <h2 className="green-star ml-3 lg:ml-6">4.5</h2>
              </div>
              <div>
                <p
                  className="text-[1rem] lg:text-[1rem] text-[#B2B2B2]"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                  pariatur? Molestias, in, nam odio unde voluptas dolorem qui
                  reiciendis .
                </p>
              </div>
              <div className="flex items-center ">
                <FaRegClock />
                <span className="ml-3">1 hour</span>
              </div>
            </div>
            <div className="right">
              <div className="w-[150px] h-[120px] lg:w-[200px] lg:h-[160px] relative">
                <img
                  src="https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg"
                  className="h-[100%] w-[100%]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-3">
          <hr className="w-[70%]" />
        </div>
      </div>

      <div>
        <div className=" flex items-center justify-center">
          <div className="w-[40%] ">
            <div className="flex items-center">
              <h1 className="text-[1.2rem] font-semibold mb-1">Vegitable</h1>
              <IoMdArrowDropdown />
            </div>
            <div className="flex justify-between">
              <div>
                <p>Cauliflower</p>
                <p>Tomato</p>
                <p>Spinach</p>
              </div>
              <div>
                <p>01</p>
                <p>10</p>
                <p>7</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-3">
          <hr className="w-[70%]" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-[40%] ">
          <div className="flex items-center">
            <h1 className="text-[1.2rem] font-semibold mb-1">spices</h1>
            <IoMdArrowDropdown />
          </div>
          <div className="flex justify-between">
            <div>
              <p>Coriander</p>
              <p>Mustard Oil</p>
            </div>
            <div>
              <p>10</p>
              <p>7</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
