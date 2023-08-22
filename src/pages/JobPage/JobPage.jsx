import React from 'react';
import styles from './job.module.scss';
import Vacancy from './Vacancy/Vacancy.jsx';

function JobPage() {
	const vacancies = [<Vacancy />];
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [])
	
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.h1}>Вакансии</h1>
			{vacancies.length == 0 ? (
				<div className={styles.noJob_text}>
					В данный момент в клинике нет свободных позиций. Возможно, здесь скоро появятся
					вакансии. Попробуйте зайти сюда позже или отправьте нам резюме на электронный
					адрес <b>stomaland@inbox.ru</b>
				</div>
			) : (
				vacancies.map((item, index) => {
					return item
				})
			)}
		</div>
	);
}
export default JobPage;
