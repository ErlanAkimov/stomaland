import React from 'react';
import styles from './uslugi.module.scss';
import SearchLine from '../../components/SearchLine/SearchLine';
import { Context } from '../../context';
import { Link } from 'react-router-dom';

// data
import { data, titles, all } from './data';
import search_404 from '../../assets/images/404-search.png';

function UslugiPage({openModal}) {
	const [active_list, setActive_list] = React.useState([]);
	const [haveAny, setHaveAny] = React.useState(false);
	const { setSearchResult, searchResult, inputValue } = React.useContext(Context);
	const [active, setActive] = React.useState('Все услуги');

	const clear_list = [{ nothing_there: 'nothing' }];

	React.useEffect(() => {
		if (active === 'Все услуги') {
			setActive_list(all);
		}
		if (active === 'Лечение зубов') {
			setActive_list(data.dental_treatment);
		}

		if (active === 'Ортодонтия') {
			setActive_list(data.orthodontics);
		}

		if (active === 'Протезирование') {
			setActive_list(data.prosthetics);
		}

		if (active === 'Имплантация') {
			setActive_list(data.implanting);
		}

		if (active === 'Хирургия') {
			setActive_list(data.surgery);
		}

		if (active === 'Прочие услуги') {
			setActive_list(data.others);
		}
	}, [active]);

	React.useEffect(() => {
		Shuffle(all);
		window.scrollTo(0, 0);
	}, []);

	function Search() {
		let request_result = [];
		request_result = all.filter((item) =>
			item.title.toLowerCase().includes(inputValue.toLowerCase()),
		);
		if (request_result.length > 0) {
			setActive_list(request_result);
			setHaveAny(false);
		} else {
			setHaveAny(true);
		}
	}

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Услуги клиники</h1>

			<SearchLine Search={Search} />
			<div className={styles.content}>
				{window.innerWidth > 1217 ? (
					<div className={styles.sideblock}>
						<h3 className={styles.cat_title}>Категории:</h3>
						{titles.map((item) => {
							return (
								<div
									onClick={handleCategory}
									key={item}
									className={
										active === item ? styles.cat_item_active : styles.cat_item
									}
								>
									{item}
								</div>
							);
						})}
					</div>
				) : (
					console.log('')
				)}

				<div className={styles.content_block}>
					<h4 className={styles.counter}>
						Всего услуг: {haveAny ? 0 : active_list.length}
					</h4>
					<div className={styles.uslugi_wrapper}>
						{haveAny ? (
							<div className={styles.search_404}>
								<img src={search_404} alt="" />
								<p>
									К сожалению, по вашему запросу не удалось ничего найти.
									Попробуйте использовать другие ключевые слова.
								</p>
							</div>
						) : (
							active_list.map((item) => {
								return (
									<div key={item.title} className={styles.card}>
										<div className={styles.title}>{item.title}</div>
										<img className={styles.img} src={item.img} alt="" />
										<p className={styles.description}>{item.description}</p>
										<div className={styles.buttons}>
											<button onClick={openModal} className={styles.letsGo}>Записаться</button>
											<Link to='/price'><button className={styles.goToPrice}>Прайс</button></Link>
										</div>
									</div>
								);
							})
						)}
					</div>
				</div>
			</div>
		</div>
	);

	function handleCategory(tag) {
		setActive(tag.target.innerHTML);
	}

	function Shuffle(list) {
		for (let i = list.length - 1; i > 0; i--) {
			const listItem = Math.floor(Math.random() * (i + 1));
			[list[i], list[listItem]] = [list[listItem], list[i]];
		}
	}
}

export default UslugiPage;
