import axios from "axios";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Button from "../../Interfaces/Button";
import PdfComponent from "../../Components/Pdf_Component/PdfComponent";

const PDF_FILE = "/src/PDFS_FILES/CSSNotes-oplanoWebTech.pdf";

const CSSEbookPDF = () => {
	const [generatedResult, setGeneratedResult] = useState({
		result: "",
		aiName: "",
		user: "",
	});
	const [name, setName] = useState("");
	const [prompt, setPrompt] = useState("");

	return (
		<>
			<div className='mt-32'>
				<div className='mb-5 ml-6'>
					<a href={PDF_FILE} download={"CSSNotes-oplanoWebTech.pdf"}>
						<Button text='Dounload PDF' />
					</a>
				</div>
				{/*//? wripper for the PDF and the aside for asking questions  */}
				<div className=' md:grid-cols-12 sm:gap-y-3 gap-y-9 gap-x-0 md:gap-x-5 grid grid-cols-2 px-6 pb-24'>
					<div className='sm:order-first h-fit bg-slate-200 lg:col-span-8 md:col-span-8 lg:overflow-hidden order-last col-span-4 px-10 overflow-hidden'>
						<PdfComponent PDF_FILE={PDF_FILE} />
					</div>
					{/* </Worker> */}
					<aside className='h-fit shadow-slate-900 bg-1 col-span-4 px-2 py-4 shadow-xl'>
						<h1 className='pb-7 text-4xl text-center text-white'>
							Dev!Tech AI
						</h1>
						<div className='flex items-center gap-3 pb-4'>
							<input
								type='text'
								placeholder='Ask me anything...'
								className='bg-2 w-10/12 h-12 px-5 border-none rounded-md outline-none'
								onChange={(e) => setName(e.target.value)}
								value={name}
							/>
							<FiSearch
								className='size-11 p-1 bg-white rounded-md cursor-pointer'
								onClick={handleFetch}
							/>
						</div>
						<div className='text-white'>
							<p className='text-xl'>{generatedResult.user}</p>
							<p className='pb-4'>{prompt}</p>
							<p className='pb-1 text-xl'>{generatedResult.aiName}</p>
							<p className='pb-2'>{generatedResult.result}</p>
						</div>
					</aside>
				</div>
			</div>
		</>
	);
};

export default CSSEbookPDF;
