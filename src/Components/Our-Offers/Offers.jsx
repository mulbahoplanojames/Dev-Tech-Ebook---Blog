import OffersCard from "../Offers-Card/OffersCard";
import Ebook from "/src/assets/ebook.png";
import Blog from "/src/assets/blog.png";
import "animate.css";

/**
 * Component to display the offers section on the homepage. this component display two cards
 *  one for the blog and the other for the ebooks
 */
const Offers = () => {
	return (
		<>
			{/* Container for the offers section */}
			<div className='py-16 lg:px-20 px-3 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 place-items-center gap-8 animate__animated  animate__fadeInUpBig'>
				{/* Card for the ebook offer */}
				<OffersCard
					title='Ebook'
					description={
						" Explore our carefully curated collection of well-structured and simplified ebooks, designed to make reading a seamless and enjoyable experience."
					}
					image={Ebook}
					href={"/ebooks"}
				/>
				{/* Card for the blog offer */}
				<OffersCard
					title='Blogs'
					description={
						" Explore our carefully curated collection of well-structured and simplified blog posts, designed to make reading a seamless and enjoyable experience."
					}
					image={Blog}
					href={"/blog"}
				/>
			</div>
		</>
	);
};

export default Offers;
