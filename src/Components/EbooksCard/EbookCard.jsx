import Button from "../../Interfaces/Button";
import { Link } from "react-router-dom";

/**
 * Component for displaying an ebook card.
 *
 * @param {Object} props - The properties of the component.
 * @param {string} props.title - The title of the ebook.
 * @param {string} props.image - The URL of the image for the ebook.
 * @param {string} props.href - The URL to navigate to when the download button is clicked.
 * @return {JSX.Element} The rendered ebook card.
 */
const EbookCard = (props) => {
	// Destructure the props
	const { title, image, href } = props;

	return (
		// Render the ebook card
		<>
			<div className=''>
				<div className='w-64 h-80 rounded-lg overflow-hidden cursor-pointer shadow-2xl hover:shadow-1 hover:scale-110 transition duration-300'>
					<div className='w-full h-52 '>
						{/* Render the image of the ebook */}
						<img
							src={image}
							alt=''
							className='w-full h-full object-scale-down'
						/>
					</div>
					<div className='text-center'>
						{/* Render the title of the ebook */}
						<h1 className='py-3 text-2xl'>{title}</h1>
						{/* Render the download button */}
						<Link to={href}>
							<Button text={"Download"} />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default EbookCard;
