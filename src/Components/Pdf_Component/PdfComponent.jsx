import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";

const PdfComponent = ({ PDF_FILE }) => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	useEffect(() => {
		if (PDF_FILE) {
			setPageNumber(1);
		}
	}, [PDF_FILE]);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	if (!PDF_FILE) {
		return null;
	}

	return (
		<div>
			<Document
				file={PDF_FILE}
				onLoadSuccess={onDocumentLoadSuccess}
				className='object-cover w-full h-full'
			>
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
			{numPages && (
				<p>
					Page {pageNumber} of {numPages}
				</p>
			)}
		</div>
	);
};

export default PdfComponent;
