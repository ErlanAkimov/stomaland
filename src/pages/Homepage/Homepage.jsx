import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.scss';
import Banner from '../../components/Banner/Banner';
import { benefits, servicesCards } from '../../components/data';
import ServicesCards from './ServicesCards/ServicesCards';

import implant from '../../assets/images/anyridge.png';
import WhyWe from './WhyWe/WhyWe';

function Homepage() {


	return (
		<div>
			<Banner />
            <ServicesCards props={servicesCards} />

			<div className="all-services-btn">
				<Link to="/services">
					<button className="btn-hover">Все услуги</button>
				</Link>
			</div>

            <WhyWe props={benefits} />
		</div>
	);
}
export default Homepage;
