import React from 'react';
import styles from './uslugi.module.scss';
import SearchLine from '../../components/SearchLine/SearchLine';

// data
import {data, titles, all} from './data';

function UslugiPage() {
    const [active_list, setActive_list] = React.useState([]);
    const [active, setActive] = React.useState('Все услуги')

    React.useEffect(() => {
        if (active === 'Все услуги') {
            setActive_list(all)
        }
        if (active === 'Лечение зубов') {
            setActive_list(data.dental_treatment)
        }

        if (active === 'Ортодонтия') {
            setActive_list(data.orthodontics)
        }

        if (active === 'Протезирование') {
            setActive_list(data.prosthetics)
        }

        if (active === 'Имплантация') {
            setActive_list(data.implanting)
        }

        if (active === 'Хирургия') {
            setActive_list(data.surgery)
        }

        if (active === 'Прочие услуги') {
            setActive_list(data.others)
        }
    }, [active])

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Услуги клиники</h1>

			<SearchLine />
			<div className={styles.content}>
				<div className={styles.sideblock}>
					<h3 className={styles.cat_title}>Категории</h3>
					{titles.map((item) => {
						return (
							<div onClick={handleCategory} key={item} className={active === item ? styles.cat_item_active : styles.cat_item}>
								{item}
							</div>
						);
					})}
				</div>
				<div className={styles.content_block}>
					<h4 className={styles.counter}>Всего услуг: {active_list.length}</h4>
					<div className={styles.uslugi_wrapper}>
						{active_list.map((item) => {
							return (
								<div key={item.title} className={styles.card}>
									<div className={styles.title}>{item.title}</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);

    function handleCategory(tag) {
        setActive(tag.target.innerHTML)
    }
}

export default UslugiPage;
