import React, {useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageSocial from '../components/HomepageSocial';
import QandA from '../components/QuestionsAnswers';
import CodeExamples from '../components/CodeExamples';
import Translate from '@docusaurus/Translate';
import BrowserOnly from "@docusaurus/BrowserOnly";


const TryDetectDownload = () => {
    return (
        <BrowserOnly>
            {() => {
                let userAgent = window.navigator.userAgent,
                    platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
                    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
                    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
                    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
                    os = "Latest";

                if (macosPlatforms.indexOf(platform) !== -1) {
                    if(navigator.maxTouchPoints > 0){
                        return 'for iPadOS'
                    }
                    return 'for MacOS';
                } else if (iosPlatforms.indexOf(platform) !== -1) {
                    return 'for iOS';
                } else if (windowsPlatforms.indexOf(platform) !== -1) {
                    return 'for Windows';
                } else if(/(?:; ([^;)]+) Build\/.*)?\bSilk\/([0-9._-]+)\b(.*\bMobile Safari\b)?/.test(userAgent)) {
                    return 'for Amazon Fire'
                } else if (/Android/.test(userAgent)) {
                    return 'for Android';
                } else if (/TV/.test(userAgent)) {
                    return 'for AndroidTV';
                } else if (/Linux/.test(platform)) {
                    if (userAgent.indexOf('Win64')){
                        return 'for AndroidTV';
                    }
                    return 'for Linux';
                } else if (userAgent.indexOf('X11') !== -1) {
                    return "for Unix";
                } else if(userAgent.indexOf('CrOS') !== -1) {
                    return "for ChromeOS";
                }

                return os;
            }
            }
        </BrowserOnly>
    );
};


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const [isTabName, setTabName] = useState("");

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
              <div className="container">
                  <div className="row">

                      <div className={clsx('col col--4 col--offset-4')}>
                          <Link
                              className="button button--secondary button--lg"
                              to="/docs">
                              <Translate>Get Started with Juka</Translate>
                          </Link>

                        </div>
                          </div>
                      </div>
              </div>
          <br/>

        <CodeExamples/>

          <div className={styles.idebtns}>
              <a className={styles.index_runcode} href={"https://ide.jukalang.com/"+isTabName}>Run Code</a>
              <a className={styles.index_download} href="/download">Download Juka <TryDetectDownload/></a>
          </div><br/>
          <h2>
              <Translate>Follow us for news and updates!</Translate>
          </h2>
          <HomepageSocial/>

          <br/>
          <h2 className={styles.fademe}><a href={"/donate"}>Love Juka? Click here to Donate!</a></h2>

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

          <div className="container">
              <h2 className={styles.jukaquiz}><a href={"/quiz"}>Think you know Juka? Get a Completion Certificate!</a></h2>
          </div>
            <br/>
          <QandA/>


      </main>
    </Layout>
  );
}
