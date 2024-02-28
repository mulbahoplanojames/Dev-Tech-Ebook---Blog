import { Worker, Viewer } from "@react-pdf-viewer/core";
const pdfFile = "/src/javascript.pdf";
import "@react-pdf-viewer/core/lib/styles/index.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import Button from "../../Interfaces/Button";

const PythonEbookPDF = () => {
  const [searchResult, setSearchResult] = useState({
    word: "",
    partOfSpeech: "....",
    definition: ".....",
  });
  const [name, setName] = useState("");

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = () => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${name}`)
      .then((res) => {
        // console.log(res.data[0]);
        setSearchResult({
          ...searchResult,
          word: res.data[0].word,
          partOfSpeech: res.data[0].meanings[0].partOfSpeech,
          definition: res.data[0].meanings[0].definitions[0].definition,
        });
      })
      .then((err) => {
        console.error(err);
      });

    setName("");
  };

  return (
    <>
      <div className="mt-32">
        <div className="ml-6 mb-5">
          <a href={pdfFile} download={"JavaScript-ebook.pdf"}>
            <Button text="Dounload PDF" />
          </a>
        </div>
        <div className=" grid md:grid-cols-12 grid-cols-2 px-6 pb-24 sm:gap-y-3 gap-y-9 gap-x-0 md:gap-x-5">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <div className="col-span-8 h-2 lg:w-pdfWripper border-2 border-black overflow-x-auto sm:order-first order-last">
              <Viewer fileUrl={pdfFile} initialPage={1} defaultScale={0.48} />
            </div>
          </Worker>
          <aside className="h-fit shadow-xl shadow-black bg-slate-600 col-span-4 px-2 py-4">
            <h1 className="text-4xl text-center pb-7 text-white">
              Search Terms
            </h1>
            <div className="flex items-center gap-3 pb-10">
              <input
                type="text"
                placeholder="Search...."
                className="w-10/12 h-12 outline-none border-none px-5 rounded-md bg-2"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <FiSearch
                className="size-11 cursor-pointer bg-white p-1 rounded-md"
                onClick={handleFetch}
              />
            </div>
            <div className="text-white">
              <h1 className="text-xl pb-4">Word : {searchResult.word}</h1>
              <h1 className="text-xl pb-4">
                Part Of Speech : {searchResult.partOfSpeech}
              </h1>
              <h1 className="text-xl pb-4">
                Maening : {searchResult.definition}
              </h1>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default PythonEbookPDF;
