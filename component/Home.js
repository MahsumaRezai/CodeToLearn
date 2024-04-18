import { Fragment } from 'react';
import { useRouter } from 'next/router';
import classes from './Home.module.css';


export const Home = (props) => {
    const router = useRouter();

    const ShowLog = (props) => {
        router.push('/Form')
    }
    return (
        <Fragment>
            <div className={classes.home}>
                <div className={classes.title}>
                    <h1>Welcome To CodeCollege</h1>
                </div>
                <div className={classes.link}>
                    <button onClick={ShowLog} className={classes.urls}> <span className={classes.btncontent}> Singin
                        </span></button>
                </div>

            </div>

        </Fragment>
    )
}