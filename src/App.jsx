import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", (e) => {
      const moveX = (e.clientX / window.innerWidth - 0.5) * 20;

      gsap.to(".main .text", {
        x: `${moveX * 0.4}%`,
      });
      gsap.to(".main .sky", {
        x: moveX,
      });
      gsap.to(".bg", {
        x: moveX * 1.5
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex pointer-events-none items-center justify-center fixed top-0 left-0 z-50 w-full h-screen  bg-black">
        <svg
          className="w-full h-full "
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
        <div className="main w-full min-h-screen bg-black">
          <div className="landing relative w-full h-screen overflow-hidden">
            <div className="navbar absolute z-51 top-0 left-0 w-full py-6 px-6 ">
              <div className="logo flex  items-center gap-4.5 mx-2">
                <div className="lines flex flex-col gap-1.5">
                  <div className="line h-1 w-10 bg-white"></div>
                  <div className="line h-1 w-8 bg-white"></div>
                  <div className="line h-1 w-5 bg-white"></div>
                </div>
                <h3 className="text-3xl text-white font-extrabold leading-none">
                  Rockstar
                </h3>
              </div>
            </div>
            <div className="imagesdiv relative w-full h-screen">
              <img
                className="sky scale-[1.2] w-full h-full absolute top-0 left-0 object-cover pointer-events-none"
                src="./sky.png"
                alt=""
              />
              <img
                className="bg scale-[1.1] w-full h-full absolute top-0 left-0 object-cover pointer-events-none"
                src="./bg.png"
                alt=""
              />
              <div className=" absolute top-0 left-1/2 -translate-x-1/2  flex flex-col gap-1 leading-none py-4">
                <h4 className="text text-[6rem] text-white font-extrabold -ml-20 -translate-x-16">
                  Grand
                </h4>
                <h4 className="text text-[6rem] text-white font-extrabold  -ml-1 translate-x-16">
                  Theft
                </h4>
                <h4 className="text text-[6rem] text-white font-extrabold -ml-20 -translate-x-16">
                  Auto
                </h4>
              </div>
              <img
                className="boy absolute -bottom-full left-1/2 -translate-x-1/2  object-contain scale-[0.7] overflow-hidden pointer-events-none "
                src="./boy.png"
                alt=""
              />
            </div>
            <div className="btmbar absolute bottom-0 left-0 w-full py-10 px-5 bg-linear-to-t from-black to-transparent">
              <div className="flex gap-4 text-white items-center">
                <i className="ri-arrow-down-line text-2xl"></i>
                <h3 className="text-xl ">Scroll down</h3>
              </div>
              <img
                src="./ps5.png"
                alt=""
                className="absolute h-15 bottom-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
          <div className="w-full h-screen flex justify-center items-center bg-black">
            <div className="cont h-[80%] w-full flex gap-1 px-10">
              <div className="img w-1/2 relative h-full ">
                <img src="./pose.png" alt="" className="w-100 h-120 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.3]"  />
              </div>
              <div className="right w-1/3 my-auto text-white align-middle text-justify">
                  <h3 className="text-5xl font-extrabold text-white">Still running,</h3>
                  <h3 className="text-5xl font-extrabold text-white ">not hunting</h3>
                  <div className="paragraph py-4 font-medium">
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur consequuntur suscipit! Tenetur, eveniet ipsam, maxime dolor quam est sit fugiat explicabo eaque fugit error!</p>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, rerum.</p>
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem excepturi nihil, voluptatum id modi voluptatem!</p>
                    <button className="p-5 bg-yellow-600 text-black mt-5 text-2xl font-extrabold cursor-pointer hover:bg-yellow-700 transition 1s ease-in-out rounded-2xl">Download now</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default App;
