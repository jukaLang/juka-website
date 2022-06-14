import React, {useState} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from "./tryonline.module.css";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

const code = `func x() = {
    printLine("Hello World!");
}
x();
`;



function TryEditor() {
    const ExecuteCodeClick = async () => {
        setIsLoaded(false);
        setIsError("");

        console.log(isCvalue);

        try {
            const response = await fetch('https://localhost:7054/'+isCvalue.replaceAll("\n","%0A"), {
                method: 'GET',
                mode:'cors',
            });

            if (!response.ok) {
                setIsError(`cannot load the API server! Please try again later. status: ${response.status}`);
            }

            const result = await response.json();
            if(typeof result['errors']  !== 'undefined'){
                console.log("Errors");
                setIsError(result['errors']);
            }else {
                console.log(result);
                console.log(result['output']);
                setCoutput(result['output']);
            }
        } catch (err) {
            setIsError("cannot access the API server! Please try again later." +err);
        } finally {
            setIsLoaded(true);
        }
        return false;
    };

    const [isLoaded, setIsLoaded] = useState(true);
    const [isError, setIsError] = useState("");
    const [isCoutput, setCoutput] = useState("");
    const [isCvalue, setCvalue] = useState(code);

    return (
        <header className={styles.jide_container}>
            <CodeMirror
                value={code}
                height="100%"
                theme={oneDark}
                extensions={[javascript({ jsx: true })]}
                onChange={(value, viewUpdate) => {
                    setCvalue(value);
                }}
            />
            <input type={"submit"} type="submit" value={isLoaded? "Run Code": "Running..."} onClick={() => ExecuteCodeClick()} className={styles.jide_execbutton}/>
            <br/><br/>
            {isCoutput? (<h3>Output: {isCoutput}</h3>) : (<></>)}
            {isError? (<div className={styles.jide_error}>Error: {isError}</div>) :(<></>)}
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
                <h1 className={styles.tryOnlineHeader}>Juka Online Editor (Click run to run the code)</h1>
                <TryEditor />

            </main>
        </Layout>
    );
}


