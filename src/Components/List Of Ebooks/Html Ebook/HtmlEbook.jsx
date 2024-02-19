import Button from "../../../Interfaces/Button";
import TelegramCallToAction from "../../CallTOAction/CallToAction";
import RelatedEbooks from "../../Related Ebooks/RelatedEbooks";
import HTML from "/src/assets/html.jpg";

const HtmlEbook = () => {
  return (
    <>
      <div className="h-fit grid sm:grid-cols-12 grid-cols-2  sm:gap-14 gap-y-4 sm:px-24 px-3 py-12">
        <div className="col-span-4 lg:h-1 h-80 px-3 py-5 rounded-lg">
          <img
            src={HTML}
            alt="HTML e-book"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-8 h-fit py-5 px-10 sm:pt-24">
          <h1 className="sm:text-4xl text-2xl pb-4">
            HTML (beginners to advance)
          </h1>
          <p className="text-lg sm:text-xl pb-5">
            This Pdf Contain HTML Programs from basic Level to advance Level
            with Output. Get this pdf to Increase you HTML Development Skills.
            Happy Learning !
          </p>

          <Button text={"Download"} />
        </div>
      </div>

      <TelegramCallToAction />
      <RelatedEbooks />
    </>
  );
};

export default HtmlEbook;
