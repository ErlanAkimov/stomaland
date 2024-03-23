import React from 'react';

// COMPONENTS
import Banner from '../../components/Banner/Banner';
import ServicesCards from './ServicesCards/ServicesCards';
import DoctorsBanner from '../../components/DoctorsBanner/DoctorsBanner';
import Reviews from './Reviews/Reviews.jsx'
import Steps from './Steps/Steps'
import FAQ from './FAQ/FAQ'

import { servicesCards } from '../../components/data';
import Header from '../../components/Header/Header.jsx';

function Homepage() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [])

	return (
		<div>
			<Header />
			<Banner />
            <ServicesCards props={servicesCards} />
			<FAQ />
			<DoctorsBanner />
			<Steps />
			<Reviews />
		</div>
	);
}
export default Homepage;
