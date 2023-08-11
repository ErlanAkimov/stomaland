import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import styles from './Footer.module.scss';
import envelope from '../../assets/images/envelope.png';
import phone from '../../assets/images/phone.png';
import whatsapp from '../../assets/images/whatsapp.png';
import map from '../../assets/images/map.png';

function Footer() {
	return (
		<div style={{ backgroundColor: '#2CA1AE' }}>
			<footer className={styles.footer}>
				<div className={styles.l_side}>
					<div className={styles.title}>Навигация</div>
					<div className={styles.nav}>
						<div className={styles.navlist}>
							<Link to="/doctors">
								<p>Врачи</p>
							</Link>
							<Link to="/uslugi">
								<p>Услуги</p>
							</Link>
							<Link to="/price">
								<p>Цены</p>
							</Link>
						</div>

						<div className={styles.navlist}>
							<Link to="/reviews">
								<p>Отзывы</p>
							</Link>
							<Link to="/job">
								<p>Вакансии</p>
							</Link>
							<Link to="/contacts">
								<p>Контакты</p>
							</Link>
						</div>
					</div>
				</div>

				<div className={styles.logo}>
					<img src={logo} alt="" />
					<h2 className={styles.logo_title}>Stomaland</h2>
					<p className={styles.logo_text}>cтоматология</p>
					<p className={styles.logo_disclamer}>Имеются противопоказания. Необходима консультация специалиста</p>
				</div>

				<div className={styles.r_side}>
					<div className={styles.title}>Информация</div>
					<div className={styles.info}>
						<p>
							stomaland@inbox.ru
							<img className={styles.envelope} src={envelope} alt="" />
						</p>
						<a href="tel: +73832383338">
							<p>
								+7 (383) 238-33-38
								<img className={styles.phone} src={phone} alt="" />
							</p>
						</a>
						<a href="tel: +79231993989">
							<p>
								+7 (923) 199-39-89
								<img className={styles.whatsapp} src={whatsapp} alt="" />
							</p>
						</a>
						<a target='_blank' href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%93%D0%B5%D1%80%D1%86%D0%B5%D0%BD%D0%B0,+11+%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81+1,+%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA,+%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+630033/@54.9592185,82.9645445,18.46z/data=!4m6!3m5!1s0x42dfe7c1810b6141:0xb8354123d042558e!8m2!3d54.9593537!4d82.9646962!16s%2Fg%2F11cppcvgkg?hl=RU&entry=ttu">
							<p>
								г. Новосибирск, ул. Герцена 11/1
								<img className={styles.map} src={map} alt="" />
							</p>
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
