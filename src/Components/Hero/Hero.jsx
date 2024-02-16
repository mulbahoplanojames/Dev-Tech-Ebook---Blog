import React from "react";

const Hero = () => {
  return (
    <>
      <div className="lg:py-20 py-14 px-5 lg:px-12">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1  gap-7  items-center justify-center">
          <div className="max-w-xl py-6 p-10">
            <h3 className="text-lg pb-4">_Dev!Tech</h3>
            <h1 className="text-4xl font-semibold pb-4">
              Let &apos;s Learn Together
            </h1>
            <p className="text-lg">
              Dev!Tech is the best place to learn ad grow your skills or carrer
              in the IT sector. Best contents on latest technologies including
              JavaScript, PYthon, HTML, CSS, C++, Java free of cost. With a
              commitment to accessibility, Dev!Tech fosters a collaborative
              community. Join Dev!Tech to unlock your full potential, stay
              relevant, and shape a successful path in technology.
            </p>
          </div>
          <div className="max-w-xl h-80 bg-blue-600  rounded-md">
            <img
              src="src/assets/hero.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
