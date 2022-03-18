import { redirectToSocial } from '../../utility/redirectFunc';
import styles from './Footer.module.scss';

const Footer = () => (
    <footer className={styles.Footer}>
        <p>
            Сайт разработан <button onClick={() => redirectToSocial('http://ruprogrammer.ru/lp-terra/')}>RuProgrammer</button>
        </p>
    </footer>
);

export default Footer;