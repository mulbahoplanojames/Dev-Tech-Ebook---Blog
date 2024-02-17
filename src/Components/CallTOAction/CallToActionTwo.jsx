import { FaInstagram } from "react-icons/fa";

const CallToActionTwo = () => {
  return (
    <>
      <div className="py-12 lg:px-36 px-4">
        <div className="call-to-action bg-gradient-to-r from-pink-500 via-red-400 to-red-500 ">
          <h1 className="lg:text-3xl text-2xl text-white">
            {" "}
            Join Me on Telegram for more free contents
          </h1>
          <div className="lg:w-28 lg:h-28 w-24 h-16  bg-red-800 rounded-full flex justify-center items-center">
            <a href="" target="blank">
              <FaInstagram className="lg:size-20 size-8 text-white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToActionTwo;
