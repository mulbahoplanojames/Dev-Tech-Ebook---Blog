import { hero_Text } from "../../Data/EbooksData";
import heroImg from "/src/assets/heroImage.png";
import "animate.css";

/**
 * Hero component displays the hero section of the website.
 * this section contains the text and the image display on the home page
 */
const Hero = () => {
  return (
    <>
      <div className="lg:py-20 py-14 lg:px-12 px-3 mt-10">
        <div className="tw_hero">
          {/* The text section */}
          <div className="lg:py-6 lg:px-10 animate__animated animate__fadeInUp max-w-xl px-3 py-3">
            <h3 className="pb-4 text-lg">_Dev!Tech</h3>
            <h1 className="lg:text-4xl pb-4 text-3xl font-semibold">
              Let &apos;s Learn Together
            </h1>
            <p className="text-lg">{hero_Text}</p>
          </div>
          {/* The image section */}
          <div className="lg:h-96 sm:h-80 h-80 lg:order-last md:order-last animate__animated animate__fadeInDown order-first max-w-xl rounded-md">
            <img
              src={heroImg}
              alt="Image of team working together"
              className=" w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
