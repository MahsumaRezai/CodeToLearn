import { Fragment } from 'react';
import classes from './Background.module.css';

const BackgroundColor = (props) => {
    return (
        <Fragment>
            <div className={classes.list}>
                <h1>Background Color</h1>
                <p>You can set the background color for HTML elements:</p>
                <div className={classes.paraback}><h3>Hello World</h3></div>
                <div className={classes.textback}>
                    <p>  Coding is the process of creating instructions that computers then interpret and follow
                     Coding is also known as programming – even though a lot of people would argue there is a slight difference
                      between the two,coding and programming still reference the same general process in the long run.
                      People who code are known as programmers or developers, and the set of instructions they pass on to a computer
                      is called a program.</p>
                </div>
            </div>


        </Fragment>
    )
}
export default BackgroundColor;

