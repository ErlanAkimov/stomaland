import React from 'react';
import styles from './WhyWe.module.scss';

function WhyWe({ props }) {
	const [open, setOpen] = React.useState(false);
	const ShowElement = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	return (
		<div>
			<h1 className="title">Почему мы?</h1>

			<div className={styles.wrapper}>
				{props.map((item) => {
					return (
						<div key={item.id} className={styles.flex_wrapper}>
							<div onClick={ShowElement} className={styles.show_side}>
								<h2 className="qa-title">{item.title}</h2>
								<div className="qa-close">
									<div className="qa-close-hor"></div>
									<div className="qa-close-vert"></div>
								</div>
							</div>

							<div
								className={styles.close_side}
								style={{ maxHeight: open ? '200px' : '0' }}
							>
								<p>{item.text}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default WhyWe;
