import { Link } from "react-router-dom";
import Button from "../../Interfaces/Button";

/**
 * BlogCard component displays a card for a blog posts.
 */
const BlogCard = (props) => {
  // Destructure the props object
  const { title, image, href } = props;

  return (
    <>
      <div className="hover:shadow-2xl hover:shadow-1 hover:scale-105 w-2 overflow-hidden transition duration-200 rounded-md shadow-xl cursor-pointer">
        {/* Div for the blog post image */}
        <div className="bg-1 w-full h-56 mb-4">
          <img
            src={image}
            alt="Blog post image one"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="px-2 pb-4">
          {/* Heading for the blog post title */}
          <h1 className="pb-3 text-xl">{title}</h1>

          {/* Link to the blog post */}
          <Link to={href}>
            {/* Button to read more */}
            <Button text={"Read More"} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
