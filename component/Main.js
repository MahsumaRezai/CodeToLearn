import { Fragment } from 'react';
import classes from './Main.module.css';
const Main = (props) => {
    return (
        <Fragment>
            <div className={classes.main}>
                <div className={classes.title}>
                    <h1>Do You Want To learn Codeing</h1>
                    <p className={classes.start}>Lets Go....</p>
                </div>

            </div>

        </Fragment>
    )
}
export default Main;