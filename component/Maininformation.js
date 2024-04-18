import { Fragment } from 'react';
import classes from './Main.module.css';
import { Maincontent } from './Maincontent';

export const Maininfromation = (props) => {
    return (
        <Fragment>
            <div className={classes.maininf}>
            <Maincontent/>


            </div>

        </Fragment>
    )
}