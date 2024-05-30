import { blogsInfo } from "../../Constants/Constants";
import BlogCard from "../Blogs Card/BlogCard";

/**
 * Renders the Blogs component which displays a grid of blog cards
 */
const Blogs = () => {
  return (
    <>
      {/* Grid container */}
      <div className="md:grid-cols-3 md:gap-x-9 sm:grid-cols-2 place-items-center md:px-10 grid grid-cols-1 gap-12 px-3 py-10 mt-32">
        {/* Map over the blogsInfo array and render a BlogCard for each blog */}
        {blogsInfo.map((blog) => {
          return (
            <BlogCard
              key={blog.id}
              // Title of the blog
              title={blog.title}
              // Image of the blog
              image={blog.image}
              // Link to the blog
              href={blog.href}
            />
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
