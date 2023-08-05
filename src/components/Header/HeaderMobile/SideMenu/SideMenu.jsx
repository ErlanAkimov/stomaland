import styles from './SideMenu.module.scss';
import { Link } from 'react-router-dom';
import close from '../../../../assets/images/close.png';
import phone_icon from '../../../../assets/images/call.png'

import { useContext } from 'react';
import { Context } from '../../../../context';


function SideMenu({}) {
	const { menu, setMenu } = useContext(Context);
	const HideMenu = () => {
		setMenu('-100%');
	};

	return (
		<div className={`${styles.wrapper}`} style={{ right: menu, transition: '.2s ease-in-out' }}>
			<h1 className={styles.title}>
				stoma<span>land</span>
				<img onClick={HideMenu} src={close} alt="" />
			</h1>

			<ul className={styles.nav}>
				<Link to="/doctors">
					<li>Врачи</li>
				</Link>
				<li>Услуги</li>
				<li>Цены</li>
				<li>Отзывы</li>
				<li>Вакансии</li>
				<li>Контакты</li>
			</ul>

			<h6 className={styles.schedule_title}>График работы:</h6>
			<div className={styles.work_time}>
				<div>
					<h5>Пн - Пт: </h5>
					<h5>Сб: </h5>
					<h5>Вс: </h5>
				</div>

				<div>
					<h5>8:00 - 21:00</h5>
					<h5>9:00 - 15:00</h5>
					<h5 style={{ color: 'red' }}>Выходной</h5>
				</div>
			</div>
		</div>
	);
}

export default SideMenu;
