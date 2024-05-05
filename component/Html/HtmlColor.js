import { Fragment } from 'react'
import ParaText from './paratext';
import classes from './HtmlLesson1.module.css';
import Htmlhead from '../Head/Htmlhead';
import ColorName from './ColorName';
import BackgroundColor from './Background Color';
import TextColor from './TextColor';
import ColorBorder from './BorderColor';

const HtmlColor = (props) => {
    return (
        <Fragment>
            <Htmlhead title="CodeCollege" textcenter="HtmlHome" />
            <div className={classes.into}>
                <ParaText title="HTML Colors" para="HTML colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values." />
                <ColorName/>
                <BackgroundColor/>
                <TextColor/>
                <ColorBorder/>
            </div>



        </Fragment>
    )
}
export default HtmlColor;