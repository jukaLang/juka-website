import React, {useState} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from "./tryonline.module.css";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { useLocation, useHistory } from 'react-router-dom';

function TryEditor() {
    const {siteConfig} = useDocusaurusContext();
    const location = useLocation();
    const history = useHistory();
    let code = new URLSearchParams(location.search).get("code");
    code = code? code : `func x() = {
    string y = "Hello World";
    printLine(y);
    printLine("It works!");
}
x();
`;
    const GetCodeClick = () => {
        const myurl = siteConfig.url+""+location.pathname+"?code="+isCvalue.replaceAll("\n","%0A");
        history.push({
            search: '?code='+isCvalue.replaceAll("\n","%0A")
        });
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
            <div className={styles.jide_tab}>
                <button className={styles.jide_tab_button}><span className={styles.jide_status_neutral}>●</span> Untitled.juk</button>
            </div>

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


