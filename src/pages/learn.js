import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from "./learn.module.css";
import clsx from "clsx";

function LearnHeader() {
    return (
        <header>
            <div className={styles.learn}>

                <div>Juka Videos</div>
                <div><b>Coming Soon...</b></div>


                <div>Music Videos (TEST)</div>
                <div className="container">
                    <div className="row">
                        <div className={clsx('col col--6 col--offset-3')}>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/Tci64rGWr50"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>

                        </div>
                        <div className={clsx('col col--6 col--offset-3')}>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/EFE7ZkHbSKA"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>

                        </div>
                    </div>
                </div>

                <div><a href="/quiz">Take a Quiz on Juka (TEST)</a></div>
            </div>
        </header>
    )
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Learn | ${siteConfig.title}`}
            description="Juka Programming Language Learning Center">

            <main>
                <LearnHeader />
            </main>
        </Layout>
    );
}
