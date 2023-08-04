import React from 'react';
import styles from './DoctorPersonalPage.module.scss';
import { stuff } from '../../components/data';

import { useParams } from 'react-router-dom';

import account_img from '../../assets/images/account.png';

function DoctorPersonalPage() {
	const { path } = useParams();

	const doctor = stuff.find((person) => person.path === path);
	return (
		<div className={styles.wrapper}>
			<div className={styles.img_side}>
				<img className={styles.main_image} src={doctor.img_full} alt="" />
				<div className={styles.position}>{doctor.position}</div>
			</div>
			<div className={styles.text_side}>
				<div className={styles.text}>
					<h3 className={styles.department}>{doctor.department}</h3>
					<h1 className={styles.name}>{doctor.name}</h1>
					<h3 className={styles.spec}>{doctor.specialization}</h3>
					<p className={styles.experience}>
						Стаж профессиональной деятельности: {doctor.experience}
					</p>
					<h4 className={styles.edu_title}>Образование</h4>
					<div className={styles.edu_items}>
						{doctor.education_years.map((item, index) => {
							return (
								<div key={index} className={styles.edu_item}>
									<h3>{item}</h3>
									<p className={styles.edu_text}>{doctor.education[index]}</p>
								</div>
							);
						})}
					</div>

					{doctor.courses && (
						<>
							<h4 className={styles.edu_title}>Курсы повышения квалификации:</h4>
                            <ul className={styles.courses_list}>
                                {
                                    doctor.courses.map((course, index) => {
                                        return <li className={styles.courses_item}>{course}</li>
                                    })
                                }
                            </ul>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default DoctorPersonalPage;
