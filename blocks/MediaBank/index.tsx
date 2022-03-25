import styles from './MediaBank.module.scss';

import { serverImg } from '../../assets';
import Image from 'next/image';
import { Modal } from '../../components';
import { useState } from 'react';

const MediaBank = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const changeVisible = () => setModalVisible(!modalVisible);
    return (
        <>
            <div className={styles.MediaBankBlock}>
                <h2>Фото и видео</h2>

                <div className={styles.MediaBankBlockItem}>
                    <Image
                        onClick={changeVisible}
                        src={serverImg}
                        alt="server image"
                    />
                    <p>Как выглядит сервер в дата-центре</p>
                </div>
            </div>
            <Modal onClose={changeVisible} customVisible={modalVisible}>
                <Image
                    width="1200"
                    height="800"
                    src={serverImg}
                    alt="server image"
                />
            </Modal>
        </>
    );
};

export default MediaBank;
