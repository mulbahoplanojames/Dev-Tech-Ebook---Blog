/**
 * Button component that scrolls to the top of the page when clicked
 * @param {string} props.text - The text to be displayed on the button
 */
const Button = ({ text }) => {
	return (
		<>
			{/* The button element */}
			<button
				className='btn'
				// Attach an onClick event handler that scrolls to the top of the page
				onClick={() => {
					window.scrollTo({ top: 0, left: 0 });
				}}
			>
				{text}
			</button>
		</>
	);
};

export default Button;
