import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import SpecialThanks from '../components/SpecialThanks';
import CodeBlock from '@theme/CodeBlock';
import Translate from '@docusaurus/Translate';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faInstagram,faDiscord,faYoutube} from '@fortawesome/free-brands-svg-icons'

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
          <br/><br/>
          <CodeBlock className={`language-jsx ${styles.maincodeblock}`} title="./HelloWorld.juk">{`func main() = {
    // Print Hello World
    printLine("Hello World");
}`}</CodeBlock>
            <br/>
          <h2>
              <Translate>Follow us on:</Translate><br/>
              <a style={{color:"#fff"}} target="_blank" href="https://discord.com/invite/7BNpwKH8JC/"><FontAwesomeIcon icon={faDiscord}  fixedWidth/>Discord: 7BNpwKH8JC</a><br/>
              <a style={{color:"#fff"}} target="_blank" href="https://www.facebook.com/jukalang/"><FontAwesomeIcon icon={faFacebook}  fixedWidth/>Facebook: @jukalang</a><br/>
              <a style={{color:"#fff"}} target="_blank" href="https://twitter.com/jukaLang/"><FontAwesomeIcon icon={faTwitter} fixedWidth/>Twitter: @jukaLang</a><br/>
              <a style={{color:"#fff"}} target="_blank" href="https://www.instagram.com/jukalanguage/"><FontAwesomeIcon icon={faInstagram} fixedWidth/>Instagram: @jukalanguage</a><br/>
              <a style={{color:"#fff"}} target="_blank" href="https://www.youtube.com/channel/UCRkKqD0fnuVAJLJe9p4ZiKQ"><FontAwesomeIcon icon={faYoutube} fixedWidth/>YouTube: Juka Programming Language</a>
          </h2>



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
