import styles from './implant.module.scss';

import collage from './Collage.png';
import bg from '../implant-mob-bg.png';

export const Implant = ({openModal}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperInner}>
				<div className={styles.text}>
					<div>
						<h1 className={styles.title}>
							имплантация <br />
							<span>под ключ</span>
						</h1>

						{window.innerWidth < 675 ? (
							<p className={styles.description}>
								Имплантация с <b>фиксированной ценой.</b> Протезирование коронкой из <b>диоксида циркона.</b>
								<br /><span>45 000 ₽</span>
							</p>
						) : (
							<p className={styles.description}>
								Имплантация зубного протеза с фиксированной ценой. Протезирование
								коронкой <br />
								из диоксида циркона
								<br />
								Израильский имплант <br className={styles.mobile} />
								<span>под ключ за 45.000 ₽.</span>
							</p>
						)}
					</div>

					<div className={styles.buttons} onClick={openModal}>
						<button className={styles.leftBtn}>Записаться</button>
						{/* <button className={styles.rightBtn}>Израиль</button> */}
					</div>
				</div>

				<div className={styles.collageWrapper}>
					<img loading='lazy' src={window.innerWidth < 675 ? bg : collage} alt="" />
				</div>
			</div>
		</div>
	);
};
