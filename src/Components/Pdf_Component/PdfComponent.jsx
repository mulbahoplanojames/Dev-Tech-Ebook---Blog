import { useState } from "react";
import { Document, Page } from "react-pdf";
import pdfFile from "/src/PDFS/Beginners_Guide_to_HTML.pdf";

const PdfComponent = () => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
        className="w-full h-full"
      >
        {Array.apply(null, new Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => {
            return (
              <Page
                key={page}
                pageNumber={page}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            );
          })}
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default PdfComponent;
