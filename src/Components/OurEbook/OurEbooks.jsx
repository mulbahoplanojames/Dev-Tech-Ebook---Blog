import React from "react";
import EbookCard from "../EbooksCard/EbookCard";
import { ourEbooks } from "../../Data/EbooksData";

const OurEbooks = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 place-items-center  py-20 lg:px-40 px-3">
        {ourEbooks.map((ebook) => {
          return (
            <EbookCard key={ebook.id} title={ebook.title} image={ebook.image} />
          );
        })}
      </div>
    </>
  );
};

export default OurEbooks;
