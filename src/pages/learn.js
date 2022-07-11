import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from "./learn.module.css";
import clsx from "clsx";

function LearnHeader() {
    return (
        <header>
            <div className={styles.learn}>

                <a href="/quiz">Think you know Juka? Take a Quiz!</a><br/><br/>
                <a href="/tryonline">Try Juka Online</a><br/><br/>


                <h2>Videos</h2>
                <div className="container">
                    <div className="row">
                        <div className={clsx('col col--6')}>
                            <h4>Coming Soon</h4>


                        </div>
                        <div className={clsx('col col--6')}>
                            <h4>Coming Soon</h4>
                            <iframe></iframe>

                        </div>
                    </div>
                </div>


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
            <h1 className={styles.Header}>Juka Programming Language Learning Center</h1>
            <main>
                <LearnHeader />
            </main>
        </Layout>
    );
}
