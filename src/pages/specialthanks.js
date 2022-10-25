import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './specialthanks.module.css';
import clsx from "clsx";
import Translate from '@docusaurus/Translate';

function Specialthanks() {
    return (
        <header  className={styles.specialthanks}>
            <h1 className={styles.Header}>Special Thanks to the Following Companies:</h1>
            <div className={styles.specialthanks}>
                JetBrains <a target="_blank" href={"https://www.jetbrains.com/"}>(link)</a> for supplying us awesome editor software! <br/>
                Bugsnag <a target="_blank" href={"https://www.bugsnag.com/"}>(link)</a> for helping us track bugs.
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Special Thanks | ${siteConfig.title}`}
            description="Juka Programming Language Special Thanks">

            <main>
                <Specialthanks />
            </main>
        </Layout>
    );
}
