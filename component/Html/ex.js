import { Fragment } from 'react';
import classes from './Example.module.css'
const Example = (props) => {
    return (
        <Fragment>
            <div className={classes.title}>
                <h1>Example</h1>

            </div>
            <div className={classes.warrpe}>

                <div className={classes.insed}>
                    &lt;html&gt;
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