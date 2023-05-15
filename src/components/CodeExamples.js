import React from 'react';
import styles from './CodeExamples.module.css';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function CodeExamples() {
    return (
        <Tabs>
            <TabItem value="hw" label="Hello World">

                <CodeBlock className={`language-py ${styles.maincodeblock}`}  showLineNumbers>{`# No Print Statements! strings and variables are printed unless assigned or suppressed by ;
"Hello World"
`}</CodeBlock>

            </TabItem>
            <TabItem value="ie" label="If/Else">

                <CodeBlock className={`language-py ${styles.maincodeblock}`}  showLineNumbers>{`# Simple if/else statements, but unlike python, there are no space indentation
x = TRUE
if x == TRUE {
    "true"
}
else if x== FALSE {
    "false"
}
else
{
    "Something went wrong!"
}
`}</CodeBlock>

            </TabItem>
            <TabItem value="mt" label="Multi Threading">

                <CodeBlock className={`language-py ${styles.maincodeblock}`}  showLineNumbers>{`# Native support for Multi threading and Multi processing using sub and <=>
# This works by making a smart copy of existing variables, one subroutine doesn't modify other
x = 5
sub add{
   x+x
}
sub subtract{
   x-x
}

sub multiply{
   x*x
}

z = add <=> subtract <=> multiply  # Executes subroutines in parallel and waits until the execution is finished before proceeding 
# Variables are returned as a named array
z['add'] # prints 10
`}</CodeBlock>

            </TabItem>
            <TabItem value="arr" label="Arrays">

                <CodeBlock className={`language-py ${styles.maincodeblock}`}  showLineNumbers>{`# Arrays are similar to Python except that they are all "Named" and indexed by 1 for simplicity
arr = []
arr = [3]  # Creates an Array at index 1
arr = arr + ["Hello": 3, 5] # Add to an array, internally it is represented as [1:3,"Hello":3,3:5]
# You can use either "string literal" to get by name or an integer to get by index.
# The following two statements are equivalent:
arr["Hello"]
arr[2]
# Similarly, in both cases this will yield 3
arr["1"]
arr[1]
# By default, an element has a type null. Therefore, the following will be equivalent to deleting a value
arr[1] = null
arr = arr + [1: null]
# For Fast Arithmetic use "int" and "double" arrays. Note array indices will be dropped and flattened
intarr = iarr([32,33,35],size=(2,2)) # Creates a  2D integer matrix
doubarr = darr([55,33,11])
`}</CodeBlock>

            </TabItem>
            <TabItem value="fd" label="Subroutines">

                <CodeBlock className={`language-py ${styles.maincodeblock}`}  showLineNumbers>{`# Juka doesn't have functions, instead it has subroutines and can have input variables
x = 5
y = 2
# when subroutines have input, they only copy variables that are passed to them.
sub multiply(x,y){
   x*y   # last element is always returned
}
# when subroutines don't have input, a smart copy of variables is used
sub multiply2{
    x*y
}

z = multiply(x,y) <=> multiply2 <=> multiply(y,x)
z['multiply'][1] == z['multiply2'] == z['multiply'][2]
`}</CodeBlock>

            </TabItem>
            <TabItem value="fl" label="Loops">

                <CodeBlock className={`language-py ${styles.maincodeblock}`}  showLineNumbers>{`# The Loops are like in Python except you use brackets
for i in iarr[1:32]{ # List comprehensions are same as Python
    i  # Prints list 1-32
}
`}</CodeBlock>

            </TabItem>

        </Tabs>
    );
}