import React from 'react';
import styles from './job.module.scss';
function JobPage() {
	const vacancies = [{ position: 'Врач-стоматолог-хирург', time: 'Частичная занятость (2-3 дня в неделю)'}];

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
					return <div>{item}</div>;
				})
			)}

			<div className={styles.offer}>
				<div className={styles.offer_item}>
					<div className={styles.item_title}>Основные требования:</div>
					<ul className={styles.list}>
						<li>Опыт работы от 3-ех лет</li>
						<li>Профильное медицинское образование</li>
					</ul>
				</div>
				<div className={styles.offer_item}>
					<div className={styles.item_title}>Условия:</div>
					<ul className={styles.list}>
						<li>Официальное трудоустройство</li>
						<li>Полный соц. пакет</li>
						<li>Конкурентная заработная плата</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
export default JobPage;
