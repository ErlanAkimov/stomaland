import React from 'react';
import styles from './modal.module.scss';
import axios from 'axios';
import close_icon from '../../assets/images/close.png'
// import 

function Modal({closeModal}) {
    const [formdata, setFormData] = React.useState({
        name: '',
        phone: '',
        message: '',
    })
	return (
		<div className={styles.main}>
			<div className={styles.overlay} onClick={closeModal}></div>
            <div className={styles.modal_wrapper}>
                <div className={styles.close_icon} onClick={closeModal}>
                    <img src={close_icon} alt="" />
                </div>
                <h2 className={styles.title}>
                    Оставьте заявку, мы вам перезвоним
                </h2>
                <form onSubmit={FormSender}>
                    <div className={styles.input_block}>
                        <input type='text' value={formdata.name} onChange={handleInputChange} name='name' placeholder='Введите ваше имя' required/>
                    </div>
                    <div className={styles.input_block}>
                        <input type='tel' value={formdata.phone} onChange={handleInputChange} name='phone' placeholder='Номер телефона' required />
                    </div>
                    <div className={styles.input_block}>
                        <textarea type='text' value={formdata.message} onChange={handleInputChange} name='message' placeholder='Задайте вопрос либо оставьте поле пустым'/>
                    </div>

                    <button className={styles.btn} type='submit'>Отправить</button>
                    <p className={styles.policy}>Нажимая "Отправить" вы соглашаетесь с политикой конфиденциальности </p>
                </form>
            </div>
		</div>
	);


    function FormSender(e) {
        e.preventDefault();

        const data = new FormData();
        data.append('name', formdata.name)
        data.append('phone', formdata.phone)
        data.append('message', formdata.message)


        axios
        .post('https://stomaland.ru/backend/forms/formsender.php', data)
        .then(response => {
            console.log(response)
        })
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
}

export default Modal;
