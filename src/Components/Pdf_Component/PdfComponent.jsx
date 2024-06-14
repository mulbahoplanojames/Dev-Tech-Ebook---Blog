import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";

/**
 * PdfComponent is a component i create to renders a PDF file.
 * It uses the react-pdf library to render the PDF.
 */
const PdfComponent = ({ PDF_FILE }) => {
	// State to store the number of pages in the PDF
	const [numPages, setNumPages] = useState(null);
	// State to store the current page number
	const [pageNumber, setPageNumber] = useState(1);

	// When the PDF_FILE changes, reset the page number to 1
	useEffect(() => {
		if (PDF_FILE) {
			setPageNumber(1);
		}
	}, [PDF_FILE]);

	/**
	 * Callback function that is called when the PDF is successfully loaded.
	 * It sets the number of pages in the PDF.
	 */
	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	// If PDF_FILE is not provided, return null
	if (!PDF_FILE) {
		return null;
	}

	return (
		<div>
			{/* Render the current page number and total number of pages */}
			{numPages && (
				<p>
					Page {pageNumber} of {numPages}
				</p>
			)}
			<Document
				file={PDF_FILE}
				onLoadSuccess={onDocumentLoadSuccess}
				className='object-cover w-full h-full'
			>
				{/* Render all the pages in the PDF */}
				{Array.from({ length: numPages }, (_, i) => (
					<Page
						key={i + 1}
						pageNumber={i + 1}
						renderTextLayer={false}
						renderAnnotationLayer={false}
						className={"mt-10"}
					/>
				))}
			</Document>
		</div>
	);
};

export default PdfComponent;
