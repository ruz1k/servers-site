import { useState } from 'react';
import Image from 'next/image';

import { serverImg, terminal, dataCenter } from '../../public';
import styles from './MediaBank.module.scss';

import { Modal } from '../../components';

const MediaBank = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [src, setSrc] = useState({});
    const changeVisible = (src?: StaticImageData) => {
        if (src) {
            setSrc(src);
        }
        setModalVisible(!modalVisible);
    };

    return (
        <div className={styles.MediaBankBlock}>
            <h2>Фото и видео</h2>
            <div className={styles.MediaBankBlockWrapper}>
                <div className={styles.MediaBankBlockItem}>
                    <Image
                        onClick={() => changeVisible(serverImg)}
                        src={serverImg}
                        width={serverImg.width}
                        alt="server image"
                    />
                    <p>Сервер в дата-центре.</p>
                </div>
                <div className={styles.MediaBankBlockItem}>
                    <Image
                        onClick={() => changeVisible(dataCenter)}
                        src={dataCenter}
                        alt="data center image"
                    />
                    <p>Серверная</p>
                </div>
                <div className={styles.MediaBankBlockItem}>
                    <Image
                        onClick={() => changeVisible(terminal)}
                        src={terminal}
                        alt="terminal image"
                    />
                    <p>Окно терминального сервера.</p>
                </div>
            </div>
            <Modal
                customClassName={styles.MediaBankModal}
                onClose={changeVisible}
                customVisible={modalVisible}
            >
                <Image
                    width="1200"
                    height="800"
                    src={src as string}
                    alt="server image"
                />
            </Modal>
        </div>
    );
};

export default MediaBank;
