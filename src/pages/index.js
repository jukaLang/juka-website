import React, {useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageSocial from '../components/HomepageSocial';
import CodeBlock from '@theme/CodeBlock';
import Translate from '@docusaurus/Translate';
import BrowserOnly from "@docusaurus/BrowserOnly";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
                    os = 'MacOS';
                } else if (iosPlatforms.indexOf(platform) !== -1) {
                    os = 'iOS';
                } else if (windowsPlatforms.indexOf(platform) !== -1) {
                    os = 'Windows';
                } else if (/Android/.test(userAgent)) {
                    os = 'Android';
                } else if (/Linux/.test(platform)) {
                    os = 'Linux';
                } else if (userAgent.indexOf('X11') !== -1) {
                    return "Unix"
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


          <Tabs>
              <TabItem value="hw" label="Hello World">

                  <CodeBlock className={`language-jsx ${styles.maincodeblock}`}  showLineNumbers>{`func main() = {
    // Print Hello World
    var y = "Hello World";
    printLine(y);
}
`}</CodeBlock>

              </TabItem>
              <TabItem value="ie" label="If/Else">

                  <CodeBlock className={`language-jsx ${styles.maincodeblock}`}  showLineNumbers>{`func main() = {
    var x = false;
    if ( x == true)
    {
        print("x");
    }
    else
    {
        print("y");
    }
}
`}</CodeBlock>

              </TabItem>
              <TabItem value="arr" label="Arrays">

                  <CodeBlock className={`language-jsx ${styles.maincodeblock}`}  showLineNumbers>{`func main() = {
    var x = array[3];
    //x[1] = ""test"";
    print(x[0]); 
}
`}</CodeBlock>

              </TabItem>
              <TabItem value="fd" label="Function Declaration">

                  <CodeBlock className={`language-jsx ${styles.maincodeblock}`}  showLineNumbers>{`func x() = {
    printLine("function x is called");
}
func main() = {
    x();
    x();
}
`}</CodeBlock>

              </TabItem>
              <TabItem value="fl" label="For Loop">

                  <CodeBlock className={`language-jsx ${styles.maincodeblock}`}  showLineNumbers>{`func main() = {
    for(var i = 0; i<3; i++;)
    {
        print(i);
    }
}
`}</CodeBlock>

              </TabItem>

          </Tabs>

          <div className={styles.idebtns}>
              <a className={styles.index_runcode} href={"/tryonline"+isTabName}>Run Code</a>
              <a className={styles.index_download} href="/download">Download Juka for <TryDetectDownload defaultValue="your OS"/></a>
          </div><br/>
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
