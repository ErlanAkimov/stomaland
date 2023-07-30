import React from "react";
import './WhyWe.scss';

function WhyWe({props}) {
    const [isHided, setIsHided] = React.useState({});
    const toggleHeight = (itemId) => {
        setIsHided((prevValue) => ({
            ...prevValue,
            [itemId]: !prevValue[itemId],
        }));
    };


	return (
		<div>
			<h1 className="title">Почему мы?</h1>

			<div className="qa-block ">
				{props.map((item) => {
					return (
						<div
							key={item.id}
							className={`qa-item ${isHided[item.id] ? 'hided' : ''}`}
							onClick={() => {
								toggleHeight(item.id);
							}}
						>
							<div className="qa-open-side">
								<h2 className="qa-title">{item.title}</h2>
								<div className="qa-close">
									<div className="qa-close-hor"></div>
									<div className="qa-close-vert"></div>
								</div>
							</div>

							<div className="qa-close-side">
								<p>{item.text}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default WhyWe;
