import React from 'react';

const Context = React.createContext();

const Provider = ({ children }) => {
	const [inputValue, setInputValue] = React.useState('');
	const [menu, setMenu] = React.useState();

	return (
		<Context.Provider value={{ menu, setMenu, inputValue, setInputValue }}>
			{children}
		</Context.Provider>
	);
};
export {Provider, Context}