import { Worker, Viewer } from "@react-pdf-viewer/core";
const pdffile = "/src/javascript.pdf";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { FiSearch } from "react-icons/fi";

const JavaScriptEbbokPDF = () => {
  return (
    <>
      <div className="mt-32 grid md:grid-cols-12 grid-cols-2 px-6 pb-24">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <div className="col-span-8 h-2 lg:w-pdfWripper border-2 border-black overflow-x-auto  ">
            <Viewer fileUrl={pdffile} initialPage={1} defaultScale={0.48} />
          </div>
        </Worker>
        <aside className="h-fit shadow-xl shadow-black bg-slate-600 col-span-4 px-2 py-4">
          <h1 className="text-4xl text-center pb-7 text-white">Search Terms</h1>
          <div className="flex items-center gap-3 pb-10">
            <input
              type="text"
              className="w-10/12 h-12 outline-none border-none px-5 rounded-md bg-2"
            />
            <FiSearch className="size-11 cursor-pointer bg-white p-1 rounded-md" />
          </div>
        </aside>
      </div>
    </>
  );
};

export default JavaScriptEbbokPDF;
