import EbookCard from "../EbooksCard/EbookCard";
import AdvertisementCard from "../AdvertisementCard/AdvertisementCard";
import { advertisementDetails, ebooks } from "../../Data/EbooksData";

/**
 * Component that renders the Ebooks page.
 * @return {JSX.Element} The rendered Ebooks page.
 */
const Ebooks = () => {
  return (
    // The main container for the Ebooks page
    <>
      <div className="">
        {/* Container for the advertisement sidebar and ebooks */}
        <div className="sm:grid-cols-12 grid grid-cols-2 px-3 py-12 mt-20 space-x-10">
          {/* Advertisement sidebar */}
          <div className="sidebar">
            {/* Map over the advertisementDetails array and render an AdvertisementCard component for each item */}
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
          {/* List of ebooks */}
          <div className="h-fit sm:order-last order-first col-span-9 py-6">
            {/* Heading for the ebooks */}
            <h1 className="pb-28 text-4xl text-center">Our Ebooks</h1>
            <div className="sm:grid-cols-3 place-items-center sm:gap-10 gap-y-16 grid">
              {/* Map over the ebooks array and render an EbookCard component for each item */}
              {ebooks.map((ebook) => {
                return (
                  <EbookCard
                    key={ebook.id}
                    title={ebook.title}
                    image={ebook.image}
                    href={ebook.href}
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
