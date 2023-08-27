import styles from './vacancy.module.scss';

function Vacancy({ vacan_data }) {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>{vacan_data.title}</h1>
			<div className={styles.offer}>
				<div className={styles.requires}>
					<h2 className={styles.mini_title}>Требования</h2>
					<ul>
						{vacan_data.requires.map((item, index) => {
							return <li key={index}>{item}</li>;
						})}
					</ul>
				</div>

				<div className={styles.conditions}>
					<h2 className={styles.mini_title}>Условия</h2>
					<ul>
						{vacan_data.conditions.map((item, index) => {
							return <li key={index}>{item}</li>;
						})}
					</ul>
				</div>
			</div>

			<div className={styles.response}>
				<h2 className={styles.mini_title}>Обязанности</h2>
				<ul>
					{vacan_data.responses.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}
				</ul>
			</div>

			<div className={styles.skills}>
				<div className={styles.navyki}>
					{vacan_data.skills.map((item, index) => {
						return <p key={index}>{item}</p>;
					})}
				</div>
				<button
					onClick={() => {
                        // todo
					}}
					className={styles.btn}
				>
					Откликнуться
				</button>
			</div>
		</div>
	);
}

export default Vacancy;
