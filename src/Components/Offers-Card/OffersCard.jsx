import Button from "../../Interfaces/Button";
import { Link } from "react-router-dom";

/**
 * Component to display an offer card.
 */
const OffersCard = (props) => {
	// Destructure the properties passed to the component
	const { title, description, image, href } = props;

	return (
		<>
			{/* Render the offer card */}
			<div className='lg:w-Offerscard w-2 lg:h-56 h-72 rounded-lg flex overflow-hidden hover:shadow-2xl cursor-pointer'>
				{/* Render the image of the offer */}
				<div className='h-full w-3 place-self-start'>
					<img src={image} alt='' className='w-full h-full object-cover' />
				</div>
				<div className='py-4 px-3 w-1 '>
					{/* Render the title of the offer */}
					<h1 className='text-2xl pb-3'>{title}</h1>
					{/* Render the description of the offer */}
					<p className='text-base pb-5'>{description}</p>
					{/* Render a button to read more */}
					<Link to={href}>
						<Button text={"Read More"} />
					</Link>
				</div>
			</div>
		</>
	);
};

export default OffersCard;
