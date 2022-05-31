import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from "./tryonline.module.css";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

const code = `//Welcome to Juka Programming Language
function x(){
    printLine("Hello World!");
}
x();

`;

function ExecuteCodeClick(){
    return false;
}

function TryEditor() {
    return (
        <header className={styles.jide_container}>
            <CodeMirror
                value={code}
                height="100%"
                theme={oneDark}
                extensions={[javascript({ jsx: true })]}
                onChange={(value, viewUpdate) => {
                    console.log('value:', value);
                }}
            />
            <input type={"submit"} type="submit" value="Run Code" onClick={() => ExecuteCodeClick()} className={styles.jide_execbutton}/>
        </header>
    )
}


export default function Tryonline() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Try Online | ${siteConfig.title}`}
            description="Juka Programming Language Learning Center">
            <main>
                <h1 className={styles.tryOnlineHeader}>Juka Online Editor (Coming Soon)</h1>
                <TryEditor />
            </main>
        </Layout>
    );
}


