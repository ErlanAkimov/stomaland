import styles from './price.module.scss';
import React from 'react';
import maintenance from '../../assets/images/maintenance.png';

function PricePage() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={styles.wrapper}>
			{/* <h1 className={styles.title}>Цены</h1> */}
			<img src={maintenance} alt="" />
			<p style={{ marginTop: '7px' }}>Собираем данные, актуализируем информацию...</p>
			<p className={styles.maintenance}>Раздел сайта находится в разработке. </p>
			<p className={styles.message}>
				В ближайшее время здесь появится актуальная информация со стоимостью услуг в клинике
				stomaland. Информацию по ценам вы можете уточнить по номеру телефона{' '}
				<span>+7 (383) 238-33-38</span>
			</p>
		</div>
	);
}
export default PricePage;
