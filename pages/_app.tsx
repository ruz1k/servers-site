import type { AppProps } from 'next/app';

import '../styles/_global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Component {...pageProps} />
);

export default MyApp;
