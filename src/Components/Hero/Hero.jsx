import { hero_Text } from "../../Data/EbooksData";
import heroImg from "/src/assets/hero.jpg";
import "animate.css";

/**
 * Hero component displays the hero section of the website.
 * this section contains the text and the image display on the home page
 */
const Hero = () => {
	return (
		<>
			<div className='lg:py-20 py-14 px-3 lg:px-12 mt-10'>
				<div className='tw_hero'>
					{/* The text section */}
					<div className='max-w-xl lg:py-6 lg:px-10 py-3 px-3  animate__animated animate__fadeInUp'>
						<h3 className='text-lg pb-4'>_Dev!Tech</h3>
						<h1 className='lg:text-4xl text-3xl font-semibold pb-4'>
							Let &apos;s Learn Together
						</h1>
						<p className='text-lg'>{hero_Text}</p>
					</div>
					{/* The image section */}
					<div className='max-w-xl lg:h-96 sm:h-80 h-80 rounded-md order-first lg:order-last md:order-last animate__animated animate__fadeInDown'>
						<img
							src={heroImg}
							alt='Image of team working together'
							className='w-full h-full '
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
