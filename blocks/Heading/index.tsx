import MediaBank from '../MediaBank';
import styles from './Heading.module.scss';

const Heading = () => (
    <div className={styles.HeadingBlock}>
        <h1>Аренда сервера для удаленной работы</h1>
        <MediaBank />
    </div>
);

export default Heading;