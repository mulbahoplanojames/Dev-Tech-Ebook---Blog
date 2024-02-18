import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaHome,
  FaBook,
} from "react-icons/fa";

import { BsCardList } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="lg:px-20 px-3 py-12 bg-1">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-12 place-items-center text-white">
          <h1 className="text-6xl text-white font-semibold">Dev!tech</h1>
          <div className="order-first">
            <h1 className="text-2xl pb-2 ">Info</h1>
            <p className="pb-2 flex items-center gap-x-2 text-lg text-white">
              <FaHome className="" />
              <Link to="">Home</Link>
            </p>
            <p className="pb-2 flex items-center gap-x-2 text-lg ">
              <FaBook />
              <Link to="">E-books</Link>
            </p>
            <p className="pb-2 flex items-center gap-x-2 text-lg ">
              <BsCardList />
              <Link to="">Blogs</Link>
            </p>
            <p className="pb-2 flex items-center gap-x-2 text-lg ">
              <IoIosPeople />
              <Link to="">About Us</Link>
            </p>
          </div>
          <div className="">
            <h1 className="text-2xl pb-4">Follow us for more</h1>
            <div className="flex gap-7">
              <div className="icon-wripper bg-red-300">
                <Link to="">
                  <FaInstagram className="size-7" />
                </Link>
              </div>
              <div className="icon-wripper bg-blue-300">
                <Link to="">
                  <FaFacebook className="size-7" />
                </Link>
              </div>
              <div className="icon-wripper bg-green-300">
                <Link to="">
                  <FaWhatsapp className="size-7" />
                </Link>
              </div>
              <div className="icon-wripper bg-black">
                <Link to="">
                  <FaTwitter className="size-7" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
