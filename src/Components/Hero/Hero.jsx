import heroImg from "/src/assets/hero.jpg";
import "animate.css";

const Hero = () => {
	return (
		<>
			<div className='lg:py-20 py-14 px-3 lg:px-12 mt-10'>
				<div className='hero'>
					<div className='max-w-xl lg:py-6 lg:px-10 py-3 px-3  animate__animated animate__fadeInUp'>
						<h3 className='text-lg pb-4'>_Dev!Tech</h3>
						<h1 className='lg:text-4xl text-3xl font-semibold pb-4'>
							Let &apos;s Learn Together
						</h1>
						<p className='text-lg'>
							Dev!Tech is the best place to learn ad grow your skills or carrer
							in the IT sector. Best contents on latest technologies including
							JavaScript, PYthon, HTML, CSS, C++, Java free of cost. With a
							commitment to accessibility, Dev!Tech fosters a collaborative
							community. Join Dev!Tech to unlock your full potential, stay
							relevant, and shape a successful path in technology.
						</p>
					</div>
					<div className='max-w-xl lg:h-96 sm:h-80  h-80 rounded-md order-first lg:order-last md:order-last animate__animated animate__fadeInDown'>
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
