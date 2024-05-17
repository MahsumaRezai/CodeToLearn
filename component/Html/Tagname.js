import { Fragment } from 'react';
import classes from './Example.module.css';
const Tagename = (props) => {
    return (
        <Fragment>
            <div className={classes.Tagename}>
                <h1>{props.title}</h1>
                <h2>{props.para}</h2>
                
            </div>

        </Fragment>
    )
}
export default Tagename;