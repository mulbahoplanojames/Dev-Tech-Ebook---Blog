import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const CallToAction = () => {
	return (
		<>
			<div className='py-12 lg:px-36 px-4'>
				<Link to='https://t.me/Oplanomulbah' target='blank'>
					<div className='call-to-action bg-blue-300'>
						<h1 className='lg:text-3xl text-2xl text-white'>
							Join Us on Telegram for more free contents
						</h1>
						<div className='lg:w-28 lg:h-28 w-24 h-16  bg-blue-500 rounded-full flex justify-center items-center'>
							<FaTelegramPlane className='lg:size-20 size-8 text-white' />
						</div>
					</div>
				</Link>
			</div>
		</>
	);
};

export default CallToAction;
