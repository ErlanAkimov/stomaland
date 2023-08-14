import styles from './modal.module.scss';
// import 

function Modal() {
	return (
		<div className={styles.main}>
			<div className={styles.overlay}></div>
            <div className={styles.modal_wrapper}>
                <h2 className={styles.title}>
                    Оставьте заявку, мы вам перезвоним
                </h2>
                <form>
                    <div className={styles.input_block}>
                        <input type='text' name='name' placeholder='Введите ваше имя' required/>
                    </div>
                    <div className={styles.input_block}>
                        <input type='tel' name='phone' placeholder='Номер телефона' required />
                    </div>
                    <div className={styles.input_block}>
                        <textarea type='text' name='message' placeholder='Задайте вопрос либо оставьте поле пустым'/>
                    </div>

                    <button className={styles.btn} type='submit'>Отправить</button>
                    <p className={styles.policy}>Нажимая "Отправить" вы соглашаетесь с политикой конфиденциальности </p>
                </form>
            </div>
		</div>
	);
}

export default Modal;
