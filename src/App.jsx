import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import Ebook from "./Pages/Ebook";
import Footer from "./Layout/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ebooks" element={<Ebook />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
