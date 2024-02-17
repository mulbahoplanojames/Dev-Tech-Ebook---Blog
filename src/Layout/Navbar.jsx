import { Link } from "react-router-dom";
import navLinks from "../Constants/Constants";
import { BiMenu } from "react-icons/bi";

//Todo : Complete the responsiveness of the Navber on Smaller Device for toggle menu

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center py-6 lg:px-24 px-4 bg-white shadow-md relative">
        <h1 className="lg:text-3xl text-2xl font-semibold">
          Dev <span className="text-1">!Tech</span>
        </h1>
        <div className="">
          {navLinks.map((navlink) => {
            return (
              <Link
                to={navlink.href}
                key={navlink.label}
                className="px-14 text-lg md:inline-block sm:hidden hidden hover:text-1 "
              >
                {navlink.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-6">
          <Link
            to=""
            className="bg-1 py-1.5 lg:px-8 px-4 text-base lg:text-lg rounded-lg  text-white "
          >
            Let&apos;s Chat
          </Link>
          <BiMenu className="text-4xl lg:hidden md:hidden block text-1" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
