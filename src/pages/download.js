import React, {useState} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from "./download.module.css";
import clsx from "clsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faFileCode, faCode,faPuzzlePiece,faDesktopAlt,faT} from '@fortawesome/free-solid-svg-icons'
import { faWindows, faApple, faLinux, faFreebsd, faRaspberryPi,faPython,faAndroid,faAppStoreIos,faUnity} from '@fortawesome/free-brands-svg-icons'
import BrowserOnly from "@docusaurus/BrowserOnly";

function DownloadHeader() {

    const setV = async () => {
        try {
            const response = await fetch('https://api.github.com/repos/jukaLang/juka/tags');
            const result = await response.json();
            setVersion(result[0].name);
        } catch (err) {
            console.log("Cannot access Github" + err);
        }
    }

    const [version, setVersion] = useState("0.0.123");
    setV();

    function BigDownloadList() {
        return (
            <section className={styles.features}>
                <div className="container">
                    <div className="row">
                        {OSList.map((props, idx) => (
                            <OSTag key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
    const OSList = [
        {
            title: "Windows",
            faIcon: {faWindows}.faWindows,
            description: (
                <>
                    <b>Windows Version {version}:</b><br/>
                    <br/>
                    Juka (x64): <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_WindowsX64_"+version+".zip"} >Download</a><br/>
                    Juka API (x64): <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_WindowsX64_"+version+".zip"} >Download</a><br/><br/>

                    Juka (x86-32bit):  <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_WindowsX86_"+version+".zip"} >Download</a><br/>
                    Juka API (x86-32bit):  <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_WindowsX86_"+version+".zip"} >Download</a><br/><br/>

                    Juka (ARM64): <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_WindowsARM64_"+version+".zip"} >Download</a><br/>
                    Juka API (ARM64): <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_WindowsARM64_"+version+".zip"} >Download</a><br/>
                </>
            ),
        },
        {
            title: "MacOS",
            faIcon: {faApple}.faApple,
            description: (
                <>
                    <b>MacOS Version {version}:</b><br/>
                    <br/>
                    Juka: <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_MacOS_"+version+".zip"} >Download</a><br/>
                    Juka API: <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_MacOS_"+version+".zip"} >Download</a><br/>
                </>
            ),
        },
        {
            title: "Linux",
            faIcon: {faLinux}.faLinux,
            description: (
                <>
                    <b>Linux Version {version}:</b><br/>
                    <br/>
                    Juka (x64): <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Linux_"+version+".zip"} >Download</a><br/>
                    Juka API (x64): <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_Linux_"+version+".zip"} >Download</a><br/><br/>

                    Juka (x86-32bit):  <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_LinuxX86_"+version+".tar.gz"} >Download</a><br/>
                    Juka API (x86-32bit):  <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_LinuxX86_"+version+".tar.gz"} >Download</a><br/><br/>

                    Juka (ARM): <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_LinuxARM_RaspberryPI_"+version+".zip"} >Download</a><br/>
                    Juka API (ARM): <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_LinuxARM_RaspberryPI_"+version+".zip"} >Download</a><br/><br/>

                    Juka (ARM64): <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_LinuxARM64_"+version+".zip"} >Download</a><br/>
                    Juka API (ARM64): <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_LinuxARM64_"+version+".zip"} >Download</a><br/>
                </>
            ),
        },
        {
            title: "FreeBSD",
            faIcon: {faFreebsd}.faFreebsd,
            description: (
                <>
                    <b>FreeBSD Version {version}:</b><br/>
                    <br/>
                    Juka: <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_FreeBSD_"+version+".tar.gz"} >Download</a><br/>
                    Juka API: <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_FreeBSD_"+version+".tar.gz"} >Download</a><br/>
                </>
            ),
        },
        {
            title: "iOS",
            faIcon: {faAppStoreIos}.faAppStoreIos,
            description: (
                <>
                    <b>iOS Version {version}:</b><br/>
                    <br/>
                    <i>In active development, coming soon!</i>
                </>
            ),
        },
        {
            title: "Android",
            faIcon: {faAndroid}.faAndroid,
            description: (
                <>
                    <b>Android Version {version}:</b><br/>
                    <br/>
                    <i>In active development, coming soon!</i>
                </>
            ),
        },

        {
            title: "Tizen",
            faIcon: {faT}.faT,
            description: (
                <>
                    <b>Tizen Version {version}:</b><br/>
                    <br/>
                    <i>In active development, coming soon!</i>
                </>
            ),
        },

        {
            title: "Microsoft Azure Server",
            faIcon: {faServer}.faServer,
            description: (
                <>
                    <b>Azure Version {version}:</b><br/>
                    <br/>
                    Juka: <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Azure_Function_"+version+".zip"}>Download</a><br/>
                </>
            ),
        },

        {
            title: "Raspberry Pi",
            faIcon: {faRaspberryPi}.faRaspberryPi,
            description: (
                <>
                    <b>RespberryPi Version {version}:</b><br/>
                    <br/>
                    Juka: <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_LinuxARM_RaspberryPI_"+version+".zip"} >Download</a><br/>
                    Juka API: <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_LinuxARM_RaspberryPI_"+version+".zip"} >Download</a><br/><br/>

                    Juka (Pi 3+): <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_LinuxARM64_"+version+".zip"} >Download</a><br/>
                    Juka API (Pi 3+): <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_LinuxARM64_"+version+".zip"} >Download</a><br/><br/>

                    Juka (Win ARM64): <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_WindowsARM64_"+version+".zip"} >Download</a><br/>
                    Juka API (Win ARM64): <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_WindowsARM64_"+version+".zip"} >Download</a><br/>
                </>
            ),
        },
        {
            title: "C# DLL",
            faIcon: {faFileCode}.faFileCode,
            description: (
                <>
                    <b>C# .dll Version {version}:</b><br/>
                    <br/>
                    NuGet: Search for JukaCompiler or run <code>Install-Package JukaCompiler -version {version}</code><br/>
                    .dll lib: <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Compiler_dll_"+version+".zip"} >Download</a><br/>
                </>
            ),
        },
        {
            title: "Unity",
            faIcon: {faUnity}.faUnity,
            description: (
                <>
                    <b>Unity {version}:</b><br/>
                    <br/>
                    Download from NuGet.org:  <a href={"https://www.nuget.org/api/v2/package/JukaCompiler"}>Download</a><br/>
                    Other Versions: <a href={"https://www.nuget.org/packages/JukaCompiler"} target={"_blank"}>Download</a><br/>
                </>
            ),
        },
        {
            title: "Jupyter Kernel",
            faIcon: {faPython}.faPython,
            description: (
                <>
                    <b>Jupyter Kernel:</b><br/>
                    <br/>
                    Download from PyPi:  <code>pip install juka_kernel</code><br/>
                    Repo Download: <a href={"https://github.com/jukaLang/juka_kenel"} target={"_blank"}>Download</a><br/>
                </>
            ),
        },

        {
            title: "Web Assembly",
            faIcon: {faPuzzlePiece}.faPuzzlePiece,
            description: (
                <>
                    <b>Web Assembly {version}:</b><br/>
                    <br/>
                    Latest:  <a href={"https://github.com/jukaLang/juka-webassembly/releases/download/"+version+"/Juka_WebAssembly_"+version+".zip"} >Download version {version}</a><br/>
                    Repo Download: <a href={"https://github.com/jukaLang/juka-webassembly"} target={"_blank"} >Download</a><br/>
                </>
            ),
        },
        {
            title: "Virtual Machine Image",
            faIcon: {faDesktopAlt}.faDesktopAlt,
            description: (
                <>
                    <b>VM Image:</b><br/>
                    <br/>
                    VirtualBox Image Download: <a href={"https://github.com/jukaLang/jukaVM/releases/download/0.0.1/JukaVM.ova"} >Download</a><br/>
                    Download other versions: <a href={"https://github.com/jukaLang/jukaVM/releases"} target={"_blank"} >Download</a><br/>
                </>
            ),
        },
        {
            title: "Build From Source",
            faIcon: {faCode}.faCode,
            description: (
                <>
                    <b>Source Version {version}:</b><br/>
                    <br/>
                    Latest: <a href={"https://github.com/jukaLang/Juka/archive/refs/tags/"+version+".zip"}>Download</a><br/>
                    Other Versions: <a href={"https://github.com/jukaLang/Juka"} target={"_blank"}>Build</a><br/>
                </>
            ),
        },
    ];

    function OSTag({title, faIcon, description}) {
        return (
            <div className={clsx('col col--4', styles.fontagap)}>
                <div className="text--center padding-horiz--md">

                    <FontAwesomeIcon icon={faIcon} className={styles.fontawe} />
                    <br/><br/>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        );
    }

    const TryDetectDownload = () => {
        return (
            <BrowserOnly>
                {() => {
                    let userAgent = window.navigator.userAgent,
                        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
                        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
                        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
                        iosPlatforms = ['iPhone', 'iPad', 'iPod'];


                    let userOSEntry = {};
                    if (macosPlatforms.indexOf(platform) !== -1) {
                        userOSEntry = OSList[1];
                    } else if (iosPlatforms.indexOf(platform) !== -1) {
                        userOSEntry = OSList[4];
                    } else if (windowsPlatforms.indexOf(platform) !== -1) {
                        userOSEntry = OSList[0];
                    } else if (/Android/.test(userAgent)) {
                        userOSEntry = OSList[5];
                    } else if (/Linux/.test(platform)) {
                        userOSEntry = OSList[2];
                    } else if (userAgent.indexOf('X11') !== -1) {
                        userOSEntry = OSList[3];
                    }

                    return (Object.keys(userOSEntry).length !== 0) ? (<><h3>It seems that you are using {userOSEntry.title}: </h3>
                        <section className={styles.features}>
                            <div className="container">
                                <div className="row">
                                    <div className={clsx('col col--4')} />
                                    <OSTag {...userOSEntry} />
                                </div>
                            </div>
                        </section></>) : (<>

                        <h3>Your current OS doesn't seem to be supported by Juka right now. Try using the webassembly version:</h3>

                            <section className={styles.features}>
                                <div className="container">
                                    <div className="row">
                                        <div className={clsx('col col--4')} />
                                        <OSTag {...OSList[10]} />
                                    </div>
                                </div>
                            </section>
                        </>)
                }
                }
            </BrowserOnly>
        );
    };



    return (
        <header>
            <h1 className={styles.Header}>Download Latest Version of Juka Programming Language</h1>
            <div className={styles.learn}>
                <TryDetectDownload/>
                <div className={styles.nightly}>

                    Get the latest nightly builds at:
                    <div><a href="https://github.com/jukaLang/Juka/releases" target={"_blank"}>https://github.com/jukaLang/Juka/releases</a></div>

                    <div>Want to try Juka without downloading anything?</div>
                    <a href={"/tryonline"}>Click here to try Juka Online</a>

                </div>

                <br/><br/>
                <h2> List of all available Downloads:</h2>
                <BigDownloadList/>
            </div>
        </header>
    )
}

export default function Home() {

    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Download | ${siteConfig.title}`}
            description="Download Juka Programming Language">

            <main>
                <DownloadHeader />
            </main>
        </Layout>
    );
}
