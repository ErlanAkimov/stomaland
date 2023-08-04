import React from 'react';
import styles from './doctorspage.module.scss';
import Card from './Card/Card.jsx';
import { stuff } from '../../components/data';
import { Link } from 'react-router-dom';

function DoctorsPage() {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.page_title}>Наши специалисты: </div>

				{stuff.map((person) => {
					return (
						<Link to={`/doctors/${person.path}`} key={person.id}>
							<Card props={person} />
						</Link>
					);
				})}
			</div>
		</>
	);
}

export default DoctorsPage;
