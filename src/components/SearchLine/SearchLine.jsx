import React from 'react';
import search_icon from '../../assets/images/search-icon.png';
import styles from './SearchLine.module.scss';
import { Context } from '../../context';


function SearchLine({Search}) {
	const { inputValue, setInputValue } = React.useContext(Context);
	const Changer = (e) => {
		setInputValue(e.target.value);
	}
	React.useEffect(() => {
		Search(inputValue);
	}, [inputValue])


	return (
		<div className={styles.wrapper}>
			<div className={styles.input_block}>
				<label className={styles.label}>
					<img src={search_icon} alt="" />
					<input onChange={Changer} value={inputValue} placeholder="Поиск..." />
				</label>
				<button className={styles.button}>Найти</button>
			</div>
		</div>
	);
}

export default SearchLine;
