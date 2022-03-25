import {
    CPUIcon,
    RAMIcon,
    SSDIcon,
    PeopleIcon,
    RoubleIcon,
} from '../../assets/icons';
import styles from './ServerList.module.scss';

import { data } from './kit';
import ContactModal from '../../components/modal/ContactModal';

const ServerList = () => (
    <div className={styles.ServerListBlock}>
        <h2>Список серверов</h2>
        <p>
            На базе лицензионной Windows Server 2012\2016, подходит для
            совместной работы в 1С, CRM , с общими документами и других
            программ. Сервера производства HP и Supermicro, c твердотельными
            серверными дисками intel. Защищены межсетевыми экранами, антивирусом
            Касперского. Находятся в дата-центре Ростелекома.
        </p>
        <div className={styles.ServerListBlockWrapper}>
            {data?.map((item) => (
                <div key={item.id} className={styles.ServerListBlockItem}>
                    <div className={styles.ServerListBlockItemCPU}>
                        <label>
                            <CPUIcon width={24} height={24} />
                            vCPU:
                        </label>
                        <span>{item.vCPU}</span>
                    </div>

                    <div className={styles.ServerListBlockItemRAM}>
                        <label>
                            <RAMIcon width={24} height={24} />
                            RAM:
                        </label>
                        <span>{item.RAM}</span>
                    </div>

                    <div className={styles.ServerListBlockItemSSD}>
                        <label>
                            <SSDIcon width={24} height={24} />
                            SSD:
                        </label>
                        <span>{item.RAM}</span>
                    </div>

                    <div className={styles.ServerListBlockItemPeopleUsing}>
                        <label>
                            <PeopleIcon width={20} height={20} />
                            Кол-во пользователей:
                        </label>
                        <span>~ {item.people_using}</span>
                    </div>

                    <div className={styles.ServerListBlockItemPrice}>
                        <label>
                            <RoubleIcon width={20} height={20} />
                            Стоимость:
                        </label>
                        <span>{item.price} ₽/мес.</span>
                    </div>
                    <ContactModal text="Подробнее" />
                </div>
            ))}
        </div>
    </div>
);

export default ServerList;
