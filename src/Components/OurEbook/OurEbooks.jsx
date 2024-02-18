import React from "react";
import EbookCard from "../EbooksCard/EbookCard";
import { ourEbooks } from "../../Data/EbooksData";
import Button from "../../Interfaces/Button";
import { Link } from "react-router-dom";

const OurEbooks = () => {
  return (
    <>
      <div className=" py-20 lg:px-40 px-3 text-center">
        <h1 className="text-4xl  pb-16">Our Ebooks</h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 place-items-center mb-16">
          {ourEbooks.map((ebook) => {
            return (
              <EbookCard
                key={ebook.id}
                title={ebook.title}
                image={ebook.image}
              />
            );
          })}
        </div>
      <Link to="/ebooks">
          <Button text={"Click here for more e-books"} className="mt-12" />
        </Link>
      </div>
    </>
  );
};

export default OurEbooks;
