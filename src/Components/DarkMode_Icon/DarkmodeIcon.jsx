import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const DarkmodeIcon = () => {
	const { toggleDarkMode } = useContext(AppContext);

	return (
		<>
			<label className='swap swap-rotate'>
				{/* this hidden checkbox controls the state */}
				<input type='checkbox' onClick={toggleDarkMode} />

				{/* sun icon */}
				<MdOutlineWbSunny className='swap-on w-5 h-5 fill-current' />

				{/* moon icon */}
				<FaRegMoon className='swap-off w-5 h-5 fill-current' />
			</label>
		</>
	);
};

export default DarkmodeIcon;
