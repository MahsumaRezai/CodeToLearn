import { Fragment } from 'react';
import classes from './HtmlLesson1.module.css';
import Button from './Button';
import { useRouter } from 'next/router';
import Buttontow from './Buttontow';

const ParaText = (props) => {
    const router = useRouter('');

    const nextpage = () => {
        router.push('/classhtml')
    }

    const HtmlLesson4 = () => {
        router.push('/HtmlLesson4')
    }

    return (
        <Fragment>

            <div>

                <div className={classes.list}>
                    <div className={classes.btn}>
                        <Button title="❮ Previous" onClick={nextpage} ></Button>
                        <Buttontow title="Next ❯" onClick={HtmlLesson4}></Buttontow>
                    </div>
                    <div className={classes.title}>
                        <h1>{props.title}</h1>
                    </div>

                    <div className={classes.instedlist}>
                        <div> <p className={classes.text}>
                            {props.para}</p></div>
                    </div>

                </div>

            </div>

        </Fragment>
    )
}
export default ParaText;