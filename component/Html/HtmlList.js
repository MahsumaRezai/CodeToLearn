import { Fragment } from "react";
import classes from './HtmlLesson1.module.css';

const HtmlList = (props) => {
    return (
        <Fragment>
            <div className={classes.list}>
                <div className={classes.title}>
                    <h1>The href Attribute</h1>

                </div>
                <div> <p className={classes.text}> HTML links are defined with the &lt;a&gt; tag. The link address is specified in the href attribute

                    </p></div>

                <ul className={classes.ullist}>

                    <li>You will learn more about links and the &lt;a&gt; tag later in this tutorial.</li>

                </ul>

            </div>
        </Fragment>
    )
}
export default HtmlList;