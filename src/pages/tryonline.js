import React, {useState} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from "./tryonline.module.css";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { useLocation, useHistory } from 'react-router-dom';
import CodeBlock from '@theme/CodeBlock';

function TryEditor() {
    const {siteConfig} = useDocusaurusContext();
    const location = useLocation();
    const history = useHistory();
    let code = new URLSearchParams(location.search).get("code");
    code = code? code : `func x() = {
    string y = "Hello World";
    printLine(y);
}
x();
`;

    const SaveCodeClick = () => {
        localStorage.setItem('code_tab_1', isCvalue);
    }
    const LoadCodeClick = () => {
        history.replace({
            search: '?code='+encodeURIComponent(localStorage.getItem('code_tab_1'))
        });
    }
    const GetCodeClick = () => {
        const myurl = siteConfig.url+""+location.pathname+"?code="+encodeURIComponent(isCvalue);
        setIsError("");
        setCoutput(myurl);
        history.replace({
            search: '?code='+encodeURIComponent(isCvalue)
        });
    }
    const ExecuteCodeClick = async () => {
        setIsLoaded(false);
        setIsError("");
        setCoutput("");

        try {
            const response = await fetch('https://api.jukalang.com/'+encodeURIComponent(isCvalue), {
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
            <button type={"submit"} onClick={() => SaveCodeClick()} className={styles.jide_savebutton}>Save to Storage</button>
            <button type={"submit"} onClick={() => LoadCodeClick()} className={styles.jide_loadbutton}>Load from Storage</button>
            <div className={styles.jide_tab}>
                <button className={styles.jide_tab_button}><span className={styles.jide_status_neutral}>●</span> Untitled.juk</button>
                <button className={styles.jide_plusbutton}>+</button>

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
            {isCoutput? (<CodeBlock title="Result:">{isCoutput}</CodeBlock>) : (<></>)}
            {isError? (<div className={styles.jide_error}><CodeBlock title={"Error:"}>{isError}</CodeBlock></div>) :(<></>)}
        </header>
    )
}


export default function Tryonline() {
    const {siteConfig} = useDocusaurusContext();

    return (
        <Layout
            title={`Try Online | ${siteConfig.title}`}
            description="Try Juka Online">
            <main>
                <h1 className={styles.tryOnlineHeader}>Juka Online Editor</h1>
                <TryEditor />

            </main>
        </Layout>
    );
}


