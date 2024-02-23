import Swal from "sweetalert2";
import Blogs from "../Components/Blogs/Blogs";
import TelegramCallToAction from "../Components/CallTOAction/CallToAction";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    Swal.fire({
      title: "Welcome to our Blog posts",
      text: "Feel free to reach out through the contact from. Your feedback, questions and suggestions are important to us",
      icon: "info",
    });
  }, []);
  return (
    <>
      <Blogs />
      <TelegramCallToAction />
    </>
  );
};

export default Blog;
