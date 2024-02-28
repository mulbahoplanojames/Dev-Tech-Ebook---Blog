import { BrowserRouter, Routes, Route } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";
//! The below are the imported Pages and LayOuts
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import Ebook from "./Pages/Ebook";
import Blog from "./Pages/Blog";
import ContactUs from "./Components/Contact Us/ContactUs";
import Footer from "./Layout/Footer";
//! The below are the imported Ebooks
import PythonEbook from "./Components/List Of Ebooks/Python Ebook/PythonEbook";
import JavaScriptEbook from "./Components/List Of Ebooks/JavaScript Ebook/JavaScriptEbook";
import HtmlEbook from "./Components/List Of Ebooks/Html Ebook/HtmlEbook";
import JavaEbook from "./Components/List Of Ebooks/Java Ebook/JavaEbook";
import CEbook from "./Components/List Of Ebooks/C Ebook/CEbook";
import CPlusEbook from "./Components/List Of Ebooks/C++ Ebook/CPlusEbook";
import CSSEbook from "./Components/List Of Ebooks/CSS Ebook/CSSEbook";
//! The below are the imported PDF Ebooks
import JavaScriptEbbokPDF from "./Ebooks PDF Pages/JavaScript/JavaScriptEbbokPDF";
import PythonEbookPDF from "./Ebooks PDF Pages/Python/PythonEbookPDF";
import HtmlEbookPDF from "./Ebooks PDF Pages/HTML/HtmlEbookPDF";

const App = () => {
  useEffect(() => {
    Swal.fire({
      title: "Welcome to Dev!Tech Ebooks and Blogs",
      text: "Feel free to reach out through the contact from. Your feedback, questions and suggestions are important to us",
      icon: "info",
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ebooks" element={<Ebook />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* //! The below are the imported Ebooks */}
          <Route path="/ebooks/pythonebook" element={<PythonEbook />} />
          <Route path="/ebooks/javaScriptebook" element={<JavaScriptEbook />} />
          <Route path="/ebooks/htmlebook" element={<HtmlEbook />} />
          <Route path="/ebooks/javaebook" element={<JavaEbook />} />
          <Route path="/ebooks/Cebook" element={<CEbook />} />
          <Route path="/ebooks/C++ebook" element={<CPlusEbook />} />
          <Route path="/ebooks/cssebook" element={<CSSEbook />} />
          {/* //! The below are the imported PDFS Ebooks */}
          <Route
            path="/ebooks/javaScriptebook/javaScriptebookpdf"
            element={<JavaScriptEbbokPDF />}
          />
          <Route
            path="/ebooks/pythonebook/pythonebookpdf"
            element={<PythonEbookPDF />}
          />
          <Route
            path="/ebooks/htmlebook/htmlebookpdf"
            element={<HtmlEbookPDF />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
