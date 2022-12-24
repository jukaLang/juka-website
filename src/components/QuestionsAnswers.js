import React from 'react';
import clsx from 'clsx';
import styles from './QuestionsAnswers.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const QuestionList = [
    {
        question: "Can Juka run on Raspberry Pi?",
        answer: "Yes! Juka can run on Raspberry Pi and almost any other system!"
    },
    {
        question: "I want to help with Juka. How can I do that?",
        answer: "Visit us at <a target=_blank href=\"https://discord.gg/MsKWsErzfp\">https://discord.gg/MsKWsErzfp</a> and we will find a role for you. Even non-technical people can help!"
    },
    {
        question: "Can I try Juka without installing anything?",
        answer: "Visit <a target=_blank href=\"https://ide.jukalang.com\">https://ide.jukalang.com</a> to run a web-based app or use our full api at <a target=_blank href=\"https://jukalang.com/tryonline\">https://jukalang.com/tryonline</a>"
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
