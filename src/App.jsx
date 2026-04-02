import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-50 w-full h-screen overflow-hidden bg-black">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Poppins"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>

          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full bg-black">
          <div className="landing w-full h-screen">
            <div className="navbar absolute z-51 top-0 left-0 w-full py-6 px-6 ">
              <div className="logo flex  items-center gap-4.5 mx-2">
                <div className="lines flex flex-col gap-1.5">
                  <div className="line h-1 w-10 bg-white"></div>
                  <div className="line h-1 w-8 bg-white"></div>
                  <div className="line h-1 w-5 bg-white"></div>
                </div>
                <h3 className="text-3xl text-white font-extrabold leading-none">Rockstar</h3>
              </div>
            </div>
            <div className="imagesdiv relative w-full h-screen">
              <img
                className="w-full h-full absolute top-0 left-0 object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="w-full h-full absolute top-0 left-0 object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="absolute top-0 left-1/2 -translate-x-1/2  flex flex-col gap-1 leading-none py-3">
                <h4 className="text-7xl text-white font-extrabold -ml-15">Grand</h4>
                <h4 className="text-7xl text-white font-extrabold mx-20">Theft</h4>
                <h4 className="text-7xl text-white font-extrabold -ml-5">Auto</h4>

              </div>
              <img
                className="absolute -bottom-full left-1/2 -translate-x-1/2  object-contain scale-[0.7] overflow-hidden"
                src="./boy.png"
                alt=""
              />
            </div>
            <div className="btmbar absolute bottom-0 left-0 w-full py-15 px-5 bg-linear-to-t from-black to-transparent">
            <div className="flex gap-4 text-white items-center">
              <i className="ri-arrow-down-line text-2xl"></i>
              <h3 className="text-xl ">Scroll down</h3>
            </div>
            <img src="./ps5.png" alt="" className="absolute h-25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
