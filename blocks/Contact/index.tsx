import { redirectToSocial } from '../../utility/redirectFunc';

import { TelegramIcon, WhatsappIcon, PhoneIcon } from '../../assets/icons';

import styles from './Contact.module.scss';

const Contact = () => (
        <div className={styles.ContactBlock}>
            <h3>Контакты</h3>
            <div className={styles.ContactBlockSocial}>
                <div className={styles.ContactBlockSocialItem}>
                    <button
                        onClick={() =>
                            redirectToSocial('https://tglink.ru/nskcloud')
                        }
                    >
                        <TelegramIcon />
                    </button>
                </div>
                <div className={styles.ContactBlockSocialItem}>
                    <button
                        onClick={() =>
                            redirectToSocial(
                                'https://api.whatsapp.com/send/?phone=79231141114.',
                            )
                        }
                    >
                        <WhatsappIcon />
                    </button>
                </div>

                <div className={styles.ContactBlockSocialItem}>
                    <button
                        onClick={() => redirectToSocial('tel: +7(383)3752980')}
                    >
                        <PhoneIcon />
                    </button>
                </div>
            </div>
        </div>
)

export default Contact;
