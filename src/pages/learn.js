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
                <h3><b>Coming Soon...</b></h3>

                <div><a href="/quiz">Take a Quiz on Juka</a></div>


                <div>Other Useful Videos</div>
                <div className="container">
                    <div className="row">
                        <div className={clsx('col col--6')}>
                            <h4>C# Tutorial for Beginners</h4>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/gfkTfcpWqAY"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>

                        </div>
                        <div className={clsx('col col--6')}>
                            <h4>MySQL for Beginners</h4>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/7S_tz1z_5bA"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>

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

            <main>
                <LearnHeader />
            </main>
        </Layout>
    );
}
