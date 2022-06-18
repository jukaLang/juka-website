import React, {useState} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from "./tryonline.module.css";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';


const queryParams = new URLSearchParams(window.location.search)
var code = queryParams.get("code")
code = code? code : `func x() = {
    string y = "Hello World";
    printLine(y);
    printLine("It works!");
}
x();
`;



function TryEditor() {
    const GetCodeClick = () => {
        const myurl = location.protocol + '//' + location.host + location.pathname+"?code="+isCvalue.replaceAll("\n","%0A");
        setCoutput(myurl);
    }
    const ExecuteCodeClick = async () => {
        setIsLoaded(false);
        setIsError("");

        console.log(isCvalue);

        try {
            const response = await fetch('https://jukaapi-prod-juka-5ufe4u.mo1.mogenius.io/'+isCvalue.replaceAll("\n","%0A"), {
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
            <input type={"submit"} value={isLoaded? "Run Code": "Running..."} onClick={() => ExecuteCodeClick()} className={styles.jide_execbutton}/>
            <input type={"submit"} value={"Get Link To Code"} onClick={() => GetCodeClick()} className={styles.jide_linkbutton}/>
            <br/><br/>
            {isCoutput? (<div><b>Output:</b><br/><pre>{isCoutput}</pre></div>) : (<></>)}
            {isError? (<pre className={styles.jide_error}>Error: {isError}</pre>) :(<></>)}
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
                <h1 className={styles.tryOnlineHeader}>Juka Online Editor</h1>
                <TryEditor />

            </main>
        </Layout>
    );
}


