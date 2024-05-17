/**
 * Component that renders an advertisement card.
 */
const AdvertisementCard = ({ label, image }) => {
	return (
		<div>
			<div className='w-64 h-36 bg-red-300 rounded-lg relative overflow-hidden shadow-lg shadow-black'>
				{/* The image displayed on the card */}
				<img src={image} alt='' className='object-cover w-full h-full' />
				{/* The label displayed on the card */}
				<p className='absolute bottom-3 right-0 bg-1 px-4 py-1 rounded-s text-white'>
					{label}
				</p>
			</div>
		</div>
	);
};

export default AdvertisementCard;
