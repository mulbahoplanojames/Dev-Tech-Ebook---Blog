import React from "react";

const TelegramCallToAction = (props) => {
  const { icon, title, href } = props;

  return (
    <>
      <div className="py-12 lg:px-36 px-4">
        <div className="call-to-action bg-blue-300">
          <h1 className="lg:text-3xl text-2xl text-white">{title}</h1>
          <div className="lg:w-28 lg:h-28 w-24 h-16  bg-blue-500 rounded-full flex justify-center items-center">
            <a href={href} target="blank">
              {icon}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TelegramCallToAction;
