import EbookCard from "../EbooksCard/EbookCard";
import { ebooks } from "../../Data/EbooksData";

const Ebooks = () => {
  return (
    <>
      <div className="">
        <div className="bg-yellow-200 grid sm:grid-cols-12 grid-cols-2 relative">
          <div className="bg-blue-200 h-screen col-span-3 "></div>
          <div className="h-fit col-span-9 order-first sm:order-last py-12">
            <h1 className="text-center text-4xl pb-10">Our Ebooks</h1>
            <div className="grid sm:grid-cols-3  place-items-center gap-8">
              {ebooks.map((ebook) => {
                return (
                  <EbookCard
                    key={ebook.id}
                    title={ebook.title}
                    image={ebook.image}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ebooks;
