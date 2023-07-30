import { Link } from 'react-router-dom';

function ServicesCards({ props }) {
	return (
		<div className='content'>
			{props.map((item) => {
				return (
					<div key={item.id} className="card">
						<h2 className="card__title">{item.title}</h2>
						<p className="card__text">
                            {item.text}
						</p>
						<Link to={item.btn_link}><button className="card__btn btn-hover">{item.btn_text}</button></Link>
                        <img src={item.img} alt="" className="card__img" />
					</div>
				);
			})}
		</div>
	);
}

export default ServicesCards;
