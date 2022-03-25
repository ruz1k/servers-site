import { memo, useEffect, useState } from 'react';
import { CloseIcon } from '../../assets/icons';

import cn from 'classnames';

import styles from './Modal.module.scss';

type Modal = {
    triggerButton?: string;
    customVisible?: boolean;
    onClose?: () => void;
    customClassName?: string;
};

const Modal = ({
    customVisible,
    triggerButton,
    onClose,
    customClassName,
    ...props
}: React.PropsWithChildren<Modal>) => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (customVisible) {
            setVisible(customVisible);
        }
    }, [customVisible]);
    const closeModal = () => {
        if (onClose) {
            onClose();
        }
        setVisible(false);
    };
    const openModal = () => {
        setVisible(true);
    };

    console.log(props);

    return (
        <>
            {triggerButton && (
                <button
                    onClick={openModal}
                    className={styles.ModalTriggerButton}
                >
                    {triggerButton}
                </button>
            )}
            {visible && (
                <div className={styles.Modal}>
                    <button
                        className={styles.ModalCloseButton}
                        onClick={closeModal}
                    >
                        <CloseIcon />
                    </button>
                    <div
                        className={cn([styles.ModalBody], [customClassName])}
                        {...props}
                    />
                </div>
            )}
        </>
    );
};

export default memo(Modal);
