import styles from './LicenseBar.module.scss';
import main_license from './main_license.png';

function LicenseBar() {
	return (
		<>
        <h1 className={styles.main_title}>Документы</h1>
			<div className={styles.wrapper}>
				<div className={styles.license_item}>
					<img className={styles.license_img} src={main_license} alt="" />
					<h4 className={styles.title}>
						Лицензия на осуществление медицинской деятельности
					</h4>
				</div>
			</div>
		</>
	);
}

export default LicenseBar;
