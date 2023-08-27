import styles from './price.module.scss';
import React from 'react';
import maintenance from '../../assets/images/maintenance.png';
import { data } from './price-data.js';

function PricePage() {
	const [render, setRender] = React.useState(data);

	const [maxHeight, setMaxHeight] = React.useState(Array(data.length).fill('0px'));
	const [openStates, setOpenStates] = React.useState(Array(data.length).fill(false));

	// const [rotateState, setRotateState] = React.useState(Array(data.length).fill(false));
	const [rotate, setRotate] = React.useState(Array(data.length).fill('rotate(0deg)'));

	const refItem = React.useRef(data.map(() => React.createRef()));

	const toggleElement = (index) => {
		setOpenStates((prevOpenStates) => {
			const newOpenStates = [...prevOpenStates];
			newOpenStates[index] = !newOpenStates[index];
			return newOpenStates;
		});

		setMaxHeight((prevMaxHeight) => {
			const currentRefItem = refItem.current[index].current.clientHeight;
			const prev = [...prevMaxHeight];
			prev[index] == '0px' ? (prev[index] = currentRefItem) : (prev[index] = '0px');
			return prev;
		});

		// setRotateState((prevState) => {
		// 	const newState = [...prevState];
		// 	newState[index] = !newState[index];
		// 	return [newState];
		// });

		setRotate((prevValue) => {
			const newValue = [...prevValue];
			newValue[index] == 'rotate(0deg)'
				? (newValue[index] = 'rotate(-180deg)')
				: (newValue[index] = 'rotate(0deg)');

			return newValue;
		});
	};

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Цены</h1>

			{render.map((item, index) => {
				return (
					<div key={index} className={styles.content}>
						<div
							className={styles.block_title}
							onClick={() => {
								toggleElement(index);
							}}
						>
							<h1 className={styles.block_title_h1}>{item.section}</h1>

							<div>
								<svg
									height="20px"
									width="20px"
									viewBox="0 0 185.344 185.344"
									style={{
										transition: '.3s ease-in-out',
										transform: openStates[index]
											? rotate[index]
											: 'rotate(0deg)',
									}}
								>
									<path
										style={{ fill: '#010002' }}
										min-height="20px"
										min-width="20px"
										d="M92.672,144.373c-2.752,0-5.493-1.044-7.593-3.138L3.145,59.301c-4.194-4.199-4.194-10.992,0-15.18
								c4.194-4.199,10.987-4.199,15.18,0l74.347,74.341l74.347-74.341c4.194-4.199,10.987-4.199,15.18,0
								c4.194,4.194,4.194,10.981,0,15.18l-81.939,81.934C98.166,143.329,95.419,144.373,92.672,144.373z"
									/>
								</svg>
							</div>
						</div>
						<div
							className={styles.table}
							style={{
								maxHeight: openStates[index] ? maxHeight[index] + 'px' : '0px',
								transition: '.3s ease-in-out',
							}}
						>
							<div
								ref={refItem.current[index]}
								style={{ transition: '.3s ease-in-out' }}
							>
								{/* Должен открываться этот блок, для каждого элемента в отдельности */}
								{item.services.map((service, index) => {
									return (
										<div key={index} className={styles.table_item}>
											<h4 className={styles.item_title}>{service.name}</h4>
											<span>{service.cost}</span>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
export default PricePage;