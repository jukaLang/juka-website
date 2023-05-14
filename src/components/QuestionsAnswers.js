import React from 'react';
import clsx from 'clsx';
import styles from './QuestionsAnswers.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const QuestionList = [
    {
        question: "Can Juka run on Raspberry Pi?",
        answer: "Yes! Juka can run on Raspberry Pi and almost any other system"
    },
    {
        question: "I want to help with Juka. How can I do that?",
        answer: "There are many ways to help with Juka! You can: Join the Juka community on Discord and participate in discussions and help answer questions. Report bugs or suggest features on the Juka GitHub repository. Contribute code or documentation to the Juka project. Spread the word about Juka and help others learn about it. Visit us at <a target=_blank href=\"https://discord.gg/MsKWsErzfp\">https://discord.gg/MsKWsErzfp</a> and we will find a role for you. Even non-technical people can help!"
    },
    {
        question: "Can I try Juka without installing anything?",
        answer: "Yes! You can try Juka online at the following link: <a target=_blank href=\"https://ide.jukalang.com\">https://ide.jukalang.com</a> This web-based app allows you to write and run Juka code without having to install anything on your computer."
    },
];



function QuestionStructure({question,answer}) {
    return (
        <div className={clsx('col col--12')}>
            <div className="text--center padding-horiz--md">

                <h4 className={"question"}>Q: {question}</h4>
                <p className={"answer"} dangerouslySetInnerHTML={{ __html: "A: "+answer }}/>
            </div>
        </div>
    );
}

export default function QandA() {
    return (
        <section className={styles.features}>
            <div className="container">
                <h2 className={clsx('col col--12 text--center padding-horiz--md')}>Questions and Answers</h2>
                <div className={clsx("row")}>
                    {QuestionList.map((props, idx) => (
                        <QuestionStructure key={idx} {...props} />
                    ))}
                </div>
                <br/>
            </div>
        </section>

    );
}
