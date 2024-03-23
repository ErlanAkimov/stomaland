import styles from './brackets.module.scss';
import bracketsImage from './bgc image.png';

export const Brackets = ({openModal}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperInner}>
				<div className={styles.content}>
					<h1 className={styles.title}>
						Установка брекет-систем<br /> на обе челюсти
					</h1>

					<p className={styles.cost}>под ключ за 180 тысяч</p>

					<ul className={styles.description}>
						<li>Установка брекет системы</li>
						<li>Замена дуг</li>
						<li>Переклейка брекетов<br /><span>(в зависимости от клинического случая)</span></li>
						<li>Установка эластиков, цепочек</li>
						<li>Работа ортодонта с мини винтами</li>
					</ul>

					<button className={styles.btn} onClick={openModal}>Записаться</button>
				</div>
				<div className={styles.image}>
					<div className={styles.overlay}></div>
					<img src={bracketsImage} alt="" />
				</div>
			</div>
		</div>
	);
};
