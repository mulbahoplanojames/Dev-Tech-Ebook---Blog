import OffersCard from "../Offers-Card/OffersCard";
import Ebook from "/src/assets/ebook.png";
import Blog from "/src/assets/blog.png";

const Offers = () => {
  return (
    <>
      <div className="py-16 lg:px-20 px-3 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 place-items-center gap-8">
        <OffersCard
          title="Ebook"
          description={
            " Explore our carefully curated collection of well-structured and simplified ebooks, designed to make reading a seamless and enjoyable experience."
          }
          image={Ebook}
          href={"/ebooks"}
        />
        <OffersCard
          title="Blogs"
          description={
            " Explore our carefully curated collection of well-structured and simplified blog posts, designed to make reading a seamless and enjoyable experience."
          }
          image={Blog}
          href={"/blog"}
        />
      </div>
    </>
  );
};

export default Offers;
