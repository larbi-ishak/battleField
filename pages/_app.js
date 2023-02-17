/**
 * type script version
 */
// import '../styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

import Main_layout from "../src/components/layout/main_layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <Main_layout>
            <Component {...pageProps} />
        </Main_layout>
    );
}

/**
 * _app.js
 * this is like index.js in react this the whole wrapper of your application
 * first we duplicated our code and made the header and the footer in many places
 * another way to do it is to put them here to not duplicate your code
 * so this is dynamic in all your application's pages
 * but this is also not the cleanest way to do ti
 */

// export default function App({ Component, pageProps }) {
//     return (
//         <section>
//             <Header />
//             <Component {...pageProps} />
//             <Footer />
//         </section>
//     );
// }
