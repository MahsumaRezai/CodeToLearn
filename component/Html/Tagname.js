import { Fragment } from 'react';
import classes from './Example.module.css';
import Example from './ex';
const Tagename = (props) => {
    return (
        <Fragment>
            <div className={classes.Tagename}>
                <h1>{props.title}</h1>
                <h2>{props.para}</h2>
                <Example/>
                
            </div>

        </Fragment>
    )
}
export default Tagename;