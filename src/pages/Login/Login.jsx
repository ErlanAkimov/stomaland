import styles from './login.module.scss';
import bgc from '../../assets/images/bgc.jpg';
import { Link } from 'react-router-dom';
import React from 'react';

export const Login = () => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [makePasswordVisible, setMakePasswordVisible] = React.useState(['password', 'показать']);

	return (
		<div className={styles.wrapper}>
			<div className={styles.leftside}>
				<h1 className={styles.title}>
					<Link className={styles.close} to="/">
						<svg
							width="18px"
							height="18px"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
								fill="#0F0F0F"
							/>
						</svg>
					</Link>
					Авторизация
				</h1>
				<p className={styles.stepTitle}>Вход в личный кабинет</p>

				<form className={styles.form}>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className={styles.input}
						type="text"
						name="name"
						placeholder="Email"
						autoComplete="off"
					/>
					<div className={styles.inputPassword}>
						<input
							value={password}
							className={styles.input}
							onChange={(e) => setPassword(e.target.value)}
							type={makePasswordVisible[0]}
							name="password"
							placeholder="Придумайте пароль"
							autoComplete="off"
						/>
						<p
							onClick={(e) => {
								if (makePasswordVisible[1] === 'скрыть') {
									setMakePasswordVisible(['password', 'показать']);
								} else {
									setMakePasswordVisible(['text', 'скрыть']);

								}
							}}
						>
							{makePasswordVisible[1]} пароль
						</p>
					</div>
					<button className={styles.formBtn} onClick={() => {}}>
						Войти
					</button>
				</form>
				<p className={styles.already}>
					Нет аккаунта? <Link to="/registration" style={{ color: 'blue' }}>Зарегистрируйтесь</Link>
				</p>
			</div>

			<div className={styles.rightside}>
				<div className={styles.overlay}></div>
				<img src={bgc} alt="" />
			</div>
		</div>
	);
};
