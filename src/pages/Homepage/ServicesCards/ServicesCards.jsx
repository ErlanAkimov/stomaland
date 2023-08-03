import { Link } from 'react-router-dom';
import styles from './ServicesCards.module.scss'

function ServicesCards({ props }) {
	return (
		<div className='content'>
			{props.map((item) => {
				return (
					<div key={item.id} className={styles.card}>
						<h2 className={styles.card__title}>{item.title}</h2>
						<p className={styles.card__text}>
                            {item.text}
						</p>
						<Link to={item.btn_link}><button className={`${styles.card__btn} ${styles.btn_hover}`}>{item.btn_text}</button></Link>
                        <img src={item.img} alt="" className={styles.card__img} />
					</div>
				);
			})}
		</div>
	);
}

export default ServicesCards;
