import { relatedEbooks } from "../../Data/EbooksData";
import EbookCard from "../EbooksCard/EbookCard";

const RelatedEbooks = () => {
  return (
    <>
      <div className="py-6 text-center">
        <h1 className="text-4xl pb-10">Other E-books</h1>
        <div className="grid sm:grid-cols-3 gap-y-10 place-items-center lg:px-32 px-2">
          {relatedEbooks.map((relatedebook) => {
            return (
              <EbookCard
                key={relatedebook.id}
                title={relatedebook.title}
                image={relatedebook.image}
                herf={relatedebook.href}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RelatedEbooks;
