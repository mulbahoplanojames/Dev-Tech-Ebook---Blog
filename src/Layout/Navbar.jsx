import navLinks from "../Constants/Constants";
import { BiMenu } from "react-icons/bi";

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
              <a
                href={navlink.href}
                key={navlink.label}
                className="px-14 text-lg md:inline-block sm:hidden hidden "
              >
                {navlink.label}
              </a>
            );
          })}
        </div>
        <div className="flex items-center space-x-6">
          <a
            href=""
            className="bg-1 py-1.5 lg:px-8 px-4 text-base lg:text-lg rounded-lg  text-white "
          >
            Let&apos; Chat
          </a>
          <BiMenu className="text-4xl lg:hidden md:hidden block" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
