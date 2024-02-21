import Button from "../../Interfaces/Button";

const BlogCard = (props) => {
  const { title, image, href } = props;

  return (
    <>
      <div className="w-2 overflow-hidden rounded-md cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-1 hover:scale-105 transition duration-200">
        <div className="w-full h-56 bg-1 mb-4">
          <img
            src={image}
            alt="Blog post image one"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="pb-4 px-2">
          <h1 className="text-2xl pb-3">{title}</h1>
          <Button text={"Read More"} />
        </div>
      </div>
    </>
  );
};

export default BlogCard;
