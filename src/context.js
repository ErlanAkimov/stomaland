import React from 'react';

const Context = React.createContext();

const Provider = ({ children }) => {
	const [menu, setMenu] = React.useState();

	return <Context.Provider value={{ menu, setMenu }}>{children}</Context.Provider>;
};
export { Provider, Context };
