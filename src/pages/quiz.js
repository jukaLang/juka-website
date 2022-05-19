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
    const [name, setName] = useState("");
    const [nset, setNset] = useState(false);
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
        setNset(true);
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
        let certificateData = document.getElementById('certificate').innerHTML;
        let printWindow = window.open("", "", "width=800, height=600");
        printWindow.document.write(certificateData);
        printWindow.print();
        printWindow.close();
    };

    return (
        <header className={clsx('hero hero--primary', styles.quiz)}>
            <div className="container">
                <h1>Juka Quiz</h1>
                { nset ? (
                        showScore ? (
                            <div className='score-section'>
                                You scored {score} out of {questions.length}
                                {(score > questions.length*.80) ? (
                                    <div>
                                        <button onClick={() => printCertificate()}>Print Certificate</button>
                                        <div id="certificate">
                                            <div style={cert_styles}>
                                                <h1>Certificate of Completion</h1>
                                                <h2>This certificate is presented to</h2>
                                                <h2>{name}</h2>
                                                <h2>for completing the course</h2>
                                                <h2>Juka Fundamentals</h2>
                                                <h2>Issued on: {date()}</h2>
                                                <h2>Signed: <img Width={22} Height={22} src={logovg}/> Juka Team </h2>
                                            </div>
                                        </div>


                                    </div>
                                ) :(<div><a href="/quiz">Try again?</a></div>)}
                            </div>
                        ) : (
                            <>
                                <div className='question-section'>
                                    <div className='question-count'>
                                        <span>Question {currentQuestion + 1}</span>/{questions.length}
                                    </div>
                                    <div className='question-text'>{questions[currentQuestion].questionText}</div>
                                </div>
                                <div className='answer-section'>
                                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                                        <button
                                            onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                    ))}
                                </div>
                            </>
                        )
                ) : (
                    <label>
                        Please enter your full name: <br/>
                        <input type="text" placeholder="John Smith" value={name} onKeyPress={event => {
                            if (event.key === 'Enter') {
                                handleNameClick()
                            }
                        }} onChange={e => setName(e.target.value)}/>
                        <input type="submit" value="Start" onClick={() => handleNameClick()}/>
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
