import styles from './Footer.module.scss'
console.log(styles.footer)
function Footer() {
	return (
		<div style={{backgroundColor: '#2CA1AE'}}>
			<footer className={styles.footer}>
				<div className="l-side">
					<div className={styles.title}>Навигация</div>
						
				</div>
            </footer>
		</div>
	);
}

export default Footer;
