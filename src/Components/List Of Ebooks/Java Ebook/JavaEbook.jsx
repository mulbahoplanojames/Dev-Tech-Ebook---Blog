import Button from "../../../Interfaces/Button";
import InstagramCallToAction from "../../CallTOAction/CallToActionTwo";
import RelatedEbooks from "../../Related Ebooks/RelatedEbooks";
import JavaImg from "/src/assets/JavaBOOK.png";

const JavaEbook = () => {
  return (
    <>
      <div className="h-fit grid sm:grid-cols-12 grid-cols-2  sm:gap-14 gap-y-4 sm:px-24 px-3 py-12 mt-20">
        <div className="col-span-4 lg:h-1 h-80 px-3 py-5 rounded-lg">
          <img
            src={JavaImg}
            alt="HTML e-book"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-8 h-fit py-5 px-10 sm:pt-24">
          <h1 className="sm:text-4xl text-2xl pb-4">
            Java Programs(beginners to advance)
          </h1>
          <p className="text-lg sm:text-xl pb-5">
            This Pdf Contain Java Programs from basic Level to advance Level
            with Output. Get this pdf to Increase you java Development Skills.
            Happy Learning !
          </p>

          <Button text={"Download"} />
        </div>
      </div>

      <InstagramCallToAction />
      <RelatedEbooks />
    </>
  );
};

export default JavaEbook;
