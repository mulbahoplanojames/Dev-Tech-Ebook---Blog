import React from "react";

const AdvertisementCard = (props) => {
  return (
    <div>
      <div className="w-64 h-36 bg-red-300 rounded-lg relative animate-pulse hover:animate-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        tenetur!
        <p className="absolute bottom-3 right-3 bg-1 px-4 py-1 rounded-s">
          Python blog
        </p>
      </div>
    </div>
  );
};

export default AdvertisementCard;
