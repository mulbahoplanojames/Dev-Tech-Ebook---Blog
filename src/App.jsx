import { BrowserRouter, Routes, Route } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext, useEffect } from "react";

//? =========================================================================
//! Pages
import Home from "./Pages/Home";
import Ebook from "./Pages/Ebook";
import Blog from "./Pages/Blog";
import ContactUs from "./Pages/ContactUs";
import PageNotFound from "./Pages/PageNotFound";

//? ============================================================================
//! Layouts
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

//? =============================================================================
//! Ebooks
import PythonEbook from "./Components/List Of Ebooks/Python Ebook/PythonEbook";
import JavaScriptEbook from "./Components/List Of Ebooks/JavaScript Ebook/JavaScriptEbook";
import HtmlEbook from "./Components/List Of Ebooks/Html Ebook/HtmlEbook";
import JavaEbook from "./Components/List Of Ebooks/Java Ebook/JavaEbook";
import CEbook from "./Components/List Of Ebooks/C Ebook/CEbook";
import CPlusEbook from "./Components/List Of Ebooks/C++ Ebook/CPlusEbook";
import CSSEbook from "./Components/List Of Ebooks/CSS Ebook/CSSEbook";

//? =================================================================================
//! PDF Ebooks
import JavaScriptEbbokPDF from "./Ebooks PDF Pages/JavaScript/JavaScriptEbbokPDF";
import PythonEbookPDF from "./Ebooks PDF Pages/Python/PythonEbookPDF";
import HtmlEbookPDF from "./Ebooks PDF Pages/HTML/HtmlEbookPDF";
import JavaEbookPDF from "./Ebooks PDF Pages/Java/JavaEbookPDF";
import CPlusEbookPDF from "./Ebooks PDF Pages/C Plus-Plus/CPlusEbookPDF";
import CEbookPDF from "./Ebooks PDF Pages/C/CEbookPDF";
import CSSEbookPDF from "./Ebooks PDF Pages/CSS/CSSEbookPDF";
import { AppContext } from "./Context/AppContext";

//? =================================================================
//! Blog Posts
import BlogPost_1 from "./Posts/BlogPost_1";

//? ==================================================================================
//? Importing React PDF set up
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.js",
	import.meta.url
).toString();

//todo =====================================================================================

/*
 * This App component is the main component of this application.
 * It contains the routing and layout of this application.
 * It also displays a welcome message using the SweetAlert2 library.
 */
const App = () => {
	const { darkModeStyle } = useContext(AppContext);

	/*
	 *I created a useEffect hook it is used to display a welcome message using the SweetAlert2 library.
	 * The message is displayed when the component is mounted.
	 */
	useEffect(() => {
		Swal.fire({
			title: "Welcome to Dev!Tech Ebooks and Blogs",
			text: "Feel free to reach out through the contact form. Your feedback, questions, and suggestions are important to us",
			icon: "info",
		});
	}, []);

	return (
		<>
			<div className='w-screen h-screen overflow-y-auto' style={darkModeStyle}>
				{/* BrowserRouter component is used for client-side routing. */}
				<BrowserRouter>
					{/*//! Navbar component displays the navigation bar. */}
					<Navbar />
					<Routes>
						{/*//? ================================================================================= */}
						{/*//! The below are the Pages */}
						<Route path='/' element={<Home />} />
						<Route path='/ebooks' element={<Ebook />} />
						<Route path='/blogs' element={<Blog />} />
						<Route path='/contact-us' element={<ContactUs />} />
						<Route path='*' element={<PageNotFound />} />
						{/*//? ================================================================================= */}
						{/* //! The below are the Ebooks Individual Pages */}
						<Route
							path='/ebooks/javaScriptebook'
							element={<JavaScriptEbook />}
						/>
						<Route path='/ebooks/pythonebook' element={<PythonEbook />} />
						<Route path='/ebooks/htmlebook' element={<HtmlEbook />} />
						<Route path='/ebooks/javaebook' element={<JavaEbook />} />
						<Route path='/ebooks/Cebook' element={<CEbook />} />
						<Route path='/ebooks/C++ebook' element={<CPlusEbook />} />
						<Route path='/ebooks/cssebook' element={<CSSEbook />} />
						{/*//? ================================================================================= */}
						{/*//! The below Components are for the blog posts */}
						<Route path='/Posts/BlogPost_1' element={<BlogPost_1 />} />
						{/*//? ================================================================================= */}
						{/* //! The below are the PDFS Ebooks Pages where you can access individual Ebooks for Reading or downloading */}
						<Route
							path='/ebooks/javaScriptebook/javaScriptebookpdf'
							element={<JavaScriptEbbokPDF />}
						/>
						<Route
							path='/ebooks/pythonebook/pythonebookpdf'
							element={<PythonEbookPDF />}
						/>
						<Route
							path='/ebooks/htmlebook/htmlebookpdf'
							element={<HtmlEbookPDF />}
						/>
						<Route
							path='/ebooks/javaebook/javaebookpdf'
							element={<JavaEbookPDF />}
						/>
						<Route
							path='/ebooks/cplusebook/cplusebookpdf'
							element={<CPlusEbookPDF />}
						/>
						<Route path='/ebooks/cbook/cebookpdf' element={<CEbookPDF />} />
						<Route
							path='/ebooks/cssbook/cssebookpdf'
							element={<CSSEbookPDF />}
						/>
					</Routes>
					{/*//! Footer component displays the footer. */}
					<Footer />
				</BrowserRouter>
			</div>
		</>
	);
};

export default App;
