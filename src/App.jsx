import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;
