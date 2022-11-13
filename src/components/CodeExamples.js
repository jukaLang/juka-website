import React from 'react';
import styles from './CodeExamples.module.css';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function CodeExamples() {
    return (
        <Tabs>
            <TabItem value="hw" label="Hello World">

                <CodeBlock className={`language-jsx ${styles.maincodeblock}`}  showLineNumbers>{`func main() = {
    // Print Hello World
    var y = "Hello World";
    printLine(y);
}
`}</CodeBlock>

            </TabItem>
            <TabItem value="ie" label="If/Else">

                <CodeBlock className={`language-jsx ${styles.maincodeblock}`}  showLineNumbers>{`func main() = {
    var x = false;
    if ( x == true)
    {
        print("x");
    }
    else
    {
        print("y");
    }
}
`}</CodeBlock>

            </TabItem>
            <TabItem value="arr" label="Arrays">

                <CodeBlock className={`language-jsx ${styles.maincodeblock}`}  showLineNumbers>{`func main() = {
    var x = array[3];
    //x[1] = ""test"";
    print(x[0]); 
}
`}</CodeBlock>

            </TabItem>
            <TabItem value="fd" label="Function Declaration">

                <CodeBlock className={`language-jsx ${styles.maincodeblock}`}  showLineNumbers>{`func x() = {
    printLine("function x is called");
}
func main() = {
    x();
    x();
}
`}</CodeBlock>

            </TabItem>
            <TabItem value="fl" label="For Loop">

                <CodeBlock className={`language-jsx ${styles.maincodeblock}`}  showLineNumbers>{`func main() = {
    for(var i = 0; i<3; i++;)
    {
        print(i);
    }
}
`}</CodeBlock>

            </TabItem>

        </Tabs>
    );
}