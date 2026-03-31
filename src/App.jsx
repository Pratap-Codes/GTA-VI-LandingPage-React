import React, { useState } from "react";
import { useGSAP} from "@gsap/react";
import gsap from "gsap"

const App = () => {
  const [showContent, setShowContent] = useState(false) 
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group",{
      rotate: 10,
      duration: 2,
      ease:"Power4.easeInOut",
      transformOrigin: "50% 50%"
    })
    .to(".vi-mask-group",{
      scale:10,
      duration:2,
      delay:-1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function(){
        if(this.progress() >= .9){
          document.querySelector(".svg").remove()
          setShowContent(true)
          this.kill();
        }
      }
    })
  });
  return (
    <>
    <div className="svg flex items-center justify-center fixed top-0 left-0 z-[50] w-full h-screen overflow-hidden bg-black">
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
        <div className="navbar w-full py-10 px-10 bg-red-500"></div>
          <div className="imagesdiv relative w-full h-screen">
            <img className="w-full h-full absolute top-0 left-0 object-cover" src="./sky.png" alt="" />
            <img className="w-full h-full absolute top-0 left-0 object-cover" src="./bg.png" alt="" />
            <img className="absolute -bottom-full left-1/2 -translate-x-1/2  object-contain scale-[0.7] overflow-hidden" src="./boy.png" alt="" />
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default App;
