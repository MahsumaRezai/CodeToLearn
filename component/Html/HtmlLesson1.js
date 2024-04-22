import { Fragment } from 'react';
import classes from './HtmlLesson1.module.css'
import Htmlhead from '../Head/Htmlhead';
import Example from './ex';
const HtmlLesson1 = (props) => {
    return (
        <Fragment>
            <Htmlhead/>
            <div className={classes.into}>
                <div className={classes.list}>
                    <div className={classes.title}>
                        <h1>  What is HTML?</h1>
                    </div>

                    <div className={classes.instedlist}>
                        <div> <p className={classes.text}> HTML is the standard markup language for creating Web pages.</p></div>
                        <ul className={classes.ullist}>
                            <li>HTML stands for Hyper Text Markup Language</li>
                            <li>HTML describes the structure of a Web page</li>
                            <li>HTML consists of a series of elements</li>
                            <li>
                                HTML elements tell the browser how to display the content

                            </li>
                            <li>HTML elements are represented by tags</li>
                            <li>HTML tags label pieces of content such as "heading", "paragraph", "table", and so on</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <Example/>
                </div>





            </div>


        </Fragment>
    )
}
export default HtmlLesson1