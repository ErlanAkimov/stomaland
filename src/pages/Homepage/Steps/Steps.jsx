import styles from './steps.module.scss';
import React from 'react';
import axios from 'axios';

//import images for steps
import icon1 from '../../../assets/images/icons/toothBrushIcon.png';
import icon2 from '../../../assets/images/icons/appleIcon.png';
import icon3 from '../../../assets/images/icons/chairIcon.png';
import icon4 from '../../../assets/images/icons/alcoholIcon.png';
import icon5 from '../../../assets/images/icons/plusIcon.png';
import confirmed_icon from '../../../assets/images/confirmed.png';

function Steps() {
	const steps_data = [
		{
			title: '1. Регулярная гигиеническая забота',
			text: 'Чистку зубов необходимо производить утром и вечером. После завтрака и перед сном. Используйте раствор для полоскания рта. Не забывайте очищать междузубное пространство нитью или специальной щеткой.',
			image: icon1,
		},
		{
			title: '2. Здоровое питание',
			text: 'Сократите потребление сахара и сладких продуктов. Они способствуюь развитию кариеса. Старайтесь увеличить потребление фруктов, овощей и продуктов, богатых кальцием.',
			image: icon2,
		},
		{
			title: '3. Регулярное посещение стоматолога',
			text: 'Стоматологическую клинику необходимо посещать не менее чем два раза в год для профессионального осмотра и чистки зубов. Только специалист сможет диагностировать проблемы на раннем этапе и даст рекомендации по профилактике и уходу',
			image: icon3,
		},
		{
			title: '4. Избегайте вредных привычек',
			text: 'Постарайтесь полностью избавиться или сократить воздействие вредных привычек на состояние полости рта. Например: курение и употрбление табака вызывает проблемы с зубами и деснами. Употребление алкоголя снижает поток слюны, что приводит к риску образования кариеса.',
			image: icon4,
		},
		{
			title: '5. Забота о здоровье полости рта',
			text: 'Избегайте слишком острой и кислой пищи, она может повредить эмаль зубов. Старайтесь использовать защитные мундштуки во время занятий спортом, для предупреждения травм зубов и десен. При обнаружении проблем не занимайтесь самолечением. Обратитесь к стоматологу для лечения и получения рекомендаций по уходу за полостью рта.',
			image: icon5,
		},
	];

	const [nameValue, setNameValue] = React.useState();
	const [phoneValue, setPhoneValue] = React.useState();

	const [opacity, setOpacity] = React.useState('0');
	const [visibility, setVisibility] = React.useState('hidden');


	function handleValueChanger(e) {
		console.log(e.target.type)
		if (e.target.type === 'text') {
			setNameValue(e.target.value);
		}
		if (e.target.type === 'tel') {
			setPhoneValue(e.target.value);
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapper_inner}>
				<div className={styles.left_side}>
					<h1 className={styles.title}>Как соблюдать гигиену полости рта?</h1>
					<div className={styles.text}>
						<p>
							Здоровье полости рта имеет огромное значение для общего физического
							благополучия. Уход за зубами и деснами - это не просто косметический
							вопрос, это важный аспект общего здоровья. Мы представляем вам 5
							ключевых правил, которые помогут сохранить зубы крепкими и здоровыми на
							долгие годы.
						</p>

						<p>
							Следуя этим пяти основным правилам, вы обеспечите долгосрочное здоровье
							вашей полости рта и снизите риск развития заболеваний зубов и десен. Не
							забывайте регулярно посещать стоматолога для поддержания оптимального
							уровня заботы о вашей улыбке и здоровье.
						</p>
					</div>
				</div>

				<div className={styles.right_side}>
					{steps_data.map((item, index) => {
						return (
							<div className={styles.step} key={index}>
								<div className={styles.icon_box}>
                                    <img src={item.image} alt="" />
                                </div>

								<div className={styles.text_side}>
									<h3 className={styles.step_title}>{item.title}</h3>
									<p className={styles.text}>{item.text}</p>
								</div>
							</div>
						);
					})}
				</div>

				<form className={styles.main_form} onSubmit={FormSender}>

					<div className={styles.good_message} style = {{
						opacity: opacity,
						visibility: visibility,
					}}>
						<img src={confirmed_icon} alt="" />
						Приняли вашу заявку, скоро с вами свяжемся для уточнения деталей...
					</div>
					<h2 className={styles.title2}>Запишитесь на <span>бесплатный</span> осмотр</h2>
					<input name='name' value={nameValue} onChange={handleValueChanger} type="text" placeholder="Ваше имя" required />
					<input name='phone' value={phoneValue} onChange={handleValueChanger} type="tel" placeholder="Номер телефона" required />

					<button className={styles.btn} onCLick={FormSender}>Отправить заявку</button>
				</form>
			</div>
		</div>
	);

	function FormSender(e) {
		e.preventDefault();

		const data = new FormData();
		data.append('name', nameValue);
		data.append('phone', phoneValue);
		
		axios
            .post('https://stomaland.ru/backend/forms/formsender.php', data)
            .then((response) => {
				if (response.data === 'Сообщение доставлено') {
					setNameValue('');
					setPhoneValue('');
					setOpacity('1');
					setVisibility('initial');

					setTimeout(() => {
						setOpacity('0');
						setVisibility('hidden');
					}, 2400)

					console.log(response.data)
				}
		    });
	}
}

export default Steps;
