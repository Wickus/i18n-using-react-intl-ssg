import Head from "next/head";
import styles from "../styles/Home.module.css";
import {FormattedMessage} from "react-intl";
// Components
import LanguageSelector from "../components/language-selector";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/src/public/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <form className={styles.description}>
                    <LanguageSelector/>
                </form>
                <br/>
                <br/>
                <h1 className={styles.title}>
                    <FormattedMessage id="welcome" values={{framework: <a href="https://nextjs.org">Next.js!</a>}}/>
                </h1>

                <p className={styles.description}>
                    <FormattedMessage id="getting-started"
                                      values={{path: <code className={styles.code}>pages/index.js</code>}}/>
                </p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2>
                            <FormattedMessage id="documentation-title" values={{arrow: <span>&rarr;</span>}}/>
                        </h2>
                        <p>
                            <FormattedMessage id="documentation-text" values={{framework: "Next.js"}}/>
                        </p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2>
                            <FormattedMessage id="learn-title" values={{arrow: <span>&rarr;</span>}}/>
                        </h2>
                        <p>
                            <FormattedMessage id="learn-text" values={{framework: "Next.js"}}/>
                        </p>
                    </a>

                    <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
                        <h2>
                            <FormattedMessage id="examples-title" values={{arrow: <span>&rarr;</span>}}/>
                        </h2>
                        <p>
                            <FormattedMessage id="examples-text" values={{framework: "Next.js"}}/>
                        </p>
                    </a>

                    <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                       className={styles.card}>
                        <h2>
                            <FormattedMessage id="deploy-title" values={{arrow: <span>&rarr;</span>}}/>
                        </h2>
                        <p>
                            <FormattedMessage id="deploy-text" values={{framework: "Next.js", vercel: "Vercel"}}/>
                        </p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                   target="_blank" rel="noopener noreferrer">
                    <FormattedMessage id="powered-by" values={{vercel: "Vercel"}}/>
                </a>
            </footer>
        </div>
    );
}
