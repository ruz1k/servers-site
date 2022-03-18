import type { NextPage } from 'next';

import styles from '../styles/MainPage.module.scss';

import { Heading, Information, Contact, Footer } from '../blocks';

const MainPage: NextPage = () => {
    return (
        <div className={styles.ServerSiteContainer}>
            <Heading />
            <Information />
            <Contact />
            <Footer />
        </div>
    );
};

export default MainPage;
