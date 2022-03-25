import SocialMedia from '../social-media';
import Modal from '.';

import styles from './Modal.module.scss';

type ContactModal = {
    text: string;
};

const ContactModal = ({ text }: ContactModal) => (
    <Modal customClassName={styles.ContactModal} triggerButton={text}>
        <h3>Контакты</h3>
        <p>
            Связаться с нами вы можете различными образами представленными ниже
        </p>
        <SocialMedia customClassNames={styles.HelperModalSocial} />
    </Modal>
);

export default ContactModal;
