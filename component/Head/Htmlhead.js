import { Fragment } from 'react';
import classes from './Htmlhead.module.css';
import { useRouter } from 'next/router';
const Htmlhead = (props) => {
    const router = useRouter('');

    const backhomehtml = () => {
        router.push('/classhtml')
    }

    return (
        <Fragment>
            <div className={classes.head}>
                <div className={classes.warrpe}>
                    <div>
                        <h1 className={classes.title}>{props.title}</h1>
                    </div>
                    <div>
                        < a className={classes.titlebcak} onClick={backhomehtml}>{props.textcenter}</a>
                    </div>
                </div>

                <div className={classes.titletow}>
                    <h2>{props.titletow}</h2>

                </div>


            </div>

        </Fragment>
    )
}
export default Htmlhead