import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import Ebook from "./Pages/Ebook";
import Footer from "./Layout/Footer";
import PythonEbook from "./Components/List Of Ebooks/Python Ebook/PythonEbook";
import JavaScriptEbook from "./Components/List Of Ebooks/JavaScript Ebook/JavaScriptEbook";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ebooks" element={<Ebook />} />
          <Route path="/ebooks/pythonebook" element={<PythonEbook />} />
          <Route path="/ebooks/javaScriptebook" element={<JavaScriptEbook />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
