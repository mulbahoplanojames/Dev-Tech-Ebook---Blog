import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import Ebook from "./Pages/Ebook";
import Blog from "./Pages/Blog";
import Footer from "./Layout/Footer";
import PythonEbook from "./Components/List Of Ebooks/Python Ebook/PythonEbook";
import JavaScriptEbook from "./Components/List Of Ebooks/JavaScript Ebook/JavaScriptEbook";
import HtmlEbook from "./Components/List Of Ebooks/Html Ebook/HtmlEbook";
import JavaEbook from "./Components/List Of Ebooks/Java Ebook/JavaEbook";
import CEbook from "./Components/List Of Ebooks/C Ebook/CEbook";
import CPlusEbook from "./Components/List Of Ebooks/C++ Ebook/CPlusEbook";
import CSSEbook from "./Components/List Of Ebooks/CSS Ebook/CSSEbook";
import ContactUs from "./Components/Contact Us/ContactUs";
import Swal from "sweetalert2";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    Swal.fire({
      title:"Welcome to Dev!Tech Ebooks and Blogs",
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
          <Route path="/ebooks/pythonebook" element={<PythonEbook />} />
          <Route path="/ebooks/javaScriptebook" element={<JavaScriptEbook />} />
          <Route path="/ebooks/htmlebook" element={<HtmlEbook />} />
          <Route path="/ebooks/javaebook" element={<JavaEbook />} />
          <Route path="/ebooks/Cebook" element={<CEbook />} />
          <Route path="/ebooks/C++ebook" element={<CPlusEbook />} />
          <Route path="/ebooks/cssebook" element={<CSSEbook />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
