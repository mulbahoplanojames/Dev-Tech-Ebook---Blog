import React from "react";
import Button from "../../../Interfaces/Button";
import RelatedEbooks from "../../Related Ebooks/RelatedEbooks";
import JavaScriptImg from "/src/assets/javascript.jpg";
import TelegramCallToAction from "../../CallTOAction/CallToAction";

const JavaScriptEbook = () => {
  return (
    <>
      <div className="h-fit grid sm:grid-cols-12 grid-cols-2  sm:gap-14 gap-y-4 sm:px-24 px-2 py-12">
        <div className="col-span-4 lg:h-1 h-80 px-3 py-5 rounded-lg">
          <img
            src={JavaScriptImg}
            alt="JavaScript e-book"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-8 h-fit py-5 px-10 ">
          <h1 className="sm:text-4xl text-2xl pb-2">JavaScript E-book</h1>
          <p className="text-xl pb-1">Topics covers in this E-book</p>
          <p className="text-lg pb-3">Description :</p>
          <div className="grid grid-cols-2 gap-9 pb-8">
            <div className="wripper">
              <p className="text-lg pb-2 font-medium underline">
                JavaScript Fundementals
              </p>
              <ol className="list-decimal list-inside text-lg">
                <li>Introduction to JavaScript</li>
                <li>Code structure</li>
                <li>Variable in JavaScript</li>
                <li>DataType in JavaScript</li>
                <li>Interaction: alert, prompt, confirm</li>
                <li>Type conversion</li>
                <li>Basic operators, maths</li>
                <li>Conditional branching: if, &apos;?&apos;</li>
                <li>Comparisons</li>
                <li>Logical operators</li>
                <li>The &quot;switch&quot; statement</li>
                <li>Loops: while and for</li>
                <li>Functions</li>
                <li>Function expressions</li>
                <li>Functions Arrow functions, the basics</li>
              </ol>
            </div>
            <div className="wripper">
              <p className="text-lg pb-2 font-medium underline">
                Objects: the basics and Data Types
              </p>
              <ol className="list-decimal list-inside text-lg ">
                <li>Objects</li>
                <li>Object references and copying</li>
                <li>Object methods, &quot;this&quot;</li>
                <li>Object to primitive conversion</li>
                <li> Methods of primitives</li>
                <li>Numbers and Strings</li>
                <li> Arrays and Array methods</li>
                <li> Object.keys, values, entries</li>
                <li>Destructuring assignment</li>
                <li>Date and time</li>
                <li>JSON methods, toJSON</li>
              </ol>
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

export default JavaScriptEbook;
