import { Fragment } from 'react';
import classes from './Example.module.css';

const Tagename = (props) => {
    return (
        <Fragment>
            <div className={classes.Tagename}>
                <h1>&lt;tagname&gt;content goes here...&lt;/tagname&gt;</h1>

            </div>

        </Fragment>
    )
}
export default Tagename;