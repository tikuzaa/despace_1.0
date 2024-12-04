import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import About from "./components/About";
import Prizes from "./components/Prizes";
import Navbar from "./components/Navbar";
import { FaGithub } from "react-icons/fa";
import Organizers from "./components/Organizers";
import { Reveal } from "./components/Reveal";

const LandingPage = () => {
  const originalText = "❗Registration is Live";
  const randomWords = [
    "📝Sign Up Now",
    "🚀 Join Us Today",
    "✅ Secure Your Spot",
    "🎉 Don't Miss Out",
    "🔔 Act Fast!",
  ];

  const [displayText, setDisplayText] = useState(randomWords[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;

    const updateText = () => {
      if (randomWords.length <= currentIndex) setDisplayText(originalText);
      else {
        setDisplayText(randomWords[currentIndex]);
      }
      setCurrentIndex((prevIndex) => prevIndex + 1); // Loop through the array
    };

    // Update the text every second
    interval = setInterval(updateText, 1000);

    // Cleanup on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, randomWords]);

  const handleLogin = () => {
    window.location.href =
      "https://github.com/login/oauth/authorize?client_id=Ov23liJXs3PPaCWpwZsh&scope=user";
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen overflow-hidden bg-[#062800] flex items-center justify-center px-6 relative "
        id="home"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/pfp/bgvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75"></div>
        <div className="text-center z-0 text-2xl font-bold text-[#004825] p-10">
          <h1 className="text-8xl font-oxanium font-bold text-gray-300 mb-10 max-[712px]:leading-[0.5rem]">
            <Reveal>
              {randomWords.length < currentIndex ? (
                <div className="z-5 relative top-[5rem] ">
                  <span className="text-8xl z-5 font-oxanium font-bold animate-ping max-[712px]:text-[2.75rem]">
                    ❗
                  </span>
                  <span className="text-8xl z-5 font-oxanium font-bold max-[712px]:text-6xl max-[712px]:text-[2.75rem]">
                    Registration is Live
                  </span>
                </div>
              ) : (
                <span className="text-8xl relative top-[5rem] z-5 font-oxanium font-bold max-[712px]:text-6xl max-[712px]:text-[2.75rem]">
                  {displayText}
                </span>
              )}
            </Reveal>
          </h1>
          <Reveal>
            <p className="text-white relative top-[5rem] z-5 text-lg mb-8 font-normal font-oxanium text-wrap">
              <br />
              📅
              <strong className="text-2xl"> December 5th, 2024</strong> -
              <strong className="text-2xl"> January 1st, 2025 </strong>📅
              <br /> Join us for an exhilarating open-source project competition
              where developers, designers, and tech enthusiasts come together to
              innovate and collaborate! <br />
              <br />
              <strong className="text-2xl z-5">Sign Up Now!</strong>
            </p>
          </Reveal>
          <Reveal>
            <button
              onClick={handleLogin}
              className="bg-[#8df0ff] bg-opacity-40 relative top-[4rem] z-5 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#007987] hover:text-black transition duration-300"
            >
              <FaGithub
                className="inline-block mr-2 relative bottom-1 left-2"
                size={20}
              />{" "}
              Authorize
            </button>
          </Reveal>
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="prizes">
        <Prizes />
      </div>
      <div id="organizers">
        <Organizers />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
