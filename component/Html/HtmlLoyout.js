import classes from './Loyout.module.css'
import { Fragment } from 'react'
import Htmlhead from '../Head/Htmlhead';
const HtmlLayout = () => {
    return (
        <Fragment>
            <Htmlhead title="CodeCollege" textcenter="HtmlHome" />
            <div className={classes.into}>
            </div>


        </Fragment>
    )
}
export default HtmlLayout;