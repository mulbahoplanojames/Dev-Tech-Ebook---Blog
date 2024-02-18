import EbookCard from "../EbooksCard/EbookCard";
import AdvertisementCard from "../AdvertisementCard/AdvertisementCard";
import { advertisementDetails, ebooks } from "../../Data/EbooksData";

const Ebooks = () => {
  return (
    <>
      <div className="">
        <div className="bg-yellow-200 grid sm:grid-cols-12 grid-cols-2 px-3 py-12">
          {/* advertisement sidebar */}
          <div className="sidebar">
            {advertisementDetails.map((ads) => {
              return (
                <AdvertisementCard
                  key={ads.id}
                  label={ads.label}
                  image={ads.image}
                />
              );
            })}
          </div>
          {/* List of ebooks  */}
          <div className="h-fit col-span-9 order-first sm:order-last py-6">
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
