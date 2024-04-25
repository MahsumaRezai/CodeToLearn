import { Fragment } from 'react';
import classes from './Example.module.css';

const Tagename = (props) => {
    return (
        <Fragment>
            <div className={classes.Tagename}>
                <h1>{props.title}</h1>

            </div>

        </Fragment>
    )
}
export default Tagename;