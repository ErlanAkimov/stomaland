import styles from './DoctorsBanner.module.scss';
import React from 'react';
import doctors from '../../assets/images/doctors.png';
import { Link } from 'react-router-dom';

function DoctorsBanner() {
	return (
		<div className={styles.outer_wrapper}>
			<div className={styles.banner}>
				<h2 className={styles.title}>
					У нас работают только квалифицированные специалисты
				</h2>
				<Link to='/doctors'><button className={styles.btn}>Записаться к врачу</button></Link>

				<img className={styles.doctors_img} src={doctors} alt="" />
			</div>
		</div>
	);
}

export default DoctorsBanner;
