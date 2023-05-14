import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk, faCode, faUserFriends,faCoffee, faCloud, faNetworkWired,faComputer,faBoxOpen} from '@fortawesome/free-solid-svg-icons'
import {faPython} from '@fortawesome/free-brands-svg-icons'
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
    {
        title: translate({message:'Portable and Small in Size'}),
        faIcon: {faFloppyDisk}.faFloppyDisk,
        description: (
            <>
                <Translate>Juka is a portable programming language that you can run anywhere. It doesn't need to be installed, so you can use it even if you don't have admin privileges or access to a hard drive. Just put Juka on your flash drive and you're good to go! Juka is a small, portable programming language that only takes up ~30MB of space. This means you can easily carry it around on a thumb drive or other portable storage device. In fact, you can even store multiple versions of Juka on the same drive, so you always have the latest version available.</Translate>
                    <br/><br/>
                    Here are some of the benefits of using Juka on a thumb drive:
                    <br/>
                    <ul>
                        <li><Translate>You can use Juka on any computer, even if it doesn't have Juka installed.</Translate></li>
                        <li><Translate>You can easily share Juka with others.</Translate></li>
                        <li><Translate>You can keep your Juka code organized and portable.</Translate></li>
                    </ul>
            </>
        ),
    },
    {
        title: translate({message:'Works on "All" Operating Systems'}),
        faIcon: {faNetworkWired}.faNetworkWired,
        description: (
            <>
                <Translate>We are constantly working to support as many systems as possible, including lesser known ones like FreeBSD and TempleOS. We also support ARM processors and 32-bit systems like Linux (x86). So why not give Juka a try on your Raspberry Pi or in ChromeOS Flex?</Translate>
                <br/><br/>
                Here are some of the benefits of using Juka on a Raspberry Pi or in ChromeOS Flex:
                <br/>
                <ul>
                    <li><Translate>You can use Juka on a variety of different systems.</Translate></li>
                    <li><Translate>Juka is a powerful and portable programming language.</Translate></li>
                    <li><Translate>Juka is easy to learn and use.</Translate></li>
                    <li><Translate>Juka is a great way to learn about programming.</Translate></li>
                </ul>
                <Translate>You can even run Juka inside a Web Browser! Visit </Translate><a href={"https://ide.jukalang.com"}>https://ide.jukalang.com</a><Translate> and install the App. On Mobile, it's simply opening the website, and clicking "add to your home screen!"</Translate>
            </>
        ),
    },
    {
        title: translate({message:'Universal'}),
        faIcon: {faComputer}.faComputer,
        description: (
            <>
                <strong><Translate>Juka is a powerful and versatile programming language that can be used for a wide variety of projects.</Translate></strong>
                <br/><br/>
                Here are just a few examples of what you can do with Juka:
                <br/>
                <ul>
                    <li><strong>Web development: </strong><Translate>Juka is a great choice for building web applications and websites. It's fast, efficient, and easy to use.</Translate></li>
                    <li><strong>API development: </strong><Translate>Juka is perfect for creating APIs that can be used by other applications. It's easy to create well-designed and secure APIs with Juka.</Translate></li>
                    <li><strong>Data science: </strong><Translate>Juka is a powerful tool for data scientists. It's fast, efficient, and easy to use.</Translate></li>
                    <li><strong>Network security: </strong><Translate>We are aiming for Juka to be used to create secure networks and applications. It's fast, efficient, and easy to use.</Translate></li>
                    <li><strong>Quantum computing: </strong><Translate>We are aiming for Juka to become a leading language for quantum computing. It's fast, efficient, and easy to use.</Translate></li>
                </ul>
                <Translate>Juka can run on any platform, including Linux x32, FreeBSD, Chromium, Discord, and Telegram.</Translate><br/>
                <Translate>This makes it a great choice for developers who need to create applications that can run on a variety of platforms.</Translate><br/>

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
                <br/><br/>
                Here are just a few examples of what you can do with Juka:
                <br/>
                <ul>
                    <li><strong>Portability: </strong><Translate>You can use Juka to create applications that can be hosted anywhere.</Translate></li>
                    <li><strong>Scalability: </strong><Translate>JukaAPI is designed to scale to meet the needs of your application.</Translate></li>
                    <li><strong>Reliability: </strong><Translate>JukaAPI can be used on Microsoft Azure using Azure Functions.</Translate></li>
                </ul>
            </>
        ),
    },
    {
        title: translate({message:'Jupyter Support'}),
        faIcon: {faPython}.faPython,
        description: (
            <>
                <Translate>We know that many people love to use Jupyter Notebook and Lab. That's why we've added an easy way to run Juka code in Jupyter.

                    Now you can do your data analysis in the software that you're used to, with the power of Juka.

                    To get started, simply install the Juka kernel for Jupyter.

                    Once the kernel is installed, you can create a new Jupyter notebook and select the "Juka" kernel.

                    Now you can start writing Juka code in your Jupyter notebook.

                    The Juka kernel will compile and execute your code, and you can see the results in the notebook.

                    We hope you enjoy using Juka in Jupyter</Translate>
            </>
        ),
    },
    {
        title: translate({message:'Easy to Use Package Manager'}),
        faIcon: {faBoxOpen}.faBoxOpen,
        description: (
            <>
                <Translate>All of the packages are hosted on GitHub, making it easy to install and contribute to their development.
                    We hope that by hosting all packages on GitHub, security issues can be fixed quickly by the community. The packages contain a simple config file, making it easy for anyone to develop Juka packages.
                </Translate>
                <br/>
                <Translate>if you are interested in developing Juka packages, we encourage you to check out the GitHub repository.</Translate>
            </>
        ),
    },
    {
        title: translate({message:'Join the Juka community!'}),
        faIcon: {faUserFriends}.faUserFriends,
        description: (
            <>
                <Translate>We are a growing community of Juka users who are passionate about learning and using this new language. We use Discord to stay connected and share resources, and we welcome anyone to join us.</Translate>
                <br/>
                <Translate>To join the community, please click on the following link and create a Discord account. Once you have created an account, you can join the JukaLang group by clicking on the "Join" button.</Translate>
                <br/>
                <a href={"https://discord.gg/MsKWsErzfp"}>https://discord.gg/MsKWsErzfp</a><br/><br/>
                <Translate>We look forward to seeing you in the community!</Translate>

            </>
        ),
    },
    {
        title: translate({message:'Contribute to the Source'}),
        faIcon: {faCode}.faCode,
        description: (
            <>
                <Translate>Juka is a community-driven project. We encourage everyone to contribute to the Juka GitHub repository.</Translate>
                    <br/>
                <Translate>There are many ways to contribute to Juka, including:</Translate>
                    <br/>
                    <ul>
                        <li><Translate>Reporting bugs</Translate></li>
                        <li><Translate>Fixing bugs</Translate></li>
                        <li><Translate>Adding new features</Translate></li>
                        <li><Translate>Writing documentation</Translate></li>
                        <li><Translate>Translating documentation</Translate></li>
                        <li><Translate>Spreading the word about Juka</Translate></li>
                    </ul>



                    <Translate>Please consider contributing to the Juka GitHub repository at</Translate> <a target="_blank" href="https://github.com/jukaLang">https://github.com/jukaLang</a>
            </>
        ),
    },
    {
        title: translate({message:'Social Media'}),
        faIcon: {faCoffee}.faCoffee,
        description: (
            <>
                <strong>Follow us on:</strong><br/>
                Facebook: <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/jukalang/">@jukalang</a><br/>
                Instagram: <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/jukalanguage/">@jukalanguage</a><br/>
                Twitter: <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/jukaLang">@jukaLang</a><br/>
                YouTube: <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/@jukalang">http://youtube.com/@jukalang</a><br/>
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
