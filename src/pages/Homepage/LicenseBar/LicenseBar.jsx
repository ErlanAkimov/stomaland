import styles from './LicenseBar.module.scss';
import main_license from './main_license.png';
import second_license from './2.jpg';
import license1 from './img6-scaled.jpg';

import { Link } from 'react-router-dom';
import { useState } from 'react';

function LicenseBar() {
    const [status, setStatus] = useState('');
    const handleImgChanger = () => {
        
    };

	return (
		<>
			<h1 className={styles.title}>Документы</h1>
            <Link to='/documents'><div className={styles.link}>cмотреть все</div></Link>
			<div className={styles.wrapper}>
				<img className={styles.license_img} src={second_license} alt="" />
				<img className={styles.license_img} src={main_license} alt="" />
				<img className={styles.license_img} src={license1} alt="" />
			</div>
		</>
	);
}

export default LicenseBar;
