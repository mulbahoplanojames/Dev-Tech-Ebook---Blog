import Blogs from "../Components/Blogs/Blogs";
import TelegramCallToAction from "../Components/CallTOAction/CallToAction";

/**
 * Blog page component. This component renders the Blogs component and the
 * TelegramCallToAction component.
 */

const Blog = () => {
	return (
		<>
			{/*Render the Blogs component The Blogs component displays a list of blogs*/}
			<Blogs />
			{/*Render the TelegramCallToAction component this component displays a call to action button to join our Telegram channel*/}
			<TelegramCallToAction />
		</>
	);
};

export default Blog;
