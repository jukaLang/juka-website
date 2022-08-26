import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faUserFriends,faCoffee, faCloud, faNetworkWired,faComputer,faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
    {
        title: translate({message:'Run on Any Device'}),
        faIcon: {faComputer}.faComputer,
        description: (
            <>
                <Translate>At the current stage, Juka is interpreted. However, we are concurrently working on a Compiler (JIT).
                     Juka's main goal is to be able to run on any platform including: </Translate><br/> Windows, MacOS, Linux, MS Azure, FreeBSD, Raspberry Pi, C# dll, Unity3D, Android, etc...<br/><b><Translate>Coming Soon</Translate>:</b><br/>iOS/iPadOS, MacOS App, TempleOS.
            </>
        ),
    },
    {
        title: translate({message:'Use for Any Project'}),
        faIcon: {faLaptopCode}.faLaptopCode,
        description: (
            <>
                <Translate>Juka can be used for all types of projects including server side coding, client side coding,
                    native coding, web development, API development, data science, network security, and quantum computing. Our goal is to create a programming language that can run on any platform and we mean any!</Translate>
            </>
        ),
    },
    {
        title: translate({message:'Cloud Friendly'}),
        faIcon: {faCloud}.faCloud,
        description: (
            <>
                <Translate>We created JukaAPI so that you can run it on any cloud server. This will allow one to use REST API to run code.
                    Feel free to test it at </Translate><a target="_blank" href="https://api.jukalang.com">https://api.jukalang.com</a>.<br/><br/>
                    <Translate>You can also run Juka on Microsoft's Azure Server by using Juka's Azure serverless function. Compile the code quickly, or let the others run the code. Download latest Azure Function from </Translate> <a href="/download">https://jukalang.com/download</a>. <br/> <Translate>NOTE: you need an active Microsoft Azure account to host.</Translate>
            </>
        ),
    },
    {
        title: translate({message:'Easy to Use Package Manager'}),
        faIcon: {faNetworkWired}.faNetworkWired,
        description: (
            <>
                <Translate>All of the packages are hosted on GitHub. That's right! We made it simple to install and contribute to the package development.
                Our hope is that by hosting all packages on Github, security issues in the packages can be fixed quickly by the community. The packages
                contain a simple config file, making it simple for anyone to develop Juka packages. </Translate>
            </>
        ),
    },
    {
        title: translate({message:'Our Community'}),
        faIcon: {faUserFriends}.faUserFriends,
        description: (
            <>
                <Translate>Join our ever growing Juka community</Translate> (<a target="_blank" href="https://discord.gg/MsKWsErzfp">link</a>). <Translate>We use "Discord" for managing the community as it provides an easy way to stay connected. In order to join the community, you should click our invitation link and register a Discord account. If you already have an account, just join the "JukaLang" group. It's public and anyone can join!</Translate>
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
                Facebook: <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/jukalang/">@jukalang</a><br/>
                Instagram: <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/jukalanguage/">@jukalanguage</a><br/>
                Twitter: <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/jukaLang">@jukaLang</a><br/>
                YouTube: <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCRkKqD0fnuVAJLJe9p4ZiKQ">Juka Programming Language</a><br/>
                Discord: <a rel="noopener noreferrer" target="_blank" href="https://discord.gg/MsKWsErzfp">Discord</a>
            </>
        ),
    },
];



function Feature({title, faIcon, description}) {
  return (
    <div className={clsx('col col--4',styles.containerspace)}>
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
        <div className={clsx("row")}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
