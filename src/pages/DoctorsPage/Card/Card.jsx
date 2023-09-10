import React from 'react';
import styles from './card.module.scss';
import calendar_icon from '../../../assets/images/calendar.png';

function Card({ props }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.left_side}>
				<img src={props.img_circle} alt="" />

				<div className={styles.middle_side}>
					<p className={styles.department}>{props.department}</p>
					<p className={styles.name}>{props.name}</p>
					<p className={styles.specialization}>{props.specialization}</p>
					<p className={styles.title_tier3}>Опыт врачебной деятельности: </p>
					<p className={styles.experience}>{/* {props.experience} */}
					</p>
				</div>
			</div>

			<div className={styles.right_side}>
				<div className={styles.title_block}>
					<img src={calendar_icon} alt="" />
					<h4>Расписание</h4>
				</div>

				<div className={styles.schedule}>
					<div className={styles.data}>
						{props.schedule_days.map((item, index) => {
							return <div key={index}>{item}<p className={styles.remark}>{item === 'Сб' ? props.schedule_remark : null}</p></div>;
						})}
					</div>

					<div className={styles.data2}>
						{props.schedule_time.map((item, index) => {
							return <p key={index}>{item}</p>
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
