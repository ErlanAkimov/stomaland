import './Banner.scss';
import img from '../../assets/images/banner image.png';

function Banner() {
	return (
		<div className="banner">
			<div className='banner__wrapper'>
				<img src={img} alt="" />
				<div className="banner__text">
					<h1 className="banner__title">Стоматология</h1>
					<h2 className="banner__title2">премиум качества</h2>
					<h2 className="banner__title3">рядом с домом</h2>
				</div>
			</div>
		</div>
	);
}
export default Banner;
