import Button from "../../../Interfaces/Button";
import RelatedEbooks from "../../Related Ebooks/RelatedEbooks";
import Python from "/src/assets/PYTHON_BOOK.png";
import TelegramCallToAction from "/src/Components/CallTOAction/CallToAction.jsx";

const PythonEbook = () => {
  return (
    <>
      <div className="h-fit grid sm:grid-cols-12 grid-cols-2  sm:gap-14 gap-y-4 sm:px-24 px-3 py-12">
        <div className="col-span-4 lg:h-1 h-80 px-3 py-5 rounded-lg">
          <img
            src={Python}
            alt="Python e-book"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-8 h-fit py-5 px-10 ">
          <h1 className="sm:text-4xl text-2xl pb-2">Python E-book</h1>
          <p className="text-xl pb-1">Topics covers in this E-book</p>
          <p className="text-lg pb-3">Description :</p>
          <ol className="list-decimal list-inside pb-4 text-lg">
            <li>Introduction to Python</li>
            <li>Installation</li>
            <li>Modules</li>
            <li>Comment and PIP</li>
            <li>Variable in Python</li>
            <li>DataType in Python</li>
            <li>Operators in Python</li>
            <li>Key word in Python</li>
            <li>List, Tupple and Dictionary</li>
            <li>Type conversion</li>
            <li>Flow control</li>
            <li>Loops</li>
            <li>Strings</li>
            <li>Functions</li>
          </ol>
          <Button text={"Download"} />
        </div>
      </div>

      <TelegramCallToAction />
      <RelatedEbooks />
    </>
  );
};

export default PythonEbook;
