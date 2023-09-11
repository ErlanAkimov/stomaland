import React from 'react';
import styles from './faq.module.scss';

function FAQ() {
	const data = [
		{
			title: 'Безусловно качественное лечение по высшему стандарту',
			description: 'asdfadsf',
			image: '',
		},
		{
			title: 'Бережное отношение к пациентам',
			description: '',
			image: '',
		},
		{
			title: 'Демократичные цены',
			description: '',
			image: '',
		},
		{
			title: 'Качественные расходные материалы',
			description: '',
			image: '',
		},
	];

	const [openStatus, setOpenStatus] = React.useState(Array(data.length).fill(false));
	const ref = React.useRef(data.map(() => React.createRef()));

	const toggleElement = (index) => {
		setOpenStatus((prevOpenStatus) => {
			const newOpenStatus = [...prevOpenStatus];
			newOpenStatus[index] = !newOpenStatus[index];
			return newOpenStatus;
		});
	};

	React.useEffect(() => {
		setOpenStatus((prevOpenStatus) => {
			const newOpenStatus = [...prevOpenStatus];
			newOpenStatus[0] = true;
			return newOpenStatus;
		});
	}, []);

	return (
		<div className={styles.wrapper_outer}>
			<div className={styles.wrapper}>
				<p className={styles.name}>[Стоматология премиум класса]</p>
				<div className={styles.wrapper_inner}>
					<h1 className={styles.title}>
						преимущества лечения
						<br /> в современной клинике<br className={styles.for_mob} /> "stomaland"
					</h1>
					<p className={styles.description}>
						Хорошая стоматология отличается профессиональным оборудованием,
						качественными материалами и неподдельной заботой о своих пациентах. Всеми
						этими качествами обладает наша клиника.
					</p>

					{data.map((item, index) => {
						return (
							<div
								className={styles.item}
								style={
									openStatus[index]
										? {
												height:
													ref.current[0].current.clientHeight +
													130 +
													'px',
												transition: '.2s ease-in-out',
										  }
										: { height: '90px', transition: '.2s ease-in-out' }
								}
								key={index}
								onClick={() => toggleElement(index)}
							>
								<div className={styles.item_top_side}>
									<h2 className={styles.title2}>
                                        {openStatus[index] ? (<div className={styles.redDot}></div>) : null}
                                        {item.title}</h2>
									<svg
										width="50"
										height="50"
										viewBox="0 0 50 50"
										style={
											openStatus[index]
												? {
														rotate: '0deg',
														fill: 'red',
														transition: '.2s ease-in-out',
												  }
												: {
														fill: '#c0c0c0',
														rotate: '-180deg',
														transition: '.2s ease-in-out',
												  }
										}
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M24.9999 17.5292L33.9437 26.4729L36.8895 23.5271L24.9999 11.6375L13.1104 23.5271L16.0562 26.4729L24.9999 17.5292Z" />
										<path d="M13.1104 33.9437L16.0562 36.8895L24.9999 27.9458L33.9437 36.8895L36.8895 33.9437L24.9999 22.0541L13.1104 33.9437Z" />
									</svg>
								</div>
								<div className={styles.text} ref={ref.current[index]}>
									{item.description}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default FAQ;
