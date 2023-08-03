import styles from './LicenseBar.module.scss';
import main_license from './main_license.png';
import second_license from './2.jpg';
import license1 from './img6-scaled.jpg';

import { Link } from 'react-router-dom';

function LicenseBar() {
	const images = [second_license, main_license, license1]

	return (
		<>
			<h1 className={styles.title}>Документы</h1>
            <Link to='/documents'><div className={styles.link}>cмотреть все</div></Link>
			<div className={styles.wrapper}>
				{
					images.map((image_src, index) => {
						return <img key={index} className={styles.license_img} src={image_src} alt="" />
					})
				}
			</div>
		</>
	);
}

export default LicenseBar;
