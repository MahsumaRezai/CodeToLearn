import { Fragment } from 'react';
import classes from './Example.module.css';
const Example = (props) => {
    return (
        <Fragment>
            <div className={classes.title}>
                <h1> A Simple Html Document</h1>

            </div>
            <div className={classes.warrpe}>

                <div className={classes.insed}>
                    &lt; !DOCTYPE html&gt;
                <br></br>
                    <br></br>
                    &lt;head&gt;
                    <br></br>
                    <br></br>

                    &lt;title&gt;
                     Page Title

                    &lt;/title&gt;
                   <br></br>
                    <br></br>

                    &lt;/head&gt;
                   <br></br>
                    <br></br>


                    &lt;body&gt;
                <br></br>
                    <br></br>

                    &lt;h1&gt;
                    This is the html page
                    &lt;/h1&gt;
                <br></br>
                    <br></br>

                    &lt;p&gt;
                     Do you want coding
                    &lt;/p&gt;
                <br></br>
                    <br></br>

                    &lt;/body&gt;
                <br></br>
                    <br></br>

                    &lt;/html&gt;

                </div>




            </div>

        </Fragment>
    )
}
export default Example