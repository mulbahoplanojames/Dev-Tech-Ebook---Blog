import {
	FaInstagram,
	FaFacebook,
	FaTwitter,
	FaWhatsapp,
	FaHome,
	FaBook,
} from "react-icons/fa";

import { BsCardList } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";

/**
 * This Footer component renders the footer section of this website
 * which contains links to various pages and social media links.
 */
const Footer = () => {
	// Scrolls the page to the top when a link is clicked.
	const handleClick = () => {
		window.scrollTo({ top: 0, left: 0 });
	};

	return (
		<>
			<div className='lg:px-20 px-3 py-12 bg-1'>
				<div className='grid lg:grid-cols-3 grid-cols-1 gap-12 place-items-center text-white'>
					{/* The header */}
					<h1 className='lg:text-5xl  text-3xl text-white font-semibold'>
						Dev!tech
					</h1>
					{/* The info section */}
					<div className='order-first'>
						<h1 className='text-2xl pb-2 '>Info</h1>
						{/* The links */}
						<p
							className='pb-2 flex items-center gap-x-2 text-lg text-white'
							onClick={handleClick}
						>
							{/* The Home link */}
							<FaHome className='' />
							<Link to=''>Home</Link>
						</p>
						<p
							className='pb-2 flex items-center gap-x-2 text-lg '
							onClick={handleClick}
						>
							{/* The E-books link */}
							<FaBook />
							<Link to='/ebooks'>E-books</Link>
						</p>
						<p
							className='pb-2 flex items-center gap-x-2 text-lg '
							onClick={handleClick}
						>
							{/* The Blogs link */}
							<BsCardList />
							<Link to='/blogs'>Blogs</Link>
						</p>
						<p
							className='pb-2 flex items-center gap-x-2 text-lg '
							onClick={handleClick}
						>
							{/* The About Us link */}
							<IoIosPeople />
							<Link to=''>About Us</Link>
						</p>
					</div>
					{/* The social media section */}
					<div className=''>
						<h1 className='text-2xl pb-4'>Follow us for more</h1>
						<div className='flex gap-7'>
							{/* The Instagram icon */}
							<div className='icon-wripper bg-red-300'>
								<Link to=''>
									<FaInstagram className='size-7' />
								</Link>
							</div>
							{/* The Facebook icon */}
							<div className='icon-wripper bg-blue-300'>
								<Link to=''>
									<FaFacebook className='size-7' />
								</Link>
							</div>
							{/* The Whatsapp icon */}
							<div className='icon-wripper bg-green-300'>
								<Link to=''>
									<FaWhatsapp className='size-7' />
								</Link>
							</div>
							{/* The Twitter icon */}
							<div className='icon-wripper bg-black'>
								<Link to=''>
									<FaTwitter className='size-7' />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
