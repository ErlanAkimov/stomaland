import logo_icon from '../../../assets/images/logo.png';
import styles from './HeaderMobile.module.scss';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../../context';

function HeaderMobile() {
	const { setMenu } = useContext(Context);
	const ShowMenu = () => {
		setMenu('0');
	};
	return (
		<div className={styles.wrapper}>
			<div>
				<img className={styles.logo_icon} src={logo_icon} alt="" />
			</div>
			<Link to="/">
				<h1 className={styles.title}>
					stoma<span>land</span>
				</h1>
			</Link>
			<div className={styles.r_side} onClick={ShowMenu}>
				<div className={styles.burger_icon}>
					<div className={styles.line}></div>
					<div className={styles.line}></div>
					<div className={styles.line}></div>
				</div>
			</div>
		</div>
	);
}

export default HeaderMobile;
