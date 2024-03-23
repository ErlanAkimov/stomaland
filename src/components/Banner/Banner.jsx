import styles from './Banner.module.scss';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Implant } from './implant/implant';
import { Caries } from './Caries/caries';
import { Brackets } from './Brackets/Brackets';

function Banner() {
	return (
		<div className={styles.wrapper}>
			<Swiper
				spaceBetween={0}
				slidesPerView={1}
				speed={500}
				autoplay={{
					delay: 2500,
					disableOnInteraction: true,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				<SwiperSlide>
					<Implant />
				</SwiperSlide>

				<SwiperSlide>
					<Caries />
				</SwiperSlide>

				<SwiperSlide>
					<Brackets />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
export default Banner;
