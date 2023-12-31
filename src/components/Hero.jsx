import React from "react";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";
import { Waypoint } from "react-waypoint";
import ScrollIndicator from "./ScrollIndicator";
import "./Hero.css";

const Hero = ({ setActiveTab }) => {
  return (
    <Waypoint onEnter={() => setActiveTab("Home")}>
      <section
        id="home"
        className="w-full md:min-h-full  flex md:py-10 py-20  items-start justify-center flex-col "
      >
        <div class="cube hidden md:flex  absolute right-20 top-5">
          <div class="topD"></div>
          <div>
            <span style={{ "--i": "0" }}></span>
            <span style={{ "--i": "1" }}></span>
            <span style={{ "--i": "2" }}></span>
            <span style={{ "--i": "3" }}></span>
          </div>

          <div class="cube2">
            <div>
              <span style={{ "--i": "0" }}></span>
              <span style={{ "--i": "1" }}></span>
              <span style={{ "--i": "2" }}></span>
              <span style={{ "--i": "3" }}></span>
            </div>

            <div class="cube3">
              <div class="top3"></div>
              <div>
                <span style={{ "--i": "0" }}></span>
                <span style={{ "--i": "1" }}></span>
                <span style={{ "--i": "2" }}></span>
                <span style={{ "--i": "3" }}></span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  text-white mt-[20px]">
          <div className=" lg:h-[250px] w-[90%]">
            <h6 className="uppercase text-[9px] font-bold tracking-[1.4px] mb-5">
              INTRODUCTION
            </h6>
            <h3 className="ml-2 text-[26px] leading-[60.7px] mb-5 font-[400] font-mono">
              I'm{" "}
              <span
                style={{
                  fontWeight: 400,
                  // fontFamily: "Anonymous Pro, monospace",
                  letterSpacing: 3,
                  fontSize: 40,
                  color: "white",
                }}
              >
                Thwe Thwe
              </span>
              ,{" "}
              <span
                style={{
                  display: "block",
                  color: "white",
                  fontWeight: 400,
                  // fontFamily: "Anonymous Pro, monospace",
                  letterSpacing: 1,
                  fontSize: 50,
                }}
              >
                A Junior Web Developer
              </span>
            </h3>
          </div>
          <hr className="w-8 mb-10" />
          {/* <div className="flex items-center gap-3 ml-10"> <button class="button-3d">Download CV</button><button class="button-4d">Hire me</button></div> */}

          <div className="flex items-center gap-3">
            <button
              className=" h-[50px] w-[200px] bg-[#2d2d2d] text-primary backdrop-blur-[70px] bg-opacity-40  z-1 rounded-xl
        flex items-center justify-center gap-3 shadow-inner	
        shadow-[#6b6b6b] border border-gray-500 border-opacity-20 z-10 hover:bg-primary hover:text-white transition-all 
         duration-300 ease-in-out"
            >
              <h6>Download CV</h6>
            </button>

            <button
              className=" h-[50px] w-[200px] bg-primary text-white backdrop-blur-[50px] bg-opacity-10  z-1 rounded-xl
        flex items-center justify-center gap-3 shadow-inner	
        shadow-[#6b6b6b] border border-gray-500 border-opacity-20 z-10 hover:bg-[#fff] hover:text-primary transition-all 
        duration-300 ease-in-out"
            >
              <h6>Hire Me</h6>
            </button>
          </div>
        </div>
      </section>
    </Waypoint>
  );
};

export default Hero;
