import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './specialthanks.module.css';
import clsx from "clsx";
import Translate from '@docusaurus/Translate';

function Specialthanks() {
    return (
        <section  className={styles.specialthanks}>
            <div className="container">
                <div className="row">
                    <div className={clsx('col col--12')}>
                        <div className="text--center padding-horiz--md">
                            <h1><Translate>Special Thanks To:</Translate></h1>
                            <ul>
                                <li>
                                    JetBrains <a target="_blank" href={"https://www.jetbrains.com/"}>(link)</a>
                                </li>
                                <li>
                                    Bugsnag <a target="_blank" href={"https://www.bugsnag.com/"}>(link)</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
