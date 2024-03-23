import styles from './caries.module.scss';
import bgMob from '../caries.mob.png';

export const Caries = ({ openModal }) => {
	return (
		<div className={styles.wrapper}>

			<div className={styles.overlay}></div>
			{window.innerWidth < 675 && <img loading='lazy' className={styles.bgMob} src={bgMob} alt="" />}
			<div className={styles.wrapperInner}>
				<div>
					<h1 className={styles.title}>
						лечение кариеса <br />
						<span>с анестезией</span>
					</h1>

					{window.innerWidth < 675 ? (
						<p className={styles.description}>
							<b>Безболезненное лечение</b> кариеса под местной анестезией за <span> 3900 руб.</span> <br />
							
						</p>
					) : (
						<p className={styles.description}>
							<b>
								Безболезненное лечение
								<br className={styles.mobile} />
							</b>
							кариеса за
							<b>  
								<span>3900 ₽.</span>
							</b>
							<br />
							Заботимся о вашей улыбке с комфортом для вас.
						</p>
					)}

					<div className={styles.buttons}>
						<button className={styles.leftBtn} onClick={openModal}>Записаться</button>
						{/* <button className={styles.rightBtn}>Израиль</button> */}
					</div>
				</div>
			</div>
		</div>
	);
};
