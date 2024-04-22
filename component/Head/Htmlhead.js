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
                        <h1 className={classes.title}>CodeCollege</h1>
                    </div>
                    <div>
                        < a className={classes.titlebcak} onClick={backhomehtml}>HtmlHome</a>
                    </div>
                </div>


            </div>

        </Fragment>
    )
}
export default Htmlhead