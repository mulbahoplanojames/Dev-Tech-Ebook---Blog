import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import Footer from "./Layout/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
