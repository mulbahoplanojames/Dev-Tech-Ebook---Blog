import EbookCard from "../EbooksCard/EbookCard";
import { ourEbooks } from "../../Data/EbooksData";
import { Link } from "react-router-dom";
import "animate.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";

/**
 * This Component renders a list of our ebooks with a button to navigate to all ebooks page.
 * it is use with in the Home page to display our ebooks
 */
const OurEbooks = () => {
	return (
		// Container for the list of ebooks and the button
		<>
			<div className=' py-20 lg:px-40 px-3 text-center'>
				{/* Heading for the list of ebooks */}
				<h1 className='text-4xl  pb-14'>Our Ebooks</h1>
				<div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 place-items-center mb-10 animate__animated animate__fadeIn'>
					{/* Map over the list of ebooks and render a card for each */}
					{ourEbooks.map((ebook) => {
						return (
							<EbookCard
								key={ebook.id}
								title={ebook.title}
								image={ebook.image}
								href={ebook.href}
							/>
						);
					})}
				</div>
				{/* Button to navigate to all ebooks page */}
				<Link to='/ebooks'>
					<IoIosArrowDroprightCircle size={70} className=' mx-auto text-1' />
				</Link>
			</div>
		</>
	);
};

export default OurEbooks;
