import { Fragment } from 'react';
import classes from './Example.module.css';
const Tip = (props) => {
    return (
        <Fragment>
            <div className={classes.tip}>
                <h3>{props.title}</h3>
            </div>

        </Fragment>
    )
}
export default Tip;