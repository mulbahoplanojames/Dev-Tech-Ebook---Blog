import TelegramCallToAction from "../Components/CallTOAction/CallToAction";
import Ebooks from "../Components/Ebooks/Ebooks";

/**
 * Ebook page component.
 * This component renders the Ebooks page which consists of Ebooks component and TelegramCallToAction
 * component. The Ebooks page contain both the side bar and the list of ebooks.
 */
const Ebook = () => {
	return (
		<>
			{/* Render the Ebooks component */}
			<Ebooks />
			{/* Render the TelegramCallToAction component */}
			<TelegramCallToAction />
		</>
	);
};

export default Ebook;
