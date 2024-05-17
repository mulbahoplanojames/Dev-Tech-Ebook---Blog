import { Link } from "react-router-dom";
import Button from "../../Interfaces/Button";

/**
 * BlogCard component displays a card for a blog posts.
 */
const BlogCard = (props) => {
	// Destructure the props object
	const { title, image, href } = props;

	return (
		<>
			<div className='w-2 overflow-hidden rounded-md cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-1 hover:scale-105 transition duration-200'>
				{/* Div for the blog post image */}
				<div className='w-full h-56 bg-1 mb-4'>
					<img
						src={image}
						alt='Blog post image one'
						className='w-full h-full object-cover'
					/>
				</div>
				<div className='pb-4 px-2'>
					{/* Heading for the blog post title */}
					<h1 className='text-2xl pb-3'>{title}</h1>

					{/* Link to the blog post */}
					<Link to={href}>
						{/* Button to read more */}
						<Button text={"Read More"} />
					</Link>
				</div>
			</div>
		</>
	);
};

export default BlogCard;
