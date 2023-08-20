import styles from './Banner.module.scss';
import img from '../../assets/images/banner-gift.png';
import Birthday from './Birthday/Birthday';
import FreeVisit from './FreeVisit/FreeVisit';
import React from 'react';

function Banner({ openModal }) {
	const banners = [<Birthday />, <FreeVisit openModal={openModal} />];
	const [active, setActive] = React.useState(0);
	const [render, setRender] = React.useState(banners[active]);

	const handleDotPicker = (index) => {
		setActive(index)
	}

	React.useEffect(() => {
		setRender(banners[active])
	}, [active])
	return (
		<div style={{ position: 'relative' }}>
			{render}

			<div className={styles.dots}>
				{banners.map((item, index) => {
					return (
						<div
							key={index}
							className={
								active == index ? `${styles.dot} ${styles.active_dot}` : styles.dot
							}
							onClick={() => {handleDotPicker(index)}}
						></div>
					);
				})}
			</div>
		</div>
	);
}
export default Banner;
