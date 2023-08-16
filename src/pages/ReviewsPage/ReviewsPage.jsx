import styles from './reviews.module.scss';
import flamp from '../../assets/images/logo-flamp.png';
import google from '../../assets/images/google.png';
import twogis from '../../assets/images/2gis.png';

function ReviewsPage() {
	const five = ['', '', '', '', ''];
	const four = ['', '', '', ''];

	return (
		<div className={styles.wrapper}>
			<div className={styles.yandex_outer_wrapper}>
				<h1 className={styles.title}>Отзывы на Яндекс</h1>
				<div className={styles.yandex_wrapper}>
					<iframe src="https://yandex.ru/maps-reviews-widget/26450148706?comments"></iframe>
				</div>
			</div>

			<div className={styles.anyrate_block}>
				<div className={styles.rating_item}>
					<div>
						<img src={flamp} alt="" />
					</div>
					<div>
						<div className={styles.stars}>
							{five.map((e, index) => {
								return (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 12 12"
										width="30"
										height="30"
										key={index}
									>
										<path
											fill="#fc0"
											fillRule="evenodd"
											d="M5.987 9.42l-3.26 1.991a.48.48 0 0 1-.715-.526l.945-3.764L.216 4.988A.48.48 0 0 1 .47 4.13l3.586-.295L5.552.348a.48.48 0 0 1 .883.001l1.483 3.486 3.61.296a.48.48 0 0 1 .255.857L9.031 7.121l.943 3.766a.48.48 0 0 1-.715.527L5.987 9.419z"
										/>
									</svg>
								);
							})}
						</div>
						<a
							target="_blank"
							style={{ color: 'blue' }}
							href="https://novosibirsk.flamp.ru/firm/stomaland_stomatologicheskijj_centr-70000001046838589"
						>
							Перейти на Flamp
						</a>
					</div>
				</div>

				<div className={styles.rating_item}>
					<img src={google} alt="" />
					<div>
						<div className={styles.stars}>
							{five.map((e, index) => {
								return (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 12 12"
										width="30"
										height="30"
										key={index}
									>
										<path
											fill="#fc0"
											fillRule="evenodd"
											d="M5.987 9.42l-3.26 1.991a.48.48 0 0 1-.715-.526l.945-3.764L.216 4.988A.48.48 0 0 1 .47 4.13l3.586-.295L5.552.348a.48.48 0 0 1 .883.001l1.483 3.486 3.61.296a.48.48 0 0 1 .255.857L9.031 7.121l.943 3.766a.48.48 0 0 1-.715.527L5.987 9.419z"
										/>
									</svg>
								);
							})}
						</div>
						<a
							target="_blank"
							style={{ color: 'blue' }}
							href="https://www.google.com/maps/place/Stomaland/@54.9470769,82.8831294,12.75z/data=!4m12!1m2!2m1!1sstomaland!3m8!1s0x42dfe75ece69d9bd:0x4579e27d54758d2a!8m2!3d54.959079!4d82.964607!9m1!1b1!15sCglzdG9tYWxhbmSSAQ1kZW50YWxfY2xpbmlj4AEA!16s%2Fg%2F11scp8pnr_?entry=ttu"
						>
							Перейти в google maps
						</a>
					</div>
				</div>

				<div className={styles.rating_item}>
					<img src={twogis} alt="" />
					<div>
						<div className={styles.stars}>
							{four.map((e, index) => {
								return (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 12 12"
										width="30"
										height="30"
										key={index}
									>
										<path
											fill="#fc0"
											fillRule="evenodd"
											d="M5.987 9.42l-3.26 1.991a.48.48 0 0 1-.715-.526l.945-3.764L.216 4.988A.48.48 0 0 1 .47 4.13l3.586-.295L5.552.348a.48.48 0 0 1 .883.001l1.483 3.486 3.61.296a.48.48 0 0 1 .255.857L9.031 7.121l.943 3.766a.48.48 0 0 1-.715.527L5.987 9.419z"
										/>
									</svg>
								);
							})}

							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 12 12"
								width="30"
								height="30"
							>
								<path
									fill="#FC0"
									fill-rule="evenodd"
									d="M6 .057a.479.479 0 0 0 -.435.292l-1.483 3.486 -3.61.296a.48.48 0 0 0 -.255.857L3.031 7.121l-.943 3.766a.48.48 0 0 0.715.527L6 9.427V.057z"
								/>
								<path
									fill="#ededed"
									fill-rule="evenodd"
									d="M6 .057a.479.479 0 0 1 .435.292l1.483 3.486 3.61.296a.48.48 0 0 1 -.255.857L9.031 7.121l.943 3.766a.48.48 0 0 1-.715.527L6 9.427V.057z"
								/>
							</svg>
						</div>
						<a
							target="_blank"
							style={{ color: 'blue' }}
							href="https://2gis.ru/novosibirsk/search/stomaland%20%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA/firm/70000001046838589/82.964607%2C54.959079/tab/reviews?m=82.96465%2C54.959066%2F17.67"
						>
							Перейти на 2gis
						</a>
					</div>
				</div>

				<p className={styles.promise}>
					Скоро вы сможете оставлять отзывы здесь, на сайте stomaland.ru!{' '}
				</p>
			</div>
		</div>
	);
}

export default ReviewsPage;
