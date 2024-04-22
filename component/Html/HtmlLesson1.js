import { Fragment } from 'react';
import classes from './HtmlLesson1.module.css'
import Htmlhead from '../Head/Htmlhead';
import Example from './ex';
const HtmlLesson1 = (props) => {
    return (
        <Fragment>
            <Htmlhead />
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
                    <Example />
                </div>

                <div className={classes.list}>
                    <div> <p className={classes.text}>Example Explained

                    </p></div>

                    <ul className={classes.ullist}>
                        <li> The &lt;!DOCTYPE html &gt; declaration defines this document to be HTML5 </li>
                        <li> The  &lt;html&gt; element is the root element of an HTML page</li>
                        <li>The &lt;head&gt; element contains meta information about the document</li>
                        <li>
                            The &lt;title&gt; element specifies a title for the document

                            </li>
                        <li>The &lt;body&gt; element contains the visible page content</li>
                        <li>The &lt;h1&gt; element defines a large heading
                                          </li>
                        <li>The &lt;p&gt; element defines a paragraph
                        </li>
                    </ul>

                </div>





            </div>


        </Fragment>
    )
}
export default HtmlLesson1