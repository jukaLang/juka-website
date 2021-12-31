import React from 'react';
import styles from './SpecialThanks.module.css';
import clsx from "clsx";

export default function HomepageFeatures() {
    return (
        <section  className={styles.specialthanks}>
            <div className="container">
                <div className="row">
                    <div className={clsx('col col--12')}>
                        <div className="text--center padding-horiz--md">
                    <h1>Special Thanks For The Software Provided By:</h1>
                    <ul>
                        <li>
                            JetBrains <a target="_blank" href={"https://www.jetbrains.com/"}>(link)</a>
                        </li>
                        <li>
                            Bugsnag <a target="_blank" href={"https://www.bugsnag.com/"}>(link)</a>
                        </li>
                    </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
