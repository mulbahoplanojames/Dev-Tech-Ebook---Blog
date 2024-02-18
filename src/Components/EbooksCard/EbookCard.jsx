import React from "react";
import Button from "../../Interfaces/Button";

const EbookCard = (props) => {
  const { title, image, href } = props;

  return (
    <>
      <div className="">
        <div className="animate__animated animate__bounce w-64 h-80 rounded-lg overflow-hidden cursor-pointer shadow-2xl hover:shadow-1 hover:scale-110 transition duration-300">
          <div className="w-full h-52 ">
            <img
              src={image}
              alt=""
              className="w-full h-full object-scale-down"
            />
          </div>
          <div className="text-center">
            <h1 className="py-3 text-2xl">{title}</h1>
            <Button text={"Download"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EbookCard;
