import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.scss';
import Banner from '../../components/Banner/Banner';

import implant from '../../assets/images/anyridge.png';

function Homepage() {
	return (
		<div>
			<Banner />
			<div className="content">
				<div className="card">
					<h2 className="card__title">Лечение зубов</h2>
					<p className="card__text">
						Профессиональное лечение зубов высококвалифицированными врачами с гарантией
						качества.
					</p>
					<button className="card__btn btn-hover">Записаться к врачу</button>
				</div>

				<div className="card">
					<h2 className="card__title">Протезирование</h2>
					<p className="card__text">
						Съемное и несъемное протезирование с использованием современных технологий и
						материалов
					</p>
					<button className="card__btn btn-hover">Выбрать тип протеза</button>
				</div>

				<div className="card">
					<h2 className="card__title">Имплантация</h2>
					<p className="card__text">
						Дентальные импланты (а также AnyRidge) проверенные временем и
						рекомендованные профессионалами
					</p>
					<img src={implant} alt="" className="card__img" />
					<button className="card__btn btn-hover">Смотреть прайс</button>
				</div>
			</div>

			<div className="all-services-btn">
				<Link to="">
					<button className="btn-hover">Все услуги</button>
				</Link>
			</div>

			<h1 className="title">Почему мы?</h1>

			<div className="qa-block">
				<div className="qa-item">
					<h2 className="qa-title">Профессиональная техника и оборудование</h2>
                    <div className="qa-close">
                        <div className="qa-close-hor"></div>
                        <div className="qa-close-vert"></div>
                    </div>
				</div>
			</div>
		</div>
	);
}
export default Homepage;
