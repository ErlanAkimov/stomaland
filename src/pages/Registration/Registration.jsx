import styles from './reg.module.scss';
import bgc from '../../assets/images/bgc.jpg';
import { Link } from 'react-router-dom';
import React from 'react';

export const Registration = () => {
	const [step, setStep] = React.useState(1);

	const [name, setName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [checked, setChecked] = React.useState(false);

	const [date, setDate] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
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
					Регистрация (Шаг {step} из 2)
				</h1>
				{step === 1 ? (
					<Form1
						setStep={setStep}
						setName={setName}
						name={name}
						lastName={lastName}
						setLastName={setLastName}
						checked={checked}
						setChecked={setChecked}
					/>
				) : (
					<Form2
						setStep={setStep}
						date={date}
						setDate={setDate}
						password={password}
						setPassword={setPassword}
						email={email}
						setEmail={setEmail}
					/>
				)}
                <p className={styles.already}>Уже зарегистрированы? <Link to='/login' style={{color: 'blue'}}>Войти</Link></p>
			</div>

			<div className={styles.rightside}>
				<div className={styles.overlay}></div>
				<img src={bgc} alt="" />
			</div>
		</div>
	);
};

function Form1({ setStep, setName, name, lastName, setLastName, checked, setChecked }) {
	return (
		<>
			<p className={styles.stepTitle}>
				Давайте начнем со знакомства!
			</p>
			<p className={styles.stepTitle}>Как к вам обращаться?</p>

			<form className={styles.form}>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					className={styles.input}
					type="text"
					name="name"
					placeholder="Ваше имя..."
					autoComplete="off"
				/>
				<input
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					className={styles.input}
					type="text"
					name="name"
					placeholder="Ваша фамилия..."
					autoComplete="off"
				/>
				{/* <div
					className={styles.checkbox}
					onClick={() => {
						setChecked((prev) => !prev);
					}}
				>
					<div className={checked ? styles.toggler__active : styles.toggler}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="white"
						>
							<path
								fill="white"
								d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"
							></path>
						</svg>
					</div>
					<p>Я уже был на приеме</p>
				</div> */}
				<button className={styles.formBtn} onClick={() => setStep(2)}>
					Дальше
				</button>
			</form>
		</>
	);
}

function Form2({ setStep, date, setDate, email, setEmail, password, setPassword }) {
	const [makePasswordVisible, setMakePasswordVisible] = React.useState(['password', 'показать']);

	return (
		<>
			<p className={styles.stepTitle}>Заполните еще пару полей</p>
			<p className={styles.stepTitle}></p>

			<form className={styles.form}>
				<div className={styles.date}>
					<p className={styles.text}>Дата рождения:</p>
					<input
						value={date}
						onChange={(e) => setDate(e.target.value)}
						type="tel"
						className={`${styles.input} ${styles.inputDate}`}
						placeholder="16.06.1996"
                        autoComplete='off'
					/>
				</div>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className={styles.input}
					type="text"
					name="email"
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

				{/* <p className={styles.text2}>
					Нажимая "отправить", вы соглашаетесь с правилами обработки персональных данных
				</p> */}
				<div className={styles.btns}>
					{/* <button className={styles.prevBtn} onClick={() => setStep(1)}>
						Вернуться
					</button> */}
					<button className={styles.formBtn}>Отправить</button>
				</div>
			</form>
		</>
	);
}
