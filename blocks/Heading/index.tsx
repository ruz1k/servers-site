import ContactModal from '../../components/modal/ContactModal';

import styles from './Heading.module.scss';

const Heading = () => (
    <div className={styles.HeadingBlock}>
        <div className={styles.HeadingBlockTextContent}>
            <h1>Аренда сервера для удаленной работы</h1>
            <p>
                В связи с эпидемиями ОРВИ и прочими угрозами есть готовое
                решение для организации удаленной работы.
            </p>
        </div>
        <div className={styles.HeadingBlockBenefitsBlock}>
            <ul>
                <li>
                    Ежедневное резервное архивирование баз данных и документов
                    на отдельный резервный сервер.
                </li>
                <li>
                    Первые 2 недели бесплатно, помощь в настройке, подключении,
                    сопровождении.
                </li>

                <li>Отказоустойчивость 99,99%. 12 лет безупречной работы.</li>
            </ul>
            <ContactModal text="Арендовать сервер" />
        </div>
        {/* <MediaBank /> */}
    </div>
);

export default Heading;
