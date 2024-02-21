import Button from "../../../Interfaces/Button";
import TelegramCallToAction from "../../CallTOAction/CallToAction";
import RelatedEbooks from "../../Related Ebooks/RelatedEbooks";
import CplusImage from "/src/assets/Cplus.png";

const CPlusEbook = () => {
  return (
    <>
      <div className="h-fit grid sm:grid-cols-12 grid-cols-2  sm:gap-14 gap-y-4 sm:px-24 px-2 py-12">
        <div className="col-span-4 lg:h-1 h-80 px-3 py-5 rounded-lg">
          <img
            src={CplusImage}
            alt="JavaScript e-book"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-8 h-fit py-5 px-10 ">
          <h1 className="sm:text-4xl text-2xl pb-2">C++ Programming E-book</h1>
          <p className="text-xl pb-1">Topics covers in this E-book</p>
          <p className="text-lg pb-3">Description :</p>
          <div className="grid grid-cols-2 gap-9 pb-8">
            <div className="wripper">
              <p className="text-lg pb-2 font-medium underline">
                C++ Fundementals
              </p>
              <ol className="list-decimal list-inside text-lg">
                <li>Introduction to C++</li>
                <li>C++ Syntax</li>
                <li>Variable in C++</li>
                <li>User Input in C++</li>
                <li>DataTypes in C++</li>
                <li>C++ Operators</li>
                <li>C++ Strings</li>
                <li>C++ Math</li>
                <li>C++ Boolean</li>
                <li>C++ Conditions</li>
                <li>C++ Switch</li>
                <li>C++ While Loop</li>
                <li>C++ For Loop</li>
                <li>C++ Break/Continue</li>
                <li>C++ Arrays and Array methods</li>
                <li>C++ Structure</li>
                <li>C++ References</li>
                <li>C++ User Pointer</li>
              </ol>
            </div>

            <div className="wripper">
              <p className="text-lg pb-2 font-medium underline">
                C++ Functions
              </p>
              <ol className="list-decimal list-inside text-lg ">
                <li>C++ Functions</li>
                <li>C++ Function Parameters</li>
                <li>C++ Function Overloading</li>
                <li>C++ Recursion</li>
              </ol>

              <div className="wripper mt-5">
                <p className="text-lg pb-2 font-medium underline">
                  C++ Classes
                </p>
                <ol className="list-decimal list-inside text-lg ">
                  <li>C++ OOP</li>
                  <li>C++ Classes/Objects</li>
                  <li>C++ Constructors</li>
                  <li>C++ Access Specifier</li>
                  <li>C++ Access Encapsulation</li>
                  <li>C++ Access Inheritance</li>
                  <li>C++ Access Polymorphism</li>
                  <li>C++ Access Exceptions</li>
                </ol>
              </div>
            </div>
          </div>
          <Button text={"Download"} />
        </div>
      </div>

      <TelegramCallToAction />
      <RelatedEbooks />
    </>
  );
};

export default CPlusEbook;
