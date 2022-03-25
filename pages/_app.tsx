import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/_global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Head>
        <title>Аренда сервера для удаленной работы</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <Component {...pageProps} />
    </Head>
);

export default MyApp;
