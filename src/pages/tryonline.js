import React, {useState} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from "./tryonline.module.css";
import Editor from "@monaco-editor/react";
import { useLocation, useHistory } from 'react-router-dom';
import CodeBlock from '@theme/CodeBlock';

function TryEditor() {
    const {siteConfig} = useDocusaurusContext();
    const location = useLocation();
    const history = useHistory();
    let tabnames = [];
    let tabcodes = [];
    let tempcode = null;
    let temptab = null;

    let mytabs = 1;
    while(true){
        tempcode = new URLSearchParams(location.search).get("code"+mytabs);
        if(tempcode == null){
            break;
        }
        temptab = new URLSearchParams(location.search).get("name"+mytabs);
        if(temptab == null){
           temptab = "Untitled.juk";
        }
        tabnames.push(temptab);
        tabcodes.push(tempcode);
        mytabs += 1;
    }

    if(tabcodes.length === 0){
        temptab = 'Untitled.juk';
        tempcode = `func main() = {
    var y = "Hello World";
    printLine(y);
}
`;
        tabnames.push(temptab);
        tabcodes.push(tempcode);
    }

    let tabcurrent = new URLSearchParams(location.search).get("cur") ?? 1;

    if(tabcodes.length < tabcurrent){
        tabcurrent = 1;
    }


    const SaveCodeClick = () => {
        localStorage.setItem('code_tab_1', isCvalue);
    }
    const LoadCodeClick = () => {
        history.replace({
            search: '?code'+tabcurrent+'='+encodeURIComponent(localStorage.getItem('code_tab_1'))
        });
    }
    const ChangeTabName = (e) => {
        setTabName(e.target.innerText);
        history.replace({
            search: '?code'+tabcurrent+'='+encodeURIComponent(isCvalue)+'&name'+tabcurrent+'='+e.target.innerText
        });
    }
    const GetCodeClick = () => {
        const myurl = siteConfig.url+''+location.pathname+'?code'+tabcurrent+'='+encodeURIComponent(isCvalue)+'&name'+tabcurrent+'='+isTabName;
        setIsError("");
        setCoutput(myurl);
        history.replace({
            search: '?code'+tabcurrent+'='+encodeURIComponent(isCvalue)+'&name'+tabcurrent+'='+isTabName
        });
    }

    const AddTab = () => {
        alert("Not Implemented Yet!");

        let temptab = 'Untitled.juk';
        let tempcode = `func main() = {
    var y = "Hello World";
    printLine(y);
}
`;
        tabnames.push(temptab);
        tabcodes.push(tempcode);
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


    const [isTabName, setTabName] = useState(tabnames[tabcurrent-1]);
    const [isLoaded, setIsLoaded] = useState(true);
    const [isError, setIsError] = useState("");
    const [isCoutput, setCoutput] = useState("");
    const [isCvalue, setCvalue] = useState(tabcodes[tabcurrent-1]);

    const [tabState, setTabState] = useState(tabnames);
    const [tabCurrent, setTabCurrent] = useState(tabcurrent);
    const [tabCodes, setTabCodes] = useState(tabcodes);



    function GenerateTabs() {
        return (
            <div>
            {tabState.map((gentabname) => (
                <button className={styles.jide_tab_button}><span className={styles.jide_status_neutral}>●</span> <span onBlur={(e) => ChangeTabName(e)} contentEditable={true} suppressContentEditableWarning={true}>{gentabname}</span></button>
            ))}
            </div>
        );
    }

    function setEditorTheme(monaco) {
        monaco.languages.register({id:"juka"});
        monaco.languages.setMonarchTokensProvider("juka", {
            func: ['func'],
            keyword: [
                'abstract', 'continue', 'for', 'new', 'switch', 'assert', 'goto', 'do',
                'if', 'private', 'this', 'break', 'protected', 'throw', 'else', 'public',
                'enum', 'return', 'catch', 'try', 'interface', 'static', 'class',
                'finally', 'const', 'super', 'while', 'true', 'false', 'var'
            ],
            operators: [
                '=', '>', '<', '!', '~', '?', ':', '==', '<=', '>=', '!=',
                '&&', '||', '++', '--', '+', '-', '*', '/', '&', '|', '^', '%',
                '<<', '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=', '^=',
                '%=', '<<=', '>>=', '>>>='
            ],
            symbols: /[=><!~?:&|+\-*\/^%]+/,
            escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
            tokenizer: {
                root: [
                    [/[a-z_$][\w$]*/, {
                        cases: {
                            '@func': 'func',
                            '@keyword': 'keyword',
                            '@default': 'identifier'
                        }
                    }],
                    [/[A-Z][\w$]*/, 'type.identifier'],

                    // whitespace
                    { include: '@whitespace' },

                    // delimiters and operators
                    [/[{}()\[\]]/, '@brackets'],
                    [/[<>](?!@symbols)/, '@brackets'],
                    [/@symbols/, {
                        cases: {
                            '@operators': 'operator',
                            '@default': ''
                        }
                    }],

                    // @ annotations.
                    // As an example, we emit a debugging log message on these tokens.
                    // Note: message are supressed during the first load -- change some lines to see them.
                    [/@\s*[a-zA-Z_\$][\w\$]*/, { token: 'annotation', log: 'annotation token: $0' }],

                    // numbers
                    [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
                    [/0[xX][0-9a-fA-F]+/, 'number.hex'],
                    [/\d+/, 'number'],

                    // delimiter: after number because of .\d floats
                    [/[;,.]/, 'delimiter'],

                    // strings
                    [/"([^"\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
                    [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],

                    // characters
                    [/'[^\\']'/, 'string'],
                    [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
                    [/'/, 'string.invalid']
                ],

                comment: [
                    [/[^\/*]+/, 'comment'],
                    [/\/\*/, 'comment', '@push'],    // nested comment
                    ["\\*/", 'comment', '@pop'],
                    [/[\/*]/, 'comment']
                ],

                string: [
                    [/[^\\"]+/, 'string'],
                    [/@escapes/, 'string.escape'],
                    [/\\./, 'string.escape.invalid'],
                    [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
                ],

                whitespace: [
                    [/[ \t\r\n]+/, 'white'],
                    [/\/\*/, 'comment', '@comment'],
                    [/\/\/.*$/, 'comment'],
                ],
            }
        });
        monaco.editor.defineTheme("juka", {
            base: "vs-dark",
            inherit: true,
            rules: [
                {
                    token: "func",
                    foreground: '#00e0bc',
                },
                {
                    token: "keyword",
                    foreground: '#FF4500',
                },
                {
                    token: "number",
                    foreground: '#54a154',
                },
                {
                    token: "comment",
                    foreground: '#888ed1',
                },
            ],
            colors: {
                "editor.background": '#21252b',
            },
        });
    }

    return (
        <header className={styles.jide_container}>
            Want to compile and run offline? Visit <a rel="noopener noreferrer" href={"https://wasm.jukalang.com"} target={"_blank"}>https://wasm.jukalang.com</a><br/><br/>

            <button type={"submit"} onClick={() => SaveCodeClick()} className={styles.jide_savebutton}>Save to Storage</button>
            <button type={"submit"} onClick={() => LoadCodeClick()} className={styles.jide_loadbutton}>Load from Storage</button>
            <div className={styles.jide_tab}>


                <GenerateTabs/>


                <button className={styles.jide_plusbutton} onClick={() => AddTab()}>+</button>
            </div>



            <Editor
                defaultValue={isCvalue}
                height="40vh"
                defaultLanguage="juka"
                beforeMount={setEditorTheme}
                theme="juka"
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


