import styles from './MediaBank.module.scss';
import { Player } from 'video-react';

import { serverImg } from '../../assets';

const MediaBank = () => (
    <div className={styles.MediaBankBlock}>
        <Player
            playsInline
            poster={serverImg.src}
            src="../../serverVideo.mp4"
        />
        <ul>
            <li>
                Ежедневное резервное архивирование баз данных и документов на
                отдельный резервный сервер.
            </li>
            <li>Возможна ежедневная выгрузка на ваше хранилище.</li>
            <li>
                Первые 2 недели бесплатно, помощь в настройке, подключении,
                сопровождении.
            </li>
            <li>
                Защищены межсетевыми экранами, антивирусом Касперского.
                Находятся в дата-центре Ростелекома.
            </li>
            <li>
                Сервера производства HP и Supermicro, c твердотельными
                серверными дисками intel.
            </li>
            <li>Отказоустойчивость 99,99%. 12 лет безупречной работы.</li>
        </ul>
    </div>
);

export default MediaBank;
