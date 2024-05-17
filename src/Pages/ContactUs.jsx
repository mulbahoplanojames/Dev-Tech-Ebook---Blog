import { IoIosMail } from "react-icons/io";
import { MdPhoneInTalk, MdLocationOn } from "react-icons/md";
import Button from "../Interfaces/Button";
import { useState } from "react";
import Swal from "sweetalert2";

/**
 * ContactUs component displays a form for users to send messages
 * and also displays contact information of the company
 */
const ContactUs = () => {
	// State to store the result of the form submission
	const [result, setResult] = useState("");

	/**
	 * Function to handle form submission
	 * @param {Event} event - The form submission event
	 */

	/**
	 * This function onSubmit Handles the form submission for the contact form.
	 * Sends the form data to the Web3Forms API and displays a success or error message.
	 * @return {Promise<void>} - A promise that resolves when the form is submitted
	 */
	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending...."); // Set the result state to "Sending..."

		const formData = new FormData(event.target); // Create a new FormData object from the form

		formData.append("access_key", "562d6485-71c4-4390-9184-2c1cf99e08b5"); // Append the access key to the form data

		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		}).then((res) => res.json()); // Send the form data to the Web3Forms API and parse the response as JSON

		if (res.success) {
			// If the response is successful
			console.log("Success", res); // Log the response to the console
			setResult(res.message); // Set the result state to the message from the response
			event.target.reset(); // Reset the form

			Swal.fire({
				// Display a success message using SweetAlert2
				title: "🎉👏🙌✨🎊",
				text: "Message sent successfully!",
				icon: "success",
			});
		} else {
			// If the response is not successful
			console.log("Error", res); // Log the response to the console
			setResult(res.message); // Set the result state to the message from the response

			Swal.fire({
				// Display an error message using SweetAlert2
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!",
			});
		}
	};

	return (
		<>
			<section className='lg:px-10 md:mt-24 mt-16 py-14 '>
				<div className='text-center md:pb-10 pb-6'>
					<h2 className='text-lg uppercase text-1 font-medium pb-2'>
						Contact Us
					</h2>
					<h1 className='text-4xl capitalize font-semibold'>Get in touch</h1>
				</div>
				<div className='grid sm:grid-cols-2 grid-cols-1 px-3 place-items-center '>
					{/* this is a wripper for the form details */}
					<div className='px-3 py-4'>
						<h1 className='text-3xl pb-3'>Send us a message</h1>
						<p className='text-xl pb-3 opacity-70'>
							Feel free to reach out through the contact from or find our
							contact information below. Your feedback, questions and
							suggestionsare important to us as we strive to provide exceptional
							service.
						</p>
						<p className='text-xl pb-4 flex items-center gap-x-1'>
							<IoIosMail className='text-4xl text-1' />
							mulbahjamesoplano@gmail.com
						</p>
						<p className='text-xl pb-4 flex items-center gap-x-1'>
							<MdPhoneInTalk className='text-4xl text-1' />
							+250791676207
						</p>
						<p className='text-xl pb-4 flex items-center gap-x-1'>
							<MdLocationOn className='text-4xl text-1' />
							KG 763 Gisozi, Kigali, Rwanda
						</p>
					</div>

					{/* this is a wripper for the contact form */}
					<div className=' px-1 sm:px-7 py-2 w-full'>
						<form onSubmit={onSubmit}>
							<div className='mb-6'>
								<label
									htmlFor='name'
									className='text-xl pb-1 opacity-90 inline-block'
								>
									Your name*
								</label>
								<input
									type='text'
									name='name'
									placeholder='Enter your name'
									required
									className='w-full bg-2 h-11 px-3 outline-none border-none rounded-sm focus:ring-inset focus:ring-4 focus:ring-1'
								/>
							</div>
							<div className='mb-6'>
								<label
									htmlFor='email'
									className='text-xl pb-1 opacity-90 inline-block'
								>
									Your email*
								</label>
								<input
									type='text'
									name='email'
									placeholder='Enter your email'
									required
									className='w-full bg-2 h-11 px-3 outline-none border-none rounded-sm focus:ring-inset focus:ring-4 focus:ring-1'
								/>
							</div>
							<div className='mb-6'>
								<label
									htmlFor='phone'
									className='text-xl pb-1 opacity-90 inline-block'
								>
									Phone Number*
								</label>
								<input
									type='text'
									name='phone'
									placeholder='Enter your phone number'
									required
									className='w-full bg-2 h-11 px-3 outline-none border-none rounded-sm focus:ring-inset focus:ring-4 focus:ring-1'
								/>
							</div>
							<div className='mb-6'>
								<label
									htmlFor='message'
									className='text-xl pb-1 opacity-90 inline-block'
								>
									Message*
								</label>
								<textarea
									name='message'
									required
									placeholder='Enter your message'
									className='w-full resize-none bg-2 h-24 outline-none px-3 py-2 focus:ring-inset focus:ring-4 focus:ring-1'
								></textarea>
							</div>
							<Button text={"Submit now"} />
							<p className='pt-4 text-red-500'>{result}</p>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactUs;
