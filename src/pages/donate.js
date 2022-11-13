import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './donate.module.css';

function DonateHeader() {
    return (
        <header className={styles.Header}>
            <section>
                <div className="container">
            <h1>If you like Juka, Consider Donating!</h1>
            <h2>Why Donate?</h2>
            <p>Juka is provided completely free to everyone. <br/>We do not have any ads on our site or in our programs. Therefore, we do not generate any revenue.<br/>
                Also, we do not get paid by any organization to provide this service. <br/> Our developers are 100% volunteers. We've spent a combined 1000s of hours
                developing this language. If you find Juka useful, please consider donating.</p>
            <h2>Where Would My Money Go To?</h2>
            <p>It would go towards upkeep of essential servers, domain registration, and domain hosting. As we do not generate any revenue, we have to pay for services out of our own pocket.</p>
            <h2>Donate Cryptocurrency</h2>
            <h3><strong>Bitcoin Address: </strong>3MqJ2pwcuqh2W5mUPZUcKMVzxgTKcjD8ET</h3><img height="256" src={"/img/bitcoin.png"} /><br/><br/>
            <h3><strong>Ethereum (Ethereum Network) Address: </strong>0xB56F6aff7a84935E5AF9D93b6d7db0e4F4F26B39</h3><img height="256" src={"/img/ethereum.png"} />


            <br/>
            <br/>
            <h2>Special Thanks</h2>
            <p>We would like to give special thanks to the following companies:<br/>
                <strong>JetBrains</strong> <a target="_blank" href={"https://www.jetbrains.com/"}>(link)</a> for supplying us awesome editor software! <br/>
                <strong>Bugsnag</strong> <a target="_blank" href={"https://www.bugsnag.com/"}>(link)</a> for helping us track bugs.

            </p>
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
