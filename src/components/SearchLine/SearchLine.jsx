import search_icon from '../../assets/images/search-icon.png';
import './SearchLine.scss';

function SearchLine() {
	return (
		<div className="wrapper">
			<div className="input-block">
                <img src={search_icon} alt="" />
				<input placeholder="Поиск по сайту..." />
			</div>
		</div>
	);
}

export default SearchLine;
