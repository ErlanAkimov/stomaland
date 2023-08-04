import img1 from '../assets/images/anyridge.png';

// doctors avatars

//circle images
import doctor_1_img_circle from '../assets/images/doctor-1-circle-avatar.png';
import doctor_2_img_circle from '../assets/images/doctor-2-circle-avatar.png';

// full images
import doctor_1_img_full from '../assets/images/belik_vladimir.jpg';
import doctor_2_img_full from '../assets/images/doctor-2.jpg';

// education icons
import university_icon from '../assets/images/university-icon.png';
import hospital_icon from '../assets/images/hospital-icon.png';

export const servicesCards = [
	{
		id: '1',
		title: 'Лечение зубов',
		text: 'Профессиональное лечение зубов высококвалифицированными врачами с гарантией качества.',
		btn_text: 'Записаться к врачу',
		btn_link: '',
		img: '',
	},
	{
		id: '2',
		title: 'Протезирование',
		text: 'Съемное и несъемное протезирование с использованием современных технологий и материалов',
		btn_text: 'Выбрать тип протеза',
		btn_link: '',
		img: '',
	},
	{
		id: '3',
		title: 'Имплантация',
		text: 'Дентальные импланты (а также AnyRidge) проверенные временем и рекомендованные профессионалами',
		btn_text: 'Смотреть прайс',
		btn_link: '',
		img: img1,
	},
];

export const benefits = [
	{
		id: '1',
		title: 'Современное оборудование',
		text: 'Специалисты нашего центра применяют сертифицированные материалы и одноразовые дентальные инструменты, доказавшие свою эффективность и безопасность при клинических исследованиях.',
	},
	{
		id: '2',
		title: 'Квалифицированные специалисты ',
		text: 'Специалисты нашего центра применяют сертифицированные материалы и одноразовые дентальные инструменты, доказавшие свою эффективность и безопасность при клинических исследованиях.',
	},
	{
		id: '3',
		title: 'Современное оборудование',
		text: 'Специалисты нашего центра применяют сертифицированные материалы и одноразовые дентальные инструменты, доказавшие свою эффективность и безопасность при клинических исследованиях.',
	},
	{
		id: '4',
		title: 'Современное оборудование',
		text: 'Специалисты нашего центра применяют сертифицированные материалы и одноразовые дентальные инструменты, доказавшие свою эффективность и безопасность при клинических исследованиях.',
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
        position: 'Директор ООО "Медина-НСК"'
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
		schedule_remark: '* только по записи',
	},
];
