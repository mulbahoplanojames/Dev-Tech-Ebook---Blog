import Button from "../../../Interfaces/Button";
import CImage from "/src/assets/C.png";
import TelegramCallToAction from "../../CallTOAction/CallToAction";
import RelatedEbooks from "../../Related Ebooks/RelatedEbooks";

const CEbook = () => {
  return (
    <>
      <div className="h-fit grid sm:grid-cols-12 grid-cols-2  sm:gap-14 gap-y-4 sm:px-24 px-2 py-12 mt-20">
        <div className="col-span-4 lg:h-1 h-80 px-3 py-5 rounded-lg">
          <img
            src={CImage}
            alt="JavaScript e-book"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-8 h-fit py-5 px-10 ">
          <h1 className="sm:text-4xl text-2xl pb-2">C Programming E-book</h1>
          <p className="text-xl pb-1">Topics covers in this E-book</p>
          <p className="text-lg pb-3">Description :</p>
          <div className="grid grid-cols-2 gap-9 pb-8">
            <div className="wripper">
              <p className="text-lg pb-2 font-medium underline">
                C Programming Fundementals
              </p>
              <ol className="list-decimal list-inside text-lg">
                <li>Introduction to C</li>
                <li>C Syntax</li>
                <li>Variable in C</li>
                <li>DataTypes in C</li>
                <li>C Constant</li>
                <li>C logical operators</li>
                <li>C Boolean</li>
                <li>Conditional branching: if...Else</li>
                <li>C Switch</li>
                <li>C While Loop</li>
                <li>C For Loop</li>
                <li>C Break/Continue</li>
                <li>C Arrays and Array methods</li>
                <li>C Numbers and Strings</li>
                <li>C User Input</li>
                <li>C User Memory Adress</li>
                <li>C User Pointer</li>
              </ol>
            </div>

            <div className="wripper">
              <p className="text-lg pb-2 font-medium underline">C Functions</p>
              <ol className="list-decimal list-inside text-lg ">
                <li>C Functions</li>
                <li>C Function Parameters</li>
                <li>C Function Declaration</li>
                <li>C Recursion</li>
                <li>C Math Functions</li>
              </ol>
            </div>
          </div>
          <Button text={"Download"} />
        </div>
      </div>

      <RelatedEbooks />
      <TelegramCallToAction />
    </>
  );
};

export default CEbook;
