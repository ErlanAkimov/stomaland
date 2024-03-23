import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

// ICONS
import { LuMenu } from 'react-icons/lu';
import { FaUserDoctor } from 'react-icons/fa6';

import { MdMedicalServices } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { MdOutlineRateReview } from 'react-icons/md';
import { FaTooth, FaPhone } from 'react-icons/fa';
import { IoIosContacts } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

function Header() {
	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>
				<div className={styles.l_side}>
					<Link to="/">
						<div className={styles.logo}>
							<div className={styles.logo_text}>
								<h1 className={styles.stomaland}>
									STOMA<span>LAND</span>
								</h1>
								<p>стоматология</p>
							</div>
							<div className={styles.logoImage}>
								<img src={logo} alt="" />
							</div>
						</div>
					</Link>
					<ul className={styles.nav}>
						<Link to="/doctors">
							<li>Врачи</li>
						</Link>
						<Link to="/uslugi">
							<li>Услуги</li>
						</Link>
						<Link to="/price">
							<li>Цены</li>
						</Link>
						<Link to="/reviews">
							<li>Отзывы</li>
						</Link>
						<Link to="/job">
							<li>Вакансии</li>
						</Link>
						<Link to="/contacts">
							<li>Контакты</li>
						</Link>
					</ul>
				</div>
				<div className={styles.contacts}>
					<div className={styles.numbers}>
						<a href="tel: +73832383338">+7 (383) 238-33-38</a>
						<a href="tel: +79231993989">+7 (923) 199-39-89</a>
					</div>
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

				<div className={styles.mobile}>
					<h1 className={styles.stomaland}>
						STOMA<span>LAND</span>
					</h1>
					<p>ул. Герцена 11/1</p>
				</div>

				<div className={styles.burger}>
					<LuMenu />
				</div>
			</header>

			<div className={`${styles.mobileMenu}`}>
				<h1 className={styles.stomaland}>
					STOMA<span>LAND</span>
				</h1>

				<div className={styles.close}>
					<IoClose />
				</div>

				<ul className={styles.nav}>
					<Link to="/doctors">
						<FaUserDoctor />
						<li>Врачи</li>
					</Link>
					<Link to="/uslugi">
						<MdMedicalServices />
						<li>Услуги</li>
					</Link>
					<Link to="/price">
						<GiReceiveMoney />
						<li>Цены</li>
					</Link>
					<Link to="/reviews">
						<MdOutlineRateReview />
						<li>Отзывы</li>
					</Link>
					<Link to="/job">
						<FaTooth />
						<li>Вакансии</li>
					</Link>
					<Link to="/contacts">
						<IoIosContacts />
						<li>Контакты</li>
					</Link>
				</ul>
				<div className={styles.numbers}>
					<a href="tel: +73832383338"><FaPhone />+7 (383) 238-33-38</a>
					<a href="tel: +79231993989"><FaPhone />+7 (923) 199-39-89</a>
				</div>
			</div>
		</div>
	);
}

export default Header;
