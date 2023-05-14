import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './contact.module.css';


export default function Contact() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Donation | ${siteConfig.title}`}
            description="Juka Programming Language Donation">

            <main>
                <section>
                    <div className="container">
                        <h1>Contact Juka</h1>

                        <h2>For Language Questions and Discussions</h2>

                        <p>
                            Join our Discord channel for language questions, suggestions, bugs, and help:
                            <br />
                            <a href="https://discord.gg/MsKWsErzfp" target="_blank">https://discord.gg/MsKWsErzfp</a>
                        </p>

                        <h2>For Other Inquiries</h2>

                        <p>
                            Email us at jukalang[at]jukalang.com
                        </p>

                        <h2>Want to send us a private email?</h2>

                        <p>
                            If you want to send us a private email, encrypt the message using RSA encryption. Our public key is:
                            <br />
                            <code>
                                MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDC8X38cdoVHjs+Vl0CKtglsLFjOWWsAHgYndFEsK7vXH1FgFZvgc/ULzoaX/zF7pZ450N3/KHrA6ueexqmUr9vmL8rlu/2YayrQWm32Gtf256rqx+0qP3ztG/kJQTVg+7JYmM8BpZZTnb0k9YurbuFj3VGu46+arZASMd4ScVfGwIDAQAB

                            </code>
                        </p>

                    </div>
                </section>
            </main>
        </Layout>
    );
}