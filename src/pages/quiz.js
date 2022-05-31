import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from "./quiz.module.css";
import clsx from "clsx";
import logovg from '@site/static/img/juka.png';

function QuizHeader() {
    const questions = [
        {
            questionText: 'Does Juka work on Azure?',
            answerOptions: [
                { answerText: 'Yes', isCorrect: true },
                { answerText: 'No', isCorrect: false },
            ],
        },
        {
            questionText: 'How do you output "Hello" in Juka?',
            answerOptions: [
                { answerText: 'WriteLine("Hello")', isCorrect: false },
                { answerText: 'printLine("Hello")', isCorrect: true },
                { answerText: 'printf("Hello")', isCorrect: false },
                { answerText: 'log("Hello")', isCorrect: false },
            ],
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [nset, setNset] = useState(false);
    const [nameErr, setNameErr] = useState(false);
    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);

        }
    };

    const handleNameClick = () => {
        if(fname.length > 2 && lname.length>2) {
            setNset(true);
        } else{
            setNameErr(true);
        }
    };

    const {siteConfig} = useDocusaurusContext();

    const cert_styles = {
        color: "rgb(51, 52, 71)",
        fontSize: "32px",
        textAlign: "center",
        backgroundColor: "white",
    };

    const date = () => {
        let today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }

    const printCertificate = () => {
        const certificateData = document.getElementById('certificate').innerHTML;
        const printWindow = window.open("about:blank", "", '_blank, alwaysRaised=yes');
        printWindow.document.write(certificateData);
        printWindow.print();
    }

    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <header className={clsx('hero hero--primary')}>
            <div className="container">
                <h1>Juka Quiz</h1>
                { nset ? (
                        showScore ? (

                            <>
                                <div className={styles.quiz_score}>
                                    You scored {score} out of {questions.length}
                                </div>
                                    {(score > questions.length*.80) ? (
                                        <div>
                                            <button className={styles.quiz_button} onClick={() => printCertificate()}>Print Certificate</button>
                                            <div id="certificate">
                                                <div style={cert_styles}>
                                                    <h1>Certificate of Completion</h1>
                                                    <h2>This certificate is presented to</h2>
                                                    <h2>{Capitalize(fname)} {Capitalize(lname)}</h2>
                                                    <h2>for completing the course</h2>
                                                    <h2>Juka Fundamentals</h2>
                                                    <h2>Issued on: {date()}</h2>
                                                    <h2>Signed: <img Width={22} Height={22} src={logovg}/> Juka Team </h2>
                                                </div>
                                            </div>


                                        </div>
                                    ) :(<div><a href="/quiz">Try again?</a></div>)}
                            </>

                        ) : (
                            <>
                                <div className={styles.quiz_question}>
                                    <div className={styles.quiz_count}>
                                        <span>Question {currentQuestion + 1}</span>/{questions.length}
                                    </div>
                                    <div className={styles.quiz_text}>{questions[currentQuestion].questionText}</div>
                                </div>
                                <div>
                                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                                        <button className={styles.quiz_button}
                                            onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                    ))}
                                </div>
                            </>
                        )
                ) : (
                    <label>
                        Please enter your first name and your last name: <br/>
                        <input className={styles.quiz_sname} type="text" placeholder="John" value={fname} onKeyPress={event => {
                            if (event.key === 'Enter') {
                                handleNameClick()
                            }
                        }} onChange={e => setFname(e.target.value)}/>

                        <input className={styles.quiz_sname} type="text" placeholder="Smith" value={lname} onKeyPress={event => {
                            if (event.key === 'Enter') {
                                handleNameClick()
                            }
                        }} onChange={e => setLname(e.target.value)}/>

                        <input className={styles.quiz_sbutton} type="submit" value="Start" onClick={() => handleNameClick()}/>

                        {(nameErr? (<div className={styles.quiz_snamerrr}>Invalid Name Entered. Enter Valid Name!</div>) : (<></>))}
                    </label>

                )
                }
            </div>
        </header>
    )
}

export default function Quiz() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Learn | ${siteConfig.title}`}
            description="Juka Programming Language Learning Center">

            <main>
                <QuizHeader />


            </main>
        </Layout>
    );
}
