import { Worker, Viewer } from "@react-pdf-viewer/core";

const JavaScriptEbbokPDF = () => {
  return (
    <>
      <div className="mt-32 grid md:grid-cols-12 grid-cols-2 px-6 pb-24">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <div className="bg-red-500 col-span-8 h-2 lg:w-pdfWripper overflow-scroll ">
            <Viewer fileUrl={"/src/test.bpdf"} />
          </div>
        </Worker>
        <aside className="bg-blue-500 col-span-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          consectetur?
        </aside>
      </div>
    </>
  );
};

export default JavaScriptEbbokPDF;
