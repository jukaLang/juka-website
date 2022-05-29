import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageSocial from '../components/HomepageSocial';
import SpecialThanks from '../components/SpecialThanks';
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
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <Translate>Get Started with Juka</Translate>
          </Link>

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
          <SpecialThanks />
      </main>
    </Layout>
  );
}
