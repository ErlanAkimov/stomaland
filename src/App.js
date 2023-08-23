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
import ContactsPage from './pages/ContactsPage/ContactsPage';
import JobPage from './pages/JobPage/JobPage'
import ReviewsPage from './pages/ReviewsPage/ReviewsPage';
import PricePage from './pages/PricePage/PricePage';
import Page404 from './pages/Page404/Page404';
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
	const [vacancyModal, setVacancyModal] = React.useState(false)
    const [pick, setPick] = React.useState('');
    const [doctor, setDoctor] = React.useState('');

	return (
		<Provider>
			<BrowserRouter>
				{modal ? <Modal doctor={doctor} pick={pick} closeModal={closeModal} /> : null}
				
				{header}
				{/* <SearchLine /> */}
				<Routes>
					<Route exact path="/" element={<Homepage openModal={openModal} />} />
					<Route exact path="/doctors" element={<DoctorsPage  openModal={openModal} />} />
					<Route exact path="/doctors/:path" element={<DoctorPersonalPage openModal={openModal} />} />
					<Route exact path="/contacts" element={<ContactsPage />} />
					<Route exact path="/job" element={<JobPage />} />
					<Route path="/uslugi" element={<UslugiPage openModal={openModal} />} />
					<Route path="/reviews" element={<ReviewsPage />} />
					<Route path="/price" element={<PricePage />} />
					<Route path='*' element={<Page404 />} />

				</Routes>
				<Footer />
			</BrowserRouter>
		</Provider>
	);

	function openModal(title, doctor) {
		setModal(true);
		title && setPick(title)
		doctor && setDoctor(doctor)
	}

	function closeModal() {
		setModal(false)
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
