import './global.scss';
import Header from './components/Header/Header.jsx';
import HeaderMobile from './components/Header/HeaderMobile/HeaderMobile.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import {Provider} from './context';

// Pages
import Homepage from './pages/Homepage/Homepage';
import DoctorsPage from './pages/DoctorsPage/DoctorsPage';
import DoctorPersonalPage from './pages/DoctorPersonalPage/DoctorPersonalPage';
import UslugiPage from './pages/UslugiPage/UslugiPage';
// import SearchLine from './components/SearchLine/SearchLine.jsx';



// React imports
import React from 'react';
import SideMenu from './components/Header/HeaderMobile/SideMenu/SideMenu';
import Modal from './components/Modal/Modal.jsx'

function App() {

	const [header, setHeader] = React.useState();
	//  Динамическая проверка ширины экрана, для вставки хэдера
	React.useEffect(() => {
		headerChooser();
		const handleResize = () => {
			headerChooser();
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const [modal, setModal] = React.useState(false);

	return (
		<Provider>
			<BrowserRouter>
				
				{modal ? <Modal /> : <Modal />}
				
				{header}
				{/* <SearchLine /> */}
				<Routes>
					<Route exact path="/" element={<Homepage />} />
					<Route exact path="/doctors" element={<DoctorsPage />} />
					<Route exact path="/doctors/:path" element={<DoctorPersonalPage />} />
					<Route path="/uslugi" element={<UslugiPage openModal={openModal} />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</Provider>
	);

	function openModal() {
		setModal(true);
	}

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
