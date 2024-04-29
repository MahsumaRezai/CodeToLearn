import { Fragment } from 'react';
import classes from './HtmlLesson1.module.css';
import ParaText from './paratext';
import Example from './ex'
import Tip from './Tip';
import HtmlList from './HtmlList';


const Card = (props) => {
    return (
        <Fragment>
            <div className={classes.into}>
            <ParaText title="HTML Paragraphs" para="The HTML <p> element defines a paragraph:


"   /> 
 <Example html="&lt; !DOCTYPE html&gt;" head=" &lt;head&gt;" title="&lt;title&gt;
                     Page Title" titleend="  &lt;/title&gt;" headend="  &lt;/head&gt;" body="&lt;body&gt;"  h1="   &lt;h1&gt;
                     This is the html page" h1end=" &lt;/h1&gt;" para="  &lt;p&gt;
                     This is a  Html Paragraphs" prarend="  &lt;/p&gt;" bodyend="  &lt;/body&gt;" htmlend="    &lt;/html&gt;" 
                     headtitle="A Simple HTML Paragraphs"/>

                     <Tip title=" Browsers automatically add some white space (a margin) before and after a paragraph."/>
                     <HtmlList/>

            </div>
        </Fragment >

    )
}
export default Card;