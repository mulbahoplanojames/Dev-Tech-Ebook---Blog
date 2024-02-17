import TelegramCallToAction from "../Components/CallTOAction/CallToAction";
import Hero from "../Components/Hero/Hero";
import Offers from "../Components/Our-Offers/Offers";
import { FaTelegramPlane } from "react-icons/fa";
import OurEbooks from "../Components/OurEbook/OurEbooks";

const Home = () => {
  return (
    <>
      <Hero />
      <Offers />
      <TelegramCallToAction
        title={"    Join Us on Telegram for more free contents"}
        icon={<FaTelegramPlane className="lg:size-20 size-8 text-white" />}
        href={"https://t.me/Oplanomulbah"}
      />
      <OurEbooks />
    </>
  );
};

export default Home;
