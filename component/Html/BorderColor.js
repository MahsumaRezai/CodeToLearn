import { Fragment } from 'react';
import classes from './Background.module.css';
const ColorBorder = (props) => {
    return (
        <Fragment>
            <div className={classes.list}>
                <h1>
                    Border Color</h1>
                <p>You can set the color of borders:</p>
                <div className={classes.borders}>
                    <h3 className={classes.titleone}>Hello World</h3>
                    <h3 className={classes.titletwo}>Hello World</h3>
                    <h3 className={classes.titlethree}>Hello World</h3>

                </div>

            </div>
        </Fragment>

    )
}
export default ColorBorder;