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
    let tabnames = [];
    let tabcodes = [];
    let tabcurrent = 1;

    let code = new URLSearchParams(location.search).get("code1");
    let tabname = new URLSearchParams(location.search).get("name1");
    tabname = tabname? tabname : 'Untitled.juk';
    code = code? code : `func main() = {
    var y = "Hello World";
    printLine(y);
}
`;

    const SaveCodeClick = () => {
        localStorage.setItem('code_tab_1', isCvalue);
    }
    const LoadCodeClick = () => {
        history.replace({
            search: '?code1='+encodeURIComponent(localStorage.getItem('code_tab_1'))
        });
    }
    const ChangeTabName = (e) => {
        setTabName(e.target.innerText);
        history.replace({
            search: '?code1='+encodeURIComponent(isCvalue)+"&name1="+e.target.innerText
        });
    }
    const GetCodeClick = () => {
        const myurl = siteConfig.url+""+location.pathname+"?code1="+encodeURIComponent(isCvalue)+"&name1="+isTabName;
        setIsError("");
        setCoutput(myurl);
        history.replace({
            search: '?code1='+encodeURIComponent(isCvalue)+"&name1="+isTabName
        });
    }

    const AddTab = () => {
        alert("Not Implemented Yet!");
    }

    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }


    const DownloadCode = () => {
        download(isTabName,isCvalue);
    }

    const UploadCode = () => {
        const selectedFile = document.getElementById('fileElem').files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setCvalue(e.target.result);
        };
        reader.readAsText(selectedFile);
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


    const [isTabName, setTabName] = useState(tabname);
    const [isLoaded, setIsLoaded] = useState(true);
    const [isError, setIsError] = useState("");
    const [isCoutput, setCoutput] = useState("");
    const [isCvalue, setCvalue] = useState(code);

    return (
        <header className={styles.jide_container}>
            <button type={"submit"} onClick={() => SaveCodeClick()} className={styles.jide_savebutton}>Save to Storage</button>
            <button type={"submit"} onClick={() => LoadCodeClick()} className={styles.jide_loadbutton}>Load from Storage</button>
            <div className={styles.jide_tab}>
                <button className={styles.jide_tab_button}><span className={styles.jide_status_neutral}>●</span> <span onBlur={(e) => ChangeTabName(e)} contentEditable={true} suppressContentEditableWarning={true}>{tabname}</span></button>
                <button className={styles.jide_plusbutton} onClick={() => AddTab()}>+</button>

            </div>

            <CodeMirror
                value={isCvalue}
                height="100%"
                theme={oneDark}
                extensions={[javascript({ jsx: true })]}
                onChange={(value, viewUpdate) => {
                    setCvalue(value);
                }}
            />
            <input type={"submit"} value={isLoaded? "Run Code": "Running..."} onClick={() => ExecuteCodeClick()} className={styles.jide_execbutton}/>
            <input type={"submit"} value={"Get Link To Code"} onClick={() => GetCodeClick()} className={styles.jide_linkbutton}/>
            <input type={"submit"} value={"Download Code"} onClick={() => DownloadCode()} className={styles.jide_dlbutton}/>
            <input type={"submit"} value={"Upload Code"} onClick={() => document.getElementById("fileElem").click()} className={styles.jide_upbutton}/>
            <input type="file" id="fileElem" multiple accept="*" className={styles.jide_hiddenupload} onChange={()=>UploadCode()} />
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


