import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const CallToAction = () => {
  return (
    <>
      <div className="py-12 lg:px-36 px-4">
        <div className="call-to-action bg-blue-300">
          <h1 className="lg:text-3xl text-2xl text-white">
            Join Us on Telegram for more free contents
          </h1>
          <div className="lg:w-28 lg:h-28 w-24 h-16  bg-blue-500 rounded-full flex justify-center items-center">
            <a href="https://t.me/Oplanomulbah" target="blank">
              <FaTelegramPlane className="lg:size-20 size-8 text-white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
