import styles from './freevisit.module.scss';

import image from '../../../assets/images/doctor-for-banner.png';

function FreeVisit({openModal}) {
	return (
		<div className={styles.wrapper}>
			<img className={styles.image} src={image} alt="" />
			<div className={styles.clickbate}>
				<div className={styles.titles}>
					<h2>Профилактический осмотр</h2>
					<h2>Диагностика полости рта</h2>
				</div>
                <h1>
                    БЕСПЛАТНО
                </h1>
			</div>

            <div className={styles.description}>
                <p>
                    Проведем тщательный профосмотр и продиагностируем полость рта. Расскажем и покажем Вам все проблемы с зубами, а также составим грамотный план лечения. Дадим профессиональные рекомендации, чтобы гигиена полости рта была простой и эффективной!
                </p>
            </div>

            <button className={styles.btn} onClick={() => {openModal('Переход по баннеру "Бесплатный профосмотр"', null)}}>Записаться</button>
		</div>
	);
}

export default FreeVisit;
