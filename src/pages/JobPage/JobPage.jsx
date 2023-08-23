import React from 'react';
import styles from './job.module.scss';
import Vacancy from './Vacancy/Vacancy.jsx';

function JobPage() {
	const vacancies = [
		{
			title: 'Ассистент стоматолога',
			responses: [
				'Ассистирование врачу-стоматологу',
				'Приветливое общение с пациентами',
				'Обработка инструментов',
			],
			requires: [
				'Медицинское образование',
				'Действующий сертификат по сестринскому делу',
				'Ответственность',
				'Опыт работы будет плюсом',
			],
			conditions: [
				'Дружный коллектив',
				'Уютная клиника',
				'Достойная заработная плата',
				'Удобный график работы',
			],
			skills: ['Грамотная речь', 'Умение работать в команде'],
		},
		{
			title: 'Врач-стоматолог-хирург (на 2-3 дня в неделю)',
			responses: [
				'Приветливое общение с пациентами',
				'Консультация пациентов', 'Диагностика', 'Лечение пациентов',
			],
			requires: [
				'Медицинское образование',
				'Ответственность',
			],
			conditions: [
				'Дружный коллектив',
				'Уютная клиника',
				'Достойная заработная плата',
				'Удобный график работы',
			],
			skills: ['Грамотная речь', 'Умение работать в команде'],
		},
	];

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.h1}>Вакансии</h1>

			<div className={styles.vacancies_wrapper}>
				{vacancies.map((item, index) => {
					return <Vacancy key={index} vacan_data={item} />;
				})}
			</div>
		</div>
	);
}
export default JobPage;
