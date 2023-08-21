import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.scss';


// Components
import Banner from '../../components/Banner/Banner';
import ServicesCards from './ServicesCards/ServicesCards';
import DoctorsBanner from '../../components/DoctorsBanner/DoctorsBanner';
import WhyWe from './WhyWe/WhyWe';
import LicenseBar from './LicenseBar/LicenseBar';
import Reviews from './Reviews/Reviews.jsx'



import { benefits, servicesCards } from '../../components/data';

function Homepage({openModal}) {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [])

	return (
		<div>
			<Banner openModal={openModal} />
            <ServicesCards props={servicesCards} />

			<div className="all-services-btn">
				<Link to="/services">
					<button className="btn-hover">Все услуги</button>
				</Link>
			</div>
			<DoctorsBanner />
			<LicenseBar />
            <WhyWe props={benefits} />
			<Reviews />
		</div>
	);
}
export default Homepage;
