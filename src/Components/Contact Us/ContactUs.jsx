import { IoIosMail } from "react-icons/io";
import { MdPhoneInTalk, MdLocationOn } from "react-icons/md";
import Button from "../../Interfaces/Button";


const ContactUs = () => {
  return (
    <>
      <div className="lg:px-10 md:mt-24 mt-16 py-14 ">
        <div className="text-center md:pb-10 pb-6">
          <h2 className="text-lg uppercase text-1 font-medium pb-2">
            Contact Us
          </h2>
          <h1 className="text-4xl capitalize font-semibold">Get in touch</h1>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 px-3 place-items-center ">
          <div className="px-3 py-4">
            <h1 className="text-3xl pb-3">Send us a message</h1>
            <p className="text-xl pb-3 opacity-70">
              Feel free to reach out through the contact from or find our
              contact information below. Your feedback, questions and
              suggestionsare important to us as we strive to provide exceptional
              service.
            </p>
            <p className="text-xl pb-4 flex items-center gap-x-1">
              <IoIosMail className="text-4xl text-1" />
              mulbahjamesoplano@gmail.com
            </p>
            <p className="text-xl pb-4 flex items-center gap-x-1">
              <MdPhoneInTalk className="text-4xl text-1" />
              +250791676207
            </p>
            <p className="text-xl pb-4 flex items-center gap-x-1">
              <MdLocationOn className="text-4xl text-1" />
              KG 763 Gisozi, Kigali, Rwanda
            </p>
          </div>
          <div className=" px-1 sm:px-7 py-2 w-full">
            <form action="">
              <div className="mb-6">
                <label htmlFor="name" className="text-xl pb-1 opacity-90 inline-block">Your name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full bg-2 h-11 px-3 outline-none border-none rounded-sm focus:ring-inset focus:ring-4 focus:ring-1"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="text-xl pb-1 opacity-90 inline-block">Your email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-2 h-11 px-3 outline-none border-none rounded-sm focus:ring-inset focus:ring-4 focus:ring-1"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="text-xl pb-1 opacity-90 inline-block">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                  className="w-full bg-2 h-11 px-3 outline-none border-none rounded-sm focus:ring-inset focus:ring-4 focus:ring-1"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="text-xl pb-1 opacity-90 inline-block">Phone Number</label>
                <textarea
                  name="message"
                  required
                  placeholder="Enter your message"
                  className="w-full resize-none bg-2 h-20 outline-none px-3 py-2 focus:ring-inset focus:ring-4 focus:ring-1"
                ></textarea>
              </div>
              <Button text={"Submit now"}/>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
