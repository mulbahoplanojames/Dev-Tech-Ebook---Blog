import { useState } from "react";
import { Document, Page } from "react-pdf";

const PdfComponent = ({ PDF_FILE }) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document
        file={PDF_FILE}
        onLoadSuccess={onDocumentLoadSuccess}
        className="object-cover w-full h-full"
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
                className={"mt-10"}
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
