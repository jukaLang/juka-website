import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from "./learn.module.css";

function LearnHeader() {
    return (
        <header>
            <div className={styles.learn}>
                <h1>Coming Soon</h1>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/eNvUS-6PTbs"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>

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
