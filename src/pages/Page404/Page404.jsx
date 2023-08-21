import styles from './404.module.scss'
import not_found from '../../assets/images/not_found.png'
import {Link} from 'react-router-dom';

function Page404() {
    return(
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                <img src={not_found} alt="" />
                <h1 className={styles.title}>Страница не найдена</h1>
                <p className={styles.text}>Мы не смогли найти такую страницу. Попробуйте вернуться на главную</p>
                <Link to="/">
                    <button className={styles.btn}>Вернуться на главную</button>
                </Link>
            </div>
        </div>
    )
}

export default Page404;