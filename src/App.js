import './global.scss';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage.jsx';
import DoctorsPage from './pages/DoctorsPage/DoctorsPage.jsx';
import SearchLine from './components/SearchLine/SearchLine.jsx'

function App() {
	return (
		<BrowserRouter>
				<Header />
				{/* <SearchLine /> */}
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/our-doctors' element={<DoctorsPage />} />
          </Routes>
				<Footer />
		</BrowserRouter>
	);
}

export default App;
