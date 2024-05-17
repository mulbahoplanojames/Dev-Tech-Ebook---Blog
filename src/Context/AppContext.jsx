import { createContext, useState } from "react";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode((darkMode) => !darkMode);
		console.log(darkMode);
	};

	// I create this object to provide CSS styles for the app based on the `darkMode` state.
	const darkModeStyle = {
		backgroundColor: darkMode ? "#1d232a" : "#f8f9f5",
		color: darkMode ? "white" : "#1d232a",
	};

	// I created this object to store all of the data that i want to share to all parts of this project.
	const contextValue = {
		darkMode,
		toggleDarkMode,
		darkModeStyle,
	};

	return (
		<AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
	);
};

export default AppContextProvider;