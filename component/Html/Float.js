import classes from './Float.module.css';
import { Fragment } from 'react';

const Float = () => {
    return (
        <Fragment>
            <div className={classes.warrp}>
                <div>
                    <h1>CSS Layout - float and clear</h1>
                </div>
                <div>
                    The CSS float property specifies how an element should float.

                 The CSS clear property specifies what elements can float beside the cleared element and on which side.

                </div>
                <div className={classes.button}>
                    <span className={classes.left}>Float Left</span>
                    <span className={classes.right}>Float Right</span>

                </div>



            </div>
        </Fragment>
    )
}
export default Float;