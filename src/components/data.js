import img1 from '../assets/images/anyridge.png';

// doctors avatars

//circle images
import doctor_1_img_circle from '../assets/images/doctor-1-circle-avatar.png';
import doctor_2_img_circle from '../assets/images/doctor-2-circle-avatar.png';
import doc3_circle from '../assets/images/doc3-circle.png'

// full images
import doctor_1_img_full from '../assets/images/belik_vladimir.jpg';
import doctor_2_img_full from '../assets/images/doctor-2.jpg';
import doc3 from '../assets/images/doc3.jpg'

export const servicesCards = [
	{
		id: '1',
		title: 'Лечение зубов',
		text: 'Профессиональное лечение зубов квалифицированными врачами с гарантией качества.',
		btn_text: 'Записаться к врачу',
		btn_link: '/doctors',
		img: '',
	},
	{
		id: '2',
		title: 'Протезирование',
		text: 'Съемное и несъемное протезирование с использованием современных технологий и материалов',
		btn_text: 'Выбрать протез',
		btn_link: '/uslugi',
		img: '',
	},
	{
		id: '3',
		title: 'Имплантация',
		text: 'Дентальные импланты (а также AnyRidge) проверенные временем и рекомендованные профессионалами',
		btn_text: 'Смотреть прайс',
		btn_link: '/price',
		img: '',
	},
];

export const benefits = [
	{
		id: '1',
		title: 'Современное оборудование',
		text: 'Топовое железо и оборудование в нашей клинике',
	},
	{
		id: '2',
		title: 'Квалифицированные специалисты ',
		text: 'у нас работают только мастера 80 уровня',
	},
	{
		id: '3',
		title: 'Хорошее отношение',
		text: 'Отношение просто замечательное и даже самое лучшее на светеОтношение просто замечательное и даже самое лучшее на светеОтношение просто замечательное и даже самое лучшее на светеОтношение просто замечательное и даже самое лучшее на светеОтношение просто замечательное и даже самое лучшее на светеОтношение просто замечательное и даже самое лучшее на светеОтношение просто замечательное и даже самое лучшее на светеОтношение просто замечательное и даже самое лучшее на светеОтношение просто замечательное и даже самое лучшее на светеОтношение просто замечательное и даже самое лучшее на светеОтношение просто замечательное и даже самое лучшее на свете',
	},
	{
		id: '4',
		title: 'Любовь и забота',
		text: 'Мы любим и заботимся о наших клиентах',
	},
];

export const stuff = [
	{
		id: '1',
		name: 'Белик Владимир Викторович',
		path: 'belik-vladimir-viktorovich',
		img_circle: doctor_1_img_circle,
		img_full: doctor_1_img_full,
		department: 'Хирургическая стоматология',
		specialization: 'Врач стоматолог-ортопед-хирург-имплантолог',
		experience: '7 лет',
		schedule_days: ['Пн, Ср:', 'Вт, Чт, Пт:', 'Сб'],
		schedule_time: ['с 12-00 до 21-00', 'с 8-00 до 17-00', 'с 9-00 до 15-00'],
		schedule_remark: '* в нечетные дни',
		education_years: ['2016', '2018', '2019'],
		education: [
			'Новосибирский Государственный Медицинский Университет, "Стоматология". Присвоена квалификация "Врач-стоматолог общей практики.',
			'Ординатура по программе "Стоматология ортопедическая". Присвоена квалификация "Врач-стоматолог-ортопед"',
			'Профессиональная переподготовка "Организация здравоохранения и общественное здоровье"',
		],
		position: 'Директор ООО "Медина-НСК"',
		courses: [
			'2017 г. «Постэндодонтическая реставрация зубов»',
			'2017 г. «Общий взгляд на современную эндодонтию»',
			'2017 г. «Конусно-Лучевая Компьютерная Томография и Рентген-диагностика в терапевтической стоматологии»',
			'2017 г. «Авторский курс доктора Гетте С.А. по методам изготовления полных съемных протезов»',
			'2018 г. Фронтальная реставрация «Особенности клинических подходов в японской консервативной стоматологии: препарирование, адгезия, восстановление»',
			'2018 г. «Современные аспекты минимально инвазивного протезирования»',
			'2018 г. «Применение аутологичной плазмы в практике врача-стоматолога»',
			'2019 г. «Применение методики инфильтрации для лечения и профилактики кариеса зубов с использованием препарата Icon. Constic – самоадгезивный самопротравливающийся текучий композит. Современный взгляд на вопросы адгезии»',
			'2020 г. «Разоблачение полного съемного протезирования. Рабочие секреты и лайфхаки при изготовлении полных съемных пластиночных протезов»',
			'2020 г. «Дезинфекция и стерилизация в медицинских организациях стоматологического профиля»',
			'2021 г. «Простая сложная имплантация»',
			'2021 г. «Протезирование на имплантах»',
			'2022 г. «Устранение рецессии десны»',
			'2022 г. «Всё о высокодейственной системе минивинтов BIO-RAY»',
			'2022 г. «Стоматологическая реабилитация с помощью ангулированных имплантатов. Физиологическое и анатомическое обоснование»',
			'2022 г. «Эволюция практических подходов»',
		],
	},
	{
		id: '2',
		name: 'Шакурина Светлана Владимировна',
		path: 'shakurina-svetlana-vladimirovna',
		img_circle: doctor_2_img_circle,
		img_full: doctor_2_img_full,
		department: 'Терапевтическая стоматология',
		specialization: 'Врач-стоматолог-терапевт',
		experience: 'Более 17 лет',
		schedule_days: ['Пн - Пт', 'Сб'],
		schedule_time: ['с 9-00 до 18-00', 'с 10-00 до 15-00'],
		schedule_remark: '*по записи',
		education_years: ['2002', '2003', '2009'],
		education: [
			'Алтайский государственный медицинский университет. Стоматология: базовое образование',
			'Алтайский государственный медицинский университет. Стоматология: интернатура',
			'Кемеровская государственная медицинская академия — терапевтическая стоматология: циклы переподготовки',
		],
		position: 'Стоматолог-терапевт',
		courses: null,
	},

	{
		id: '3',
		name: 'Скрипкин Владимир Владимирович',
		path: 'skripkin-vladimir-vladimirovich',
		img_circle: doc3_circle,
		img_full: doc3,
		department: 'Терапевтическая стоматология, ортодонтия',
		specialization: 'Врач-стоматолог-терапевт-ортодонт',
		experience: 'Более 17 лет',
		schedule_days: ['Пн - Пт', 'Сб'],
		schedule_time: ['с 9-00 до 18-00', 'с 10-00 до 15-00'],
		schedule_remark: '*по записи',
		education_years: ['2002', '2003', '2009'],
		education: [
			'Алтайский государственный медицинский университет. Стоматология: базовое образование',
			'Алтайский государственный медицинский университет. Стоматология: интернатура',
			'Кемеровская государственная медицинская академия — терапевтическая стоматология: циклы переподготовки',
		],
		position: 'Стоматолог-терапевт',
		courses: null,
	},
];