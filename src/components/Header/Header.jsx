import './Header.scss';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div
			style={{
				backgroundColor: '#fff',
				position: 'fixed',
				top: '0',
				zIndex: '100',
				width: '100%',
				borderBottom: '1px solid rgba(238, 238, 238,.5)',
			}}
		>
			<header className="header">
				<div className="l-side">
					<Link to="/">
						<div className="logo">
							<div className="logo-text">
								<h1 className="stomaland">
									STOMA<span>LAND</span>
								</h1>
								<p>стоматология</p>
							</div>

							<img src={logo} alt="" />
						</div>
					</Link>
					<ul className="nav">
						<Link to="/doctors">
							<li>Врачи</li>
						</Link>
						<Link to="/uslugi">
							<li>Услуги</li>
						</Link>
						<Link to="/price">
							<li>Цены</li>
						</Link>
						<Link to="/reviews">
							<li>Отзывы</li>
						</Link>
						<Link to="/job">
							<li>Вакансии</li>
						</Link>
						<Link to="/contacts">
							<li>Контакты</li>
						</Link>
					</ul>
				</div>
				<div className="contacts">
					<div className="numbers">
						<a href="tel:+7 (383) 238-33-38 ">+7 (383) 238-33-38</a>
						<a href="tel:+7 (923) 199-39-89 ">+7 (923) 199-39-89</a>
					</div>
					<div className="work-time">
						<div>
							<h5>Пн - Пт: </h5>
							<h5>Сб: </h5>
							<h5>Вс: </h5>
						</div>

						<div>
							<h5>8:00 - 21:00</h5>
							<h5>9:00 - 15:00</h5>
							<h5 style={{ color: 'red' }}>Выходной</h5>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header;
