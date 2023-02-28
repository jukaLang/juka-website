import React, {useState} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from "./download.module.css";
import clsx from "clsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faFileCode, faCode,faPuzzlePiece,faDesktopAlt,faSun,faCross,faBook,faGlobe,faRobot} from '@fortawesome/free-solid-svg-icons'
import { faChrome,faWindows, faApple, faLinux, faFreebsd, faRaspberryPi,faPython,faAndroid,faAppStoreIos,faUnity,faAmazon} from '@fortawesome/free-brands-svg-icons'
import BrowserOnly from "@docusaurus/BrowserOnly";

function DownloadHeader() {

    const setV = async () => {
        try {
            const response = await fetch('https://api.github.com/repos/jukaLang/juka/releases/latest');
            const result = await response.json();
            setVersion(result.tag_name);
            setChangelog(result.body.slice(15))
        } catch (err) {
            console.log("Cannot access Github" + err);
        }
    }

    const [version, setVersion] = useState("0.0.294");
    const [changelog, setChangelog] = useState("");
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
                    Juka (x64): <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Windows_X64_"+version+".zip"} >Download</a><br/>
                    Juka API (x64): <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_Windows_X64_"+version+".zip"} >Download</a><br/><br/>

                    Juka (x86-32bit):  <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Windows_X86_"+version+".zip"} >Download</a><br/>
                    Juka API (x86-32bit):  <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_Windows_X86_"+version+".zip"} >Download</a><br/><br/>

                    Juka (ARM64): <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Windows_Arm64_"+version+".zip"} >Download</a><br/>
                    Juka API (ARM64): <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_Windows_Arm64_"+version+".zip"} >Download</a><br/><br/>

                    Juka App: <a rel="noopener noreferrer" href={"https://github.com/jukaLang/JukaApp/releases/download/"+version+"/Juka_Windows_App_"+version+".msix"} >Download</a><br/>
                    Windows Store: <i>In active development, coming soon!</i><br/><br/>
                    
                </>
            ),
        },
        {
            title: "MacOS (Macintosh)",
            faIcon: {faApple}.faApple,
            description: (
                <>
                    <b>MacOS Version {version}:</b><br/>
                    <br/>
                    Juka: <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_MacOS_X64_"+version+".zip"} >Download</a><br/>
                    Juka API: <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_MacOS_X64_"+version+".zip"} >Download</a><br/>
                </>
            ),
        },
        {
            title: "Linux (32 and 64 bit)",
            faIcon: {faLinux}.faLinux,
            description: (
                <>
                    <b>Linux Version {version}:</b><br/>
                    <br/>
                    Juka (x64): <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Linux_X64_"+version+".zip"} >Download</a><br/>
                    Juka API (x64): <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_Linux_X64_"+version+".zip"} >Download</a><br/><br/>

                    Juka (x86-32bit):  <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Linux_X86_"+version+".tar.gz"} >Download</a><br/>
                    Juka API (x86-32bit):  <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Linux_X86_"+version+".tar.gz"} >Download</a><br/><br/>

                    Juka (ARM): <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Linux_Arm_"+version+".zip"} >Download</a><br/>
                    Juka API (ARM): <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_Linux_Arm_"+version+".zip"} >Download</a><br/><br/>

                    Juka (ARM64): <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Linux_Arm64_"+version+".zip"} >Download</a><br/>
                    Juka API (ARM64): <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Linux_Arm64_"+version+".zip"} >Download</a><br/>
                </>
            ),
        },
        {
            title: "FreeBSD and Unix",
            faIcon: {faFreebsd}.faFreebsd,
            description: (
                <>
                    <b>FreeBSD Version {version}:</b><br/>
                    <br/>
                    Juka: <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Unix_X64_"+version+".tar.gz"} >Download</a><br/>
                    Juka API: <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_Unix_X64_"+version+".tar.gz"} >Download</a><br/>
                </>
            ),
        },
        {
            title: "iOS and iPadOS",
            faIcon: {faAppStoreIos}.faAppStoreIos,
            description: (
                <>
                    <b>iOS Version {version}:</b><br/>
                    <br/>
                    IDE (Browser Based App): <a rel="noopener noreferrer" href={"https://ide.jukalang.com"} target={"_blank"}>https://ide.jukalang.com</a><br/>
                    Native App: <i>In active development, coming soon!</i>
                </>
            ),
        },
        {
            title: "Android and AndroidTV",
            faIcon: {faAndroid}.faAndroid,
            description: (
                <>
                    <b>Android Version {version}:</b><br/>
                    <br/>
                    IDE (Browser Based App): <a rel="noopener noreferrer" href={"https://ide.jukalang.com"} target={"_blank"}>https://ide.jukalang.com</a><br/>
                    Sideload Juka App: <a rel="noopener noreferrer" href={"https://github.com/jukaLang/JukaApp/releases/download/"+version+"/Juka_Android_App_"+version+".apk"} >Download</a><br/>
                    Google PlayStore: <i>In active development, coming soon!</i>
                </>
            ),
        },

        {
            title: "ChromeOS and ChromeOS Flex",
            faIcon: {faChrome}.faChrome,
            description: (
                <>
                    <b>ChromeOS (Flex) Version {version}:</b><br/>
                    <br/>
                    Go to and click install:  <a href={"https://ide.jukalang.com"} target={"_blank"}>https://ide.jukalang.com</a><br/>
                </>
            ),
        },

        {
            title: "Amazon Fire and Amazon Fire HD",
            faIcon: {faAmazon}.faAmazon,
            description: (
                <>
                    <b>Amazon Fire (HD) Version {version}:</b><br/>
                    <br/>
                    IDE (Browser Based App): <a rel="noopener noreferrer" href={"https://ide.jukalang.com"} target={"_blank"}>https://ide.jukalang.com</a><br/>
                    Sideload Juka App: <a rel="noopener noreferrer" href={"https://github.com/jukaLang/JukaApp/releases/download/"+version+"/Juka_Android_App_"+version+".apk"} >Download</a><br/>
                    Amazon Appstore: <i>In active development, coming soon!</i>
                </>
            ),
        },

        {
            title: "Tizen (Samsung)",
            faIcon: {faSun}.faSun,
            description: (
                <>
                    <b>Tizen (Samsung) Version {version}:</b><br/>
                    <br/>
                    IDE (Browser Based App): <a rel="noopener noreferrer" href={"https://ide.jukalang.com"} target={"_blank"}>https://ide.jukalang.com</a><br/>
                    Native App: <i>In active development, coming soon!</i>
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
                    Juka: <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Azure_Function_"+version+".zip"}>Download</a><br/>
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
                    Juka: <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Linux_Arm_"+version+".zip"} >Download</a><br/>
                    Juka API: <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_Linux_Arm_"+version+".zip"} >Download</a><br/><br/>

                    Juka (Pi 3+): <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Linux_Arm64_"+version+".zip"} >Download</a><br/>
                    Juka API (Pi 3+): <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Linux_Arm64_"+version+".zip"} >Download</a><br/><br/>

                    Juka (Win ARM64): <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Windows_Arm64_"+version+".zip"} >Download</a><br/>
                    Juka API (Win ARM64): <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_Windows_Arm64_"+version+".zip"} >Download</a><br/>
                </>
            ),
        },
        {
            title: "Jupyter Kernel",
            faIcon: {faPython}.faPython,
            description: (
                <>
                    <b>Jupyter Kernel Version 0.2:</b><br/>
                    <br/>
                    Download from PyPi:  <code>pip install juka-kernel</code><br/>
                    Repo Download: <a rel="noopener noreferrer" href={"https://github.com/jukaLang/juka-kernel"} target={"_blank"}>Download</a><br/>
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
                    .dll lib: <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Compiler_dll_"+version+".zip"} >Download</a><br/>
                </>
            ),
        },
        {
            title: "Unity",
            faIcon: {faUnity}.faUnity,
            description: (
                <>
                    <b>Unity Version {version}:</b><br/>
                    <br/>
                    Download from NuGet.org:  <a rel="noopener noreferrer" href={"https://www.nuget.org/api/v2/package/JukaCompiler"}>Download</a><br/>
                    Other Versions: <a rel="noopener noreferrer" href={"https://www.nuget.org/packages/JukaCompiler"} target={"_blank"}>Download</a><br/>
                </>
            ),
        },
        {
            title: "Web Assembly",
            faIcon: {faPuzzlePiece}.faPuzzlePiece,
            description: (
                <>
                    <b>Web Assembly Version {version}:</b><br/>
                    <br/>
                    Latest:  <a rel="noopener noreferrer" href={"https://github.com/jukaLang/JukaIDE/releases/download/"+version+"/Juka_IDE_"+version+".zip"} >Download version {version}</a><br/>
                    Repo Download: <a rel="noopener noreferrer" href={"https://github.com/jukaLang/JukaIDE"} target={"_blank"} >Download</a><br/><br/>

                    Online: <a rel="noopener noreferrer" href={"https://ide.jukalang.com"} target={"_blank"} >https://ide.jukalang.com</a><br/>
                </>
            ),
        },
        {
            title: "Bots",
            faIcon: {faRobot}.faRobot,
            description: (
                <>
                    <b>Bot Version {version}:</b><br/>
                    <br/>
                    Telegram: Message @jukaLangBot<br/>
                    Discord (for your channel): <a rel="noopener noreferrer" href={"https://t.co/OaOE0TtvVK"} target={"_blank"} >Install App</a><br/><br/>

                    Discord (our channel): <a rel="noopener noreferrer" href={"https://discord.gg/MsKWsErzfp"} target={"_blank"} >https://discord.gg/MsKWsErzfp</a><br/>
                </>
            ),
        },
        {
            title: "Temple OS",
            faIcon: {faCross}.faCross,
            description: (
                <>
                    <b>TempleOS:</b><br/>
                    <br/>
                    Follow Instructions:  <a rel="noopener noreferrer" href={"https://github.com/jukaLang/JukaForTempleOS"} target={"_blank"} >https://github.com/jukaLang/JukaForTempleOS</a><br/>
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
                    VirtualBox Image Download: <a rel="noopener noreferrer" href={"https://github.com/jukaLang/jukaVM/releases/download/0.0.1/JukaVM.ova"} >Download</a><br/>
                    Download other versions: <a rel="noopener noreferrer" href={"https://github.com/jukaLang/jukaVM/releases"} target={"_blank"} >Download</a><br/>
                </>
            ),
        },
        {
            title: "Online Versions",
            faIcon: {faGlobe}.faGlobe,
            description: (
                <>
                    <b>Online Versions:</b><br/>
                    <br/>
                    API: <a rel="noopener noreferrer" href={"https://api.jukalang.com"} target={"_blank"}>https://api.jukalang.com</a><br/>
                    Web IDE (Can run locally): <a rel="noopener noreferrer" href={"https://ide.jukalang.com"} target={"_blank"}>https://ide.jukalang.com</a><br/>
                </>
            ),
        },
        {
            title: "Documentation",
            faIcon: {faBook}.faBook,
            description: (
                <>
                    <b>Documentation:</b><br/>
                    <br/>
                    PDF: <a rel="noopener noreferrer" href={"https://github.com/jukaLang/juka-website/releases/download/JukaLang/jukadocs.pdf"} >Download</a><br/>
                    You can also install the Juka Website App by bookmarking the page on mobile device, or on desktop by clicking the install app button near the URL bar.
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
                    Latest: <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka/archive/refs/tags/"+version+".zip"}>Download</a><br/>
                    Other Versions: <a rel="noopener noreferrer" href={"https://github.com/jukaLang/Juka"} target={"_blank"}>Build</a><br/>
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
                        if(navigator.maxTouchPoints > 0){
                            userOSEntry = OSList[4]; //iPadOS
                        } else {
                            userOSEntry = OSList[1]; //Mac
                        }
                    } else if (iosPlatforms.indexOf(platform) !== -1) {
                        userOSEntry = OSList[4];
                    } else if (windowsPlatforms.indexOf(platform) !== -1) {
                        userOSEntry = OSList[0];
                    } else if(/(?:; ([^;)]+) Build\/.*)?\bSilk\/([0-9._-]+)\b(.*\bMobile Safari\b)?/.test(userAgent)) {
                        userOSEntry = OSList[7];
                    } else if (/Android/.test(userAgent)) {
                        userOSEntry = OSList[5];
                    } else if (/TV/.test(userAgent)) {
                        userOSEntry = OSList[5];
                    } else if (/Linux/.test(platform)) {
                        if (userAgent.indexOf('Win64')){
                            userOSEntry = OSList[5];  //(some) Android TV Browsers
                        }
                        userOSEntry = OSList[2]; //Actual Linux
                    } else if (userAgent.indexOf('X11') !== -1) {
                        userOSEntry = OSList[3];
                    } else if (userAgent.indexOf('CrOS') !== -1) {
                        userOSEntry = OSList[6];
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

                        <h3>Your current OS doesn't seem to be supported by Juka right now. Try using the IDE (Web App) version:</h3>

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

                <br/>
                <h2>Changelog</h2>
                <section className={styles.changelog}>
                    <div className="container">
                        <div className="row">
                            <div className={clsx('col col--4')} />
                            <div className={clsx('col col--4', styles.fontagap)}>
                                <div className={clsx("text--center padding-horiz--md",styles.changelog2)}>
                                    <strong>New in version {version}:</strong> {changelog}
                                    <br/><br/>
                                    <strong>Get the latest nightly builds at:</strong><br/>
                                    <a rel="noopener noreferrer" href="https://github.com/jukaLang/Juka/releases" target={"_blank"}>https://github.com/jukaLang/Juka/releases</a>
                                    <br/><br/>
                                    <strong>Want to try Juka without downloading anything?</strong><br/>
                                    <a href={"/tryonline"}>Click here to try Juka Online</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
