import { redirectToSocial } from '../../utility/redirectFunc';

import styles from './Footer.module.scss';

import SocialMedia from '../../components/social-media';

const Footer = () => (
    <footer className={styles.Footer}>
        <p>
            Сайт разработан{' '}
            <button
                onClick={() =>
                    redirectToSocial('http://ruprogrammer.ru/lp-terra/')
                }
            >
                RuProgrammer
            </button>
        </p>
        <SocialMedia customClassNames={styles.FooterSocialMedia} />
    </footer>
);

export default Footer;
