import React from "react";

const AdvertisementCard = (props) => {
  const { label, image } = props;

  return (
    <div>
      <div className="w-64 h-36 bg-red-300 rounded-lg relative overflow-hidden shadow-lg shadow-black">
        <img src={image} alt="" className="object-cover w-full h-full" />
        <p className="absolute bottom-3 right-0 bg-1 px-4 py-1 rounded-s text-white">
          {label}
        </p>
      </div>
    </div>
  );
};

export default AdvertisementCard;
