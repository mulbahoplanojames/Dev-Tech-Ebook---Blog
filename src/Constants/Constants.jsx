const navLinks = [
  { href: "/", label: "Home" },
  { href: "/ebooks", label: "Ebooks" },
  { href: "/blogs", label: "Blog" },
];

export default navLinks;

//! Blod posts data below
import BlogImg1 from "/src/assets/blog1.jpg";
import BlogImg2 from "/src/assets/Blog2.jpg";
import BlogImg3 from "/src/assets/Blog3.jpg";
// import BlogImg1 from "/src/assets/blog1.jpg";

export const blogsInfo = [
  {
    id: 1,
    title: "How to learn the basic of programming.",
    image: BlogImg1,
    href: "/ebooks/javaScriptebook",
  },
  {
    id: 2,
    title: "Build real world projects using HTML and CSS",
    image: BlogImg2,
    href: "/ebooks/pythonebook",
  },
  {
    id: 3,
    title: "How to develop the skills of working together as a team",
    image: BlogImg3,
    href: "/ebooks/htmlebook",
  },
  {
    id: 4,
    title: "Build Python projects for free and improve your skills. ",
    image: BlogImg2,
    href: "/ebooks/javaebook",
  },
  {
    id: 5,
    title: "Learn JavaScript with more complex projects & exercises",
    image: BlogImg2,
    href: "/ebooks/pythonebook",
  },
  {
    id: 6,
    title: "Google best onlie course for java Programming",
    image: BlogImg3,
    href: "/ebooks/htmlebook",
  },
];
