import EbookCard from "../EbooksCard/EbookCard";
import { ebooks } from "../../Data/EbooksData";

/**
 * Component that renders the Ebooks page.
 * @return {JSX.Element} The rendered Ebooks page.
 */
const Ebooks = () => {
	return (
		// The main container for the Ebooks page
		<>
			<div className='pt-16'>
				{/* Container for the advertisement sidebar and ebooks */}
				<div className='px-3 py-12 space-x-10  w-[80%]  container mx-auto'>
					{/* List of ebooks */}
					<div className='h-fit py-6'>
						{/* Heading for the ebooks */}
						<h1 className='pb-16 text-4xl text-center'>Our Ebooks</h1>
						<div className='grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center sm:gap-10 gap-y-16 grid'>
							{/* Map over the ebooks array and render an EbookCard component for each item */}
							{ebooks.map((ebook) => {
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
					</div>
				</div>
			</div>
		</>
	);
};

export default Ebooks;
