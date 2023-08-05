import './global.scss';
import Header from './components/Header/Header.jsx';
import HeaderMobile from './components/Header/HeaderMobile/HeaderMobile.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from './context';

import Homepage from './pages/Homepage/Homepage.jsx';
import DoctorsPage from './pages/DoctorsPage/DoctorsPage.jsx';
import SearchLine from './components/SearchLine/SearchLine.jsx';
import React from 'react';

import DoctorPersonalPage from './pages/DoctorPersonalPage/DoctorPersonalPage';
import { useState, useEffect } from 'react';
import SideMenu from './components/Header/HeaderMobile/SideMenu/SideMenu';

function App() {
	const [header, setHeader] = useState();
	//  Динамическая проверка ширины экрана, для вставки хэдера
	useEffect(() => {
		headerChooser();
		const handleResize = () => {
			headerChooser();
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<Provider>
			<BrowserRouter>
				{header}
				{/* <SearchLine /> */}
				<Routes>
					<Route exact path="/" element={<Homepage />} />
					<Route exact path="/doctors" element={<DoctorsPage />} />
					<Route exact path="/doctors/:path" element={<DoctorPersonalPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</Provider>
	);

	function headerChooser() {
		if (window.innerWidth < 1365) {
			setHeader(
				<>
					<HeaderMobile />
					<SideMenu />
				</>,
			);
		}
		if (window.innerWidth > 1365) {
			setHeader(<Header />);
		}
	}
}

export default App;
