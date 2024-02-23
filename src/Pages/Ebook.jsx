import Swal from "sweetalert2";
import TelegramCallToAction from "../Components/CallTOAction/CallToAction";
import Ebooks from "../Components/Ebooks/Ebooks";
import { useEffect } from "react";

const Ebook = () => {
  useEffect(() => {
    Swal.fire({
      title: "Welcome to our Ebooks",
      text: "Feel free to reach out through the contact from. Your feedback, questions and suggestions are important to us",
      icon: "info",
    });
  }, []);

  return (
    <>
      <Ebooks />
      <TelegramCallToAction />
    </>
  );
};

export default Ebook;
