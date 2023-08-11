export const data = {
	dental_treatment: [
		{
			title: 'Лечение кариеса',
			description: 'Вылечим кариес на изи ваще',
		},
		{
			title: 'Восстановление зуба пломбой',
			description: 'Вылечим кариес на изи ваще',
		},
		{
			title: 'Профилактика',
			description: 'Вылечим кариес на изи ваще',
		},
	],
	orthodontics: [
		{
			title: 'Металлические бреккеты',
			description: '',
		},
		{
			title: 'Керамические брекеты',
			description: '',
		},
		{
			title: 'Лингвальные брекеты',
			description: '',
		},
	],
	prosthetics: [
		{
			title: 'Съемные протезы',
			description: '',
		},
		{
			title: 'Несъемные протезы',
			description: '',
		},
		{
			title: 'Протезирование на имплантах',
			description: '',
		},
	],
	surgery: [
		{
			title: 'Хирургические услуги',
			description: '',
		},
	],
	implanting: [{ title: 'Имплантация' }],
	others: [{ title: 'Прочие ортопедические услуги' }],
};
export const titles = [
	'Все услуги',
	'Лечение зубов',
	'Ортодонтия',
	'Протезирование',
	'Имплантация',
	'Хирургия',
	'Прочие услуги',
]
export const all = [...data.dental_treatment, ...data.orthodontics, ...data.prosthetics, ...data.surgery, ...data.implanting, ...data.others]