import { memo, useEffect, useState, useRef, useCallback } from 'react';
import { CloseIcon } from '../../assets/icons';

import cn from 'classnames';

import styles from './Modal.module.scss';

type Modal = {
    triggerButton?: string;
    customVisible?: boolean;
    onClose?: (src?: StaticImageData) => void;
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
    const ref = useRef<HTMLDivElement>(null);

    const closeModal = useCallback(() => {
        if (onClose) {
            onClose();
        }
        setVisible(false);
    }, [onClose]);

    const openModal = () => {
        setVisible(true);
    };

    useEffect(() => {
        if (customVisible) {
            setVisible(customVisible);
        }
    }, [customVisible]);

    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            if (!!ref.current && !ref.current.contains(e.target)) {
                closeModal();
            }
        };

        document.addEventListener('mousedown', checkIfClickedOutside);

        return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside);
        };
    }, [closeModal]);

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
                        ref={ref}
                        className={cn([styles.ModalBody], [customClassName])}
                        {...props}
                    />
                </div>
            )}
        </>
    );
};

export default memo(Modal);
