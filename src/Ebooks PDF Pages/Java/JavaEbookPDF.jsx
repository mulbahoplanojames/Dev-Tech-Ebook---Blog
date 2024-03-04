import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import Button from "../../Interfaces/Button";
import pdfFile from "/src/PDFS/javascript.pdf";

const JavaEbookPDF = () => {
  const [generatedResult, setGeneratedResult] = useState({
    result: "",
    aiName: "",
    user: "",
  });
  const [name, setName] = useState("");
  const [prompt, setPrompt] = useState("");

  const API_KEY = "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";
  const API_URL = "https://api.openai.com/v1/chat/completions";

  const handleFetch = () => {
    axios
      .post(
        API_URL,
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: name }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data.choices[0].message.content);
        setGeneratedResult({
          ...generatedResult,
          result: ` ${response.data.choices[0].message.content}`,
          aiName: "🤖 Dev!Tech Ai",
          user: "👤 You",
        });
        setPrompt(name);
        setName("");
      })
      .catch((error) => {
        console.error(error);
      });
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
          <aside className="h-fit shadow-xl shadow-slate-900 bg-1 col-span-4 px-2 py-4">
            <h1 className="text-4xl text-center pb-7 text-white">
              Dev!Tech AI
            </h1>
            <div className="flex items-center gap-3 pb-4">
              <input
                type="text"
                placeholder="Ask me anything..."
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
              <p className="text-xl">{generatedResult.user}</p>
              <p className="pb-4">{prompt}</p>
              <p className="pb-1 text-xl">{generatedResult.aiName}</p>
              <p className="pb-2">{generatedResult.result}</p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default JavaEbookPDF;
