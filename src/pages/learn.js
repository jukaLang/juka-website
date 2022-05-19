import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from "./learn.module.css";

function LearnHeader() {
    return (
        <header>
            <div className={styles.learn}>


                <div>Videos (Coming Soon)</div>
                <h3><a href="/quiz">Take a Quiz on Juka</a></h3>
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
