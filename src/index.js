import React from 'react';
import ReactDOM from 'react-dom/client';



import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// PAGES
import Homepage from './pages/Homepage/Homepage';
import DoctorsPage from './pages/DoctorsPage/DoctorsPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import JobPage from './pages/JobPage/JobPage';
import UslugiPage from './pages/UslugiPage/UslugiPage';
import ReviewsPage from './pages/ReviewsPage/ReviewsPage';
import PricePage from './pages/PricePage/PricePage'
import Page404 from './pages/Page404/Page404'

// STYLES
import './global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
	{ path: '/', element: <Homepage /> },
	// { path: '/doctors', element: <DoctorsPage />},
	// { path: '/contacts', element: <ContactsPage />},
	// { path: '/job', element: <JobPage />},
	// { path: '/uslugi', element: <UslugiPage />},
	// { path: '/reviews', element: <ReviewsPage /> },
	// { path: '/price', element: <PricePage /> },
	// { path: '*', element: <Page404 /> },
])

{/* <Route exact path="/doctors/:path" element={<DoctorPersonalPage openModal={openModal} />} /> */}
{/* <Route path='/registration' element={<Registration />} /> */}
{/* <Route path='/login' element={<Login />} /> */}

root.render(
	// <Provider>
			<RouterProvider router={router} />
	// </Provider>
);
