import { memo } from 'react';

import { redirectToSocial } from '../../utility/redirectFunc';

import {
    TelegramIcon,
    WhatsappIcon,
    PhoneIcon,
    MailIcon,
} from '../../assets/icons';

import cn from 'classnames';

import styles from './SocialMedia.module.scss';

type SocialMedia = {
    customClassNames?: string;
};

const SocialMedia = ({ customClassNames }: SocialMedia) => (
    <div className={cn([styles.ContactBlockSocial], [customClassNames])}>
        <div className={styles.ContactBlockSocialItem}>
            <button
                onClick={() => redirectToSocial('https://tglink.ru/nskcloud')}
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
            <button onClick={() => redirectToSocial('tel: +73833752980')}>
                <PhoneIcon />
            </button>
        </div>

        <div className={styles.ContactBlockSocialItem}>
            <button
                onClick={() => redirectToSocial('mailto: info@nskcloud.ru')}
            >
                <MailIcon />
            </button>
        </div>
    </div>
);

export default memo(SocialMedia);
