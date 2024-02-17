import React from "react";
import Button from "../../Interfaces/Button";

const OffersCard = (props) => {
  const { title, description, image, href } = props;

  return (
    <>
      <div className="lg:w-Offerscard w-2 lg:h-56 h-72 rounded-lg flex overflow-hidden hover:shadow-2xl cursor-pointer">
        <div className="h-full w-3 place-self-start">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="py-4 px-3 w-1 ">
          <h1 className="text-2xl pb-3">{title}</h1>
          <p className="text-base pb-5">{description}</p>
          <a href={href}>
            <Button text={"Read More"} />
          </a>
        </div>
      </div>
    </>
  );
};

export default OffersCard;
