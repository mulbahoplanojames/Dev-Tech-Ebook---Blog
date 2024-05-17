import TelegramCallToAction from "../Components/CallTOAction/CallToAction";
import InstagramCallToAction from "../Components/CallTOAction/CallToActionTwo";
import Hero from "../Components/Hero/Hero";
import Offers from "../Components/Our-Offers/Offers";
import OurEbooks from "../Components/OurEbook/OurEbooks";

/**
 * The Home component renders the main page of this application.
 * It includes the Hero, Offers, OurEbooks, and InstagramCallToAction components.
 */
const Home = () => {
	return (
		<>
			{/* Render the Hero component */}
			<Hero />

			{/* Render the Offers component */}
			<Offers />

			{/* Render the TelegramCallToAction component */}
			<TelegramCallToAction />

			{/* Render the OurEbooks component */}
			<OurEbooks />

			{/* Render the InstagramCallToAction component */}
			<InstagramCallToAction />
		</>
	);
};

export default Home;
