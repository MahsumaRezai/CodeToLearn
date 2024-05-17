import { Fragment } from 'react'
import ParaText from './paratext';
import classes from './HtmlLesson1.module.css';
import Htmlhead from '../Head/Htmlhead';
import ColorName from './ColorName';
import BackgroundColor from './Background Color';
import TextColor from './TextColor';
import ColorBorder from './BorderColor';
import Button from './Button';
import Buttontow from './Buttontow';
import { useRouter } from 'next/router';


const HtmlColor = (props) => {
    const router = useRouter('');
    const nextpage = () => {
        router.push('/HtmlLesson3')
    }

    const HtmlLesson4 = () => {
        router.push('/HtmlLink')
    }
    return (
        <Fragment>
            <Htmlhead title="CodeCollege" textcenter="HtmlHome" />
            <div className={classes.into}>

                <div className={classes.list}>
                    <div className={classes.btn}>
                        <Button title="❮ Previous" onClick={nextpage} ></Button>
                        <Buttontow title="Next ❯" onClick={HtmlLesson4}></Buttontow>
                    </div>
                    <div className={classes.title}>
                        <h1>HTML Colors</h1>
                    </div>

                    <div className={classes.instedlist}>
                        <div> <p className={classes.text}>
                            HTML colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.</p></div>
                    </div>

                </div>
                <ColorName />
                <BackgroundColor />
                <TextColor />
                <ColorBorder />
            </div>
            <Htmlhead titletow="CodeCollege" />



        </Fragment>
    )
}
export default HtmlColor;