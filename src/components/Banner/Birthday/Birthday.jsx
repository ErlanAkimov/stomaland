import React from 'react';
import image1440 from '../../../assets/images/banner-gift.png';
import image365 from '../../../assets/images/gift-2.png'
import styles from './Birthday.module.scss';

function Birthday() {
    const [image, setImage] = React.useState(image1440);

    React.useEffect(() => {
        if (window.innerWidth < 576) {
            setImage(image365);
        }
    }, [])

    return(
        <div className={styles.wrapper}>
            {/* <div className={styles.overlay}></div> */}
            <img className={styles.main_image} src={image} alt="" />
            <h1 className={styles.main_title}>Именинникам - скидки на лечение</h1>
            <p className={styles.text}>
                Чтобы еще больше украсить Ваш личный праздник, мы решили сделать акцию в честь Дня Рождения!
                В течение <b>7 дней до и после</b> дня рождения. 
            </p>
        </div>
    )
}

export default Birthday;