import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faUserFriends,faCoffee, faCloud, faNetworkWired,faComputer} from '@fortawesome/free-solid-svg-icons'
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({message:'Our Community'}),
      faIcon: {faUserFriends}.faUserFriends,
    description: (
      <>
          <Translate>Join our ever growing Juka community</Translate> (<a target="_blank" href="https://discord.com/invite/7BNpwKH8JC/">link</a>). <Translate>We use "Discord" for managing the community as it provides an easy way to stay connected. In order to join the community, you should click our invitation link and register a Discord account. If you already have an account, just join the "JukaLang" group. It's public and anyone can join!</Translate>
      </>
    ),
  },
  {
    title: translate({message:'Contribute to the Source'}),
      faIcon: {faCode}.faCode,
    description: (
      <>
      <Translate>Juka is built by the community, for the community. Please consider contributing to the Juka GitHub repository at</Translate> <a target="_blank" href="https://github.com/jukaLang">https://github.com/jukaLang</a> <Translate>When you create new features or modify the existing ones, please follow the guidelines specified in the project documentation.</Translate>
      </>
    ),
  },
  {
    title: translate({message:'Social Media'}),
      faIcon: {faCoffee}.faCoffee,
    description: (
        <>
            Follow us on:<br/>
            Facebook: <a target="_blank" href="https://www.facebook.com/jukalang/">@jukalang</a><br/>
            Instagram: <a target="_blank" href="https://www.instagram.com/jukalanguage/">@jukalanguage</a><br/>
            Twitter: <a target="_blank" href="https://twitter.com/jukaLang">@jukaLang</a><br/>
            YouTube: <a target="_blank" href="https://www.youtube.com/channel/UCRkKqD0fnuVAJLJe9p4ZiKQ">Juka Programming Language</a><br/>
            Discord: <a target="_blank" href="https://discord.com/invite/7BNpwKH8JC/">7BNpwKH8JC</a>
        </>
    ),
  },
    {
        title: translate({message:'Run on Any Device'}),
        faIcon: {faComputer}.faComputer,
        description: (
            <>
                <Translate>Juka's main goal is to be able to run on any platform including Windows, Linux, MacOS, MS Azure, iOS/iPadOS (coming soon) and Android (coming soon).</Translate>
            </>
        ),
    },
    {
        title: translate({message:'Cloud Friendly'}),
        faIcon: {faCloud}.faCloud,
        description: (
            <>
                <Translate>You can run Juka on Microsoft's Azure Server by using Juka's Azure serverless function. Compile the code quickly, or let the others run the code. Download latest Azure Function from </Translate> <a href="https://github.com/jukaLang/Juka/releases">https://github.com/jukaLang/Juka/releases</a>. <br/> <Translate>NOTE: you need an active Microsoft Azure account to host.</Translate>
            </>
        ),
    },
    {
        title: translate({message:'Get packages from a Blockchain '}),
        faIcon: {faNetworkWired}.faNetworkWired,
        description: (
            <>
                <Translate>All Juka packages/libraries are hosted on a blockchain in a decentralized manner. Want to help with running the network?
                    Add your server configuration to </Translate> <a target="_blank" href="https://github.com/jukaLang/juka-network">https://github.com/jukaLang/juka-network</a> <Translate> and run the Juka-Network Server (which can be downloaded from </Translate> <a href="https://github.com/jukaLang/Juka/releases">https://github.com/jukaLang/Juka/releases</a>). <Translate>We appreciate any help!</Translate>
            </>
        ),
    },

];



function Feature({title, faIcon, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">

          <FontAwesomeIcon icon={faIcon} className={styles.fontawe}  />
        <br/><br/>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
