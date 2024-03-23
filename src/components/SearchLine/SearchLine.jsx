import React from 'react';
import search_icon from '../../assets/images/search-icon.png';
import styles from './SearchLine.module.scss';


function SearchLine({Search}) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.input_block}>
				<label className={styles.label}>
					<img src={search_icon} alt="" />
					<input placeholder="Поиск..." />
				</label>
				<button className={styles.button}>Найти</button>
			</div>
		</div>
	);
}

export default SearchLine;
