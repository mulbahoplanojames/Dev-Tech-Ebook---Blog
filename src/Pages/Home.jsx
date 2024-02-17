import TelegramCallToAction from "../Components/CallTOAction/CallToAction";
import InstagramCallToAction from "../Components/CallTOAction/CallToActionTwo";
import Hero from "../Components/Hero/Hero";
import Offers from "../Components/Our-Offers/Offers";
import OurEbooks from "../Components/OurEbook/OurEbooks";

const Home = () => {
  return (
    <>
      <Hero />
      <Offers />
      <TelegramCallToAction />
      <OurEbooks />
      <InstagramCallToAction />
    </>
  );
};

export default Home;
