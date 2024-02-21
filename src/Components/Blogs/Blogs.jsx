import { blogsInfo } from "../../Constants/Constants";
import BlogCard from "../Blogs Card/BlogCard";

const Blogs = () => {
  return (
    <>
      <div className="mt-32 grid md:grid-cols-3 md:gap-x-9 sm:grid-cols-2 grid-cols-1 gap-12  place-items-center py-10 md:px-10 px-3">
        {blogsInfo.map((blog) => {
          return (
            <BlogCard
              key={blog.id}
              title={blog.title}
              image={blog.image}
              href={blog.href}
            />
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
