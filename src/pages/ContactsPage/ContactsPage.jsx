import styles from './ContactsPage.module.scss';

function ContactsPage() {
	const contacts_list_time = [
		{ item_title: 'Понедельник — Пятница', item_text: 'с 8 : 00 до 21 : 00' },
		{ item_title: 'Суббота', item_text: 'с 9 : 00 до 15 : 00' },
		{ item_title: 'Воскресенье', item_text: 'Выходной' },
	];

	const contacts_list_phones = [
		{ item_title: 'Основной номер', item_text: '+7 (383) 238-33-38' },
		{ item_title: 'WhatsApp', item_text: '+7 (923) 199-39-89' },
	];

	return (
		<div className={styles.outer__wrapper}>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2290.7835714190846!2d82.9621212770943!3d54.95935675282365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dfe7c1810b6141%3A0xb8354123d042558e!2z0YPQuy4g0JPQtdGA0YbQtdC90LAsIDExINC60L7RgNC_0YPRgSAxLCDQndC-0LLQvtGB0LjQsdC40YDRgdC6LCDQndC-0LLQvtGB0LjQsdC40YDRgdC60LDRjyDQvtCx0LsuLCA2MzAwMzM!5e0!3m2!1sru!2sru!4v1692037240759!5m2!1sru!2sru"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Контактная информация</h1>
				<h3 className={styles.contact_title}>График работы:</h3>

				{contacts_list_time.map((item, index) => {
					return (
						<div className={styles.contact_item} key={index}>
							<p className={styles.item_title}>{item.item_title}</p>
							<p className={styles.item_text}>{item.item_text}</p>
						</div>
					);
				})}

				<h3 className={styles.contact_title}>Контакты:</h3>

				{contacts_list_phones.map((item, index) => {
					return (
						<div className={styles.contact_item} key={index}>
							<p className={styles.item_title}>{item.item_title}</p>
							<p className={styles.item_text}>{item.item_text}</p>
						</div>
					);
				})}

				<div className={styles.address}>
					<div className={styles.address_item}>
						<h3 className={styles.address_title}>Адрес:</h3>
						<p>г. Новосибирск, ул. Герцена 11/1</p>
					</div>
					<div className={styles.address_item}>
						<h3 className={styles.address_title}>E-mail:</h3>
						<p>stomaland@inbox.ru</p>
					</div>
				</div>

				<p className={styles.message}>
					Приём граждан руководителем медицинской организации осуществляется по вторникам с 15:00
					до 17:00 по предварительной записи.
				</p>
			</div>
		</div>
	);
}
export default ContactsPage;
