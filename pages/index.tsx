import type { NextPage } from 'next';

import styles from '../styles/MainPage.module.scss';

import { Heading, Footer, ServerList, MediaBank } from '../blocks';

const MainPage: NextPage = () => {
    return (
        <div className={styles.ServerSiteContainer}>
            <Heading />
            <ServerList />
            <MediaBank />
            <Footer />
        </div>
    );
};

export default MainPage;
