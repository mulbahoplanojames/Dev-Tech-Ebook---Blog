import Button from "../../../Interfaces/Button";
import RelatedEbooks from "../../Related Ebooks/RelatedEbooks";
import JavaScriptImg from "/src/assets/javascript.jpg";
import TelegramCallToAction from "../../CallTOAction/CallToAction";

const JavaScriptEbook = () => {
  return (
    <>
      <div className="h-fit grid sm:grid-cols-12 grid-cols-2 sm:gap-14 gap-y-4 md:px-24 px-1 py-12 mt-20 ">
        <div className="col-span-4 lg:h-1 h-80 px-3 py-5 rounded-lg">
          <img
            src={JavaScriptImg}
            alt="JavaScript e-book"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-8 h-fit py-5 md:px-10 px-2 ">
          <h1 className="sm:text-4xl text-2xl pb-2">JavaScript E-book</h1>
          <p className="text-xl pb-1">Topics covers in this E-book</p>
          <p className="text-lg pb-3">Description :</p>
          <div className="grid grid-cols-2 gap-9 pb-8">
            <div className="wripper">
              <ol className="list-decimal list-inside text-lg">
                <li className="text-lg pb-1 font-medium underline">
                  Introduction to JavaScript
                </li>
                <ul className="list-disc list-inside">
                  <li> Overview of JavaScript</li>
                  <li>Role in web development</li>
                  <li>Key features and characteristics</li>
                </ul>
                
                <li className="text-lg pb-1 font-medium underline">
                  Code Structure
                </li>
                <ul className="list-disc list-inside">
                  <li> Syntax and conventions</li>
                  <li>Statements vs Expressions</li>
                  <li>Best practices for clean code</li>
                </ul>

                <li className="text-lg pb-1 font-medium underline">
                  Variables in JavaScript
                </li>
                <ul className="list-disc list-inside">
                  <li> Declaration and Initialization</li>
                  <li>Variable Scope</li>
                  <li>Hoisting and its implications</li>
                  <li>Constants and their use</li>
                </ul>

                <li className="text-lg pb-1 font-medium underline">
                  Data Types in JavaScript
                </li>
                <ul className="list-disc list-inside">
                  <li> Primitive Data Types</li>
                  <li>Complex Data Types</li>
                  <li>Complex Data Types</li>
                </ul>

                <li className="text-lg pb-1 font-medium underline">
                  Type Conversion
                </li>
                <ul className="list-disc list-inside">
                  <li> Implicit vs Explicit Conversion</li>
                  <li>RNumber(), String(), Boolean() functions</li>
                  <li>Common use cases</li>
                </ul>

                <li className="text-lg pb-1 font-medium underline">
                  Basic Operators and Math in JavaScript
                </li>
                <ul className="list-disc list-inside">
                  <li> Arithmetic Operators</li>
                  <li>Assignment Operators</li>
                  <li>Math Object and its methods</li>
                </ul>
              </ol>
            </div>
            {/* //! End of wripper  */}

            <div className="wripper">
              <ol>
                <li className="text-lg pb-1 font-medium underline">
                  Conditional Branching: if, &spos;?&spos;
                </li>
                <ul className="list-disc list-inside">
                  <li> If statement and its variations</li>
                  <li>Role in web developmentTernary operator (?)</li>
                  <li>Practical examples </li>
                </ul>

                <li className="text-lg pb-1 font-medium underline">
                  Comparisons in JavaScript
                </li>
                <ul className="list-disc list-inside">
                  <li> Equality and Inequality operators</li>
                  <li>Strict equality (===) vs Loose equality (==)</li>
                </ul>

                <li className="text-lg pb-1 font-medium underline">
                  Logical Operators
                </li>
                <ul className="list-disc list-inside">
                  <li> Logical AND, OR, NOT</li>
                  <li>Use cases in conditional statements</li>
                  <li>Short-circuit evaluation</li>
                </ul>

                <li className="text-lg pb-1 font-medium underline">
                  The &quot;switch&quot; Statement
                </li>
                <ul className="list-disc list-inside">
                  <li>Syntax and usage</li>
                  <li>When to use switch over if-else</li>
                </ul>

                <li className="text-lg pb-1 font-medium underline">
                  Loops: while and for
                </li>
                <ul className="list-disc list-inside">
                  <li>While loop and its variations</li>
                  <li>For loop and its applications</li>
                  <li>Loop control statements (break, continue)</li>
                </ul>

                <li className="text-lg pb-1 font-medium underline">
                  Functions in JavaScript
                </li>
                <ul className="list-disc list-inside">
                  <li>Declaration and Invocation</li>
                  <li>Parameters and Return values</li>
                  <li>Function Scope</li>
                  <li>Function expressions</li>
                </ul>

                <li className="text-lg pb-1 font-medium underline">
                  Arrow Functions: The Basics
                </li>
                <ul className="list-disc list-inside">
                  <li>Syntax and concise form</li>
                  <li>Lexical scoping in arrow functions</li>
                  <li>Use cases and benefits</li>
                </ul>
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
