/**
 * This Component is use for displaying the page not found message.
 */
const PageNotFound = () => {
	return (
		<>
			<div className='mt-36 mb-32 text-center'>
				{/* Header for the page not found message */}
				<h1 className='text-8xl'>404</h1>
				{/* Description of the page not found message */}
				<p className='pt-6'>
					The page you are trying to access is not available or the URL is being
					changed.
				</p>
				{/* Instruction to navigate to a specific page on the site */}
				<p className='pt-2'>
					Please use the navbar to navigate to a specific page on this site.
				</p>
			</div>
		</>
	);
};

export default PageNotFound;
