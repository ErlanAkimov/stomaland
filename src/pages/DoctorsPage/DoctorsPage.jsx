import React from 'react';
import styles from './doctorspage.module.scss';
import Card from './Card/Card.jsx';
import { stuff } from '../../components/data';
import { Link } from 'react-router-dom';

function DoctorsPage() {
	console.log(stuff);
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.page_title}>Наши специалисты: </div>

				{stuff.map((person) => {
					console.log(person.id);
					return (
						<Link to={`/doctors/${person.path}`}>
							<Card key={person.id} props={person} />
						</Link>
					);
				})}
			</div>
		</>
	);
}

export default DoctorsPage;
