import Button from "../../../Interfaces/Button";
import CSSImage from "/src/assets/css.jpg";
import InstagramCallToActionTwo from "../../CallTOAction/CallToActionTwo";
import RelatedEbooks from "../../Related Ebooks/RelatedEbooks";
import { Link } from "react-router-dom";

const CSSEbook = () => {
  return (
    <>
      <div className="h-fit grid sm:grid-cols-12 grid-cols-2  sm:gap-14 gap-y-4 sm:px-24 px-3 py-12 mt-20">
        <div className="col-span-4 lg:h-1 h-80 px-3 py-5 rounded-lg">
          <img
            src={CSSImage}
            alt="HTML e-book"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-8 h-fit py-5 px-10 sm:pt-24">
          <h1 className="sm:text-4xl text-2xl pb-4">
            CSS (beginners to advance)
          </h1>
          <p className="text-lg sm:text-xl pb-5">
            This Pdf Contain CSS Style Sheet from basic Level to advance Level
            with Output. Get this pdf to Increase your CSS Development Skills.
            Happy Learning !
          </p>

          <Link to="/ebooks/cssbook/cssebookpdf">
            <Button text={"Download"} />
          </Link>
        </div>
      </div>

      <InstagramCallToActionTwo />
      <RelatedEbooks />
    </>
  );
};

export default CSSEbook;
