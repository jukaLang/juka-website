import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './donate.module.css';

function DonateHeader() {
    return (
        <header className={styles.Header}>
            <section>
                <div className="container">
                    <h1>Help us keep Juka free and open source!</h1>
                    <h2>Why Donate?</h2>
                    <p>Juka is a free programming language that is developed and maintained by volunteers. We do not have any ads on our site or in our programs, and we do not receive any funding from any organizations. All of the costs associated with Juka, such as server upkeep, domain registration, and domain hosting, are paid for out of the pockets of the developers.</p>
                    <p>If you find Juka to be a useful tool, please consider donating to help us cover our costs and continue development. Any amount is appreciated.</p>
                    <h2>Where Will My Money Go?</h2>
                    <p>Your donation will go towards the following:</p>
                    <ul>
                        <li>Server upkeep</li>
                        <li>Domain registration</li>
                        <li>Domain hosting</li>
                        <li>Development costs</li>
                    </ul>
                    <h2>Donate Cryptocurrency</h2>
                    <h3><strong>Bitcoin Address: </strong>3MqJ2pwcuqh2W5mUPZUcKMVzxgTKcjD8ET</h3><img height="256" src={"/img/bitcoin.png"} /><br/><br/>
                    <h3><strong>Ethereum (Ethereum Network) Address: </strong>0xB56F6aff7a84935E5AF9D93b6d7db0e4F4F26B39</h3><img height="256" src={"/img/ethereum.png"} />


                    <br/>
                    <br/>
                    <h2>Special Thanks</h2>
                     <p>We would like to give special thanks to the following companies for their support: <br/><br/>
                        <strong>JetBrains</strong> <a target="_blank" href={"https://www.jetbrains.com/"}>(link)</a> for supplying us awesome editor software! <br/>
                        <strong>Bugsnag</strong> <a target="_blank" href={"https://www.bugsnag.com/"}>(link)</a> for helping us track bugs.

                    </p>
                    <p>Thank you for your support!</p>
                </div>
            </section>
        </header>
    )
}

export default function Donate() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Donation | ${siteConfig.title}`}
            description="Juka Programming Language Donation">

            <main>
                <DonateHeader />
            </main>
        </Layout>
    );
}
