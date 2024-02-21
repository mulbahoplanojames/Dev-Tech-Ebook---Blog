import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { MdOutlineCancelPresentation } from "react-icons/md";
import navLinks from "../Constants/Constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center lg:px-20 px-4 py-4 bg-white shadow-xl fixed top-0 w-full z-10">
        <Link to="/" className="text-3xl font-bold">
          Dev <span className="text-1">!Tech</span>
        </Link>
        <ul className="max-lg:hidden">
          {navLinks.map((navlink) => (
            <li key={navlink.label} className="inline-block px-10">
              <Link
                to={navlink.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {navlink.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-x-2">
          <Link
            to=""
            className="bg-1 py-1.5 lg:px-8 px-4 text-base lg:text-lg rounded-lg  text-white"
          >
            Let&apos;s&apos; Chat
          </Link>

          <TbMenu2
            className="hidden max-lg:block cursor-pointer text-4xl"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </div>
      </nav>

      {/* Navbar for Smaller Devices  */}
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  z-40">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <MdOutlineCancelPresentation className="text-4xl text-white " />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center h-[500px] bg-1 gap-y-7 z-40">
              {navLinks.map((navlink) => (
                <li key={navlink.label}>
                  <Link
                    to={navlink.href}
                    className="font-montserrat leading-normal text-2xl text-white"
                  >
                    {navlink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
