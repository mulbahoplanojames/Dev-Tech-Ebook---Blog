import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { MdOutlineCancelPresentation } from "react-icons/md";
import navLinks from "../Constants/Constants";
import { Link } from "react-router-dom";
import DarkmodeIcon from "../Components/DarkMode_Icon/DarkmodeIcon";

//usecontext and Appcontext provider for darkmode
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

/**
 * The Navbar component renders the navigation bar of this website.
 * It contains links to different pages and a contact us button.
 * It also has a responsive menu for smaller devices.
 */
const Navbar = () => {
	// State variable to keep track of whether the menu is open or not.
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	/*
	 * I created this object to store all of the data that i want to share to all
	 * parts of this project. It is used in the DarkmodeIcon component.
	 */
	const { darkMode } = useContext(AppContext);

	return (
		<>
			<nav
				className={`flex justify-between items-center lg:px-20 px-4 py-4  shadow-xl fixed top-0 w-full z-10	${
					darkMode ? "bg-[#1d232a]" : "bg-white"
				}`}
			>
				{/* Link to the home page */}
				<Link to='/' className='text-3xl font-bold'>
					Dev <span className='text-1'>!Tech</span>
				</Link>
				{/*//! Menu items for larger devices and mapping through the links */}
				<ul className='max-lg:hidden'>
					{navLinks.map((navlink) => (
						<li key={navlink.label} className='inline-block px-10'>
							<Link
								to={navlink.href}
								className='font-montserrat leading-normal text-lg text-slate-gray focus:text-1'
							>
								{navlink.label}
							</Link>
						</li>
					))}
				</ul>
				{/*//! Contact Us button */}
				<div className='flex gap-x-2'>
					<Link
						to='/contact-us'
						className='bg-1 py-1.5 lg:px-4 px-3 text-sm lg:text-lg rounded-lg text-white hover:opacity-50'
					>
						Contact &nbsp;Us
					</Link>
					<DarkmodeIcon />
					{/*//! Menu toggle button for smaller devices */}
					<TbMenu2
						className='hidden max-lg:block cursor-pointer text-3xl'
						onClick={() => {
							setIsMenuOpen(!isMenuOpen);
						}}
					/>
				</div>
			</nav>

			{/*//! Responsive menu for smaller devices */}
			{isMenuOpen && (
				<div>
					<nav className='fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  z-40'>
						{/* Close button for the menu */}
						<div
							className='hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer'
							onClick={() => {
								setIsMenuOpen(!isMenuOpen);
							}}
						>
							<MdOutlineCancelPresentation className='text-3xl text-white ' />
						</div>
						<ul className=' lg:hidden flex flex-col items-center justify-center h-full bg-1 gap-y-7 z-40'>
							{/* Menu items for smaller devices */}
							{navLinks.map((navlink) => (
								<li
									key={navlink.label}
									onClick={() => {
										setIsMenuOpen(!isMenuOpen);
									}}
								>
									<Link
										to={navlink.href}
										className='font-montserrat leading-normal text-2xl text-white active:text-1 focus:text-blue-500'
									>
										{navlink.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			)}
		</>
	);
};

export default Navbar;
