import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faUserFriends,faCoffee } from '@fortawesome/free-solid-svg-icons'

const FeatureList = [
  {
    title: 'Our Community',
      faIcon: {faUserFriends}.faUserFriends,
    description: (
      <>
          Join our ever growing Juka community (<a target="_blank" href="https://teams.microsoft.com/join/y6rcztsp6s9z">link</a>). We use "Microsoft Teams" for managing the community as it provides an easy way to stay connected. In order to join the community, you should click and register with Microsoft Teams: Microsoft Teams Invitation Form If you already have an account, just join the "Juka Programming Language" group. It's public and anyone can join!
      </>
    ),
  },
  {
    title: 'Contribute to the Source',
      faIcon: {faCode}.faCode,
    description: (
      <>
          Juka is built by the community, for the community. Please consider contributing to the Juka GitHub repository at <a target="_blank" href="https://github.com/jukaLang">https://github.com/jukaLang</a> When you create new features, please follow the guidelines specified in the project documentation.
      </>
    ),
  },
  {
    title: 'Social Media',
      faIcon: {faCoffee}.faCoffee,
    description: (
        <>
            Teams: <a target="_blank" href="https://teams.microsoft.com/join/y6rcztsp6s9z">(link)</a><br/>
            Twitter: <a target="_blank" href="https://twitter.com/jukaLang">@jukaLang</a><br/>
            Facebook: <a target="_blank" href="https://www.facebook.com/jukalang/">@jukalang</a><br/>
            Instagram: <a target="_blank" href="https://www.instagram.com/jukalanguage/">@jukalanguage/</a>
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
