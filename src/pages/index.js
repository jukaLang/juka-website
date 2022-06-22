import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageSocial from '../components/HomepageSocial';
import CodeBlock from '@theme/CodeBlock';
import Translate from '@docusaurus/Translate';



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
              <div className="container">
                  <div className="row">
                      <div className={clsx('col col--3 col--offset-3', styles.dlndbtn)}>

                              <Link
                                className="button button--secondary button--lg"
                                to="/docs">
                                <Translate>Get Started with Juka</Translate>
                              </Link>
                      </div>
                      <div className={clsx('col col--3', styles.dlndbtn)}>
                                <Link
                                    className="button button--secondary button--lg"
                                    to="/download">
                                    <Translate>Download</Translate>
                                </Link>

                        </div>
                          </div>
                      </div>
              </div>
          <br/>
          <CodeBlock className={`language-jsx ${styles.maincodeblock}`} title="./HelloWorld.juk">{`func main() = {
    // Print Hello World
    printLine("Hello World");
}`}</CodeBlock>

          <h2>
              <Translate>Follow us for news and updates!</Translate>
          </h2>
          <HomepageSocial/>



      </div>
    </header>


  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Juka Programming Language - Language of the future">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
