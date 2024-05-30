import Button from "../../../Interfaces/Button";
import CSSImage from "/src/assets/css.jpg";
import InstagramCallToActionTwo from "../../CallTOAction/CallToActionTwo";
import RelatedEbooks from "../../Related Ebooks/RelatedEbooks";
import { Link } from "react-router-dom";

const CSSEbook = () => {
  return (
    <>
      <div className="h-fit sm:grid-cols-12 sm:gap-14 gap-y-4 sm:px-24 grid grid-cols-2 px-3 py-12 mt-20">
        <div className="lg:h-1 h-80 col-span-4 px-3 py-5 rounded-lg">
          <img
            src={CSSImage}
            alt="HTML e-book"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="h-fit sm:pt-24 col-span-8 px-10 py-5">
          <h1 className="sm:text-4xl pb-4 text-2xl">
            CSS (beginners to advance)
          </h1>
          <p className="sm:text-xl pb-5 text-lg">
            This Pdf Contain CSS Style Sheet from basic Level to advance Level
            with Output. Get this pdf to Increase your CSS Development Skills.
            Happy Learning !
          </p>

          <Link to="/ebooks/cssbook/cssebookpdf">
            <Button text={"View and Download"} />
          </Link>
        </div>
      </div>

      <InstagramCallToActionTwo />
      <RelatedEbooks />
    </>
  );
};

export default CSSEbook;
