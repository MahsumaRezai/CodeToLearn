import { Fragment } from 'react';
import classes from './HtmlLesson1.module.css';
import ParaText from './paratext';
import Example from './ex'
import Tip from './Tip';
import ListPara from './ListPara';
import Htmlhead from '../Head/Htmlhead';


const Card = (props) => {
    return (
        
        <Fragment>
            <Htmlhead  title="CodeCollege" textcenter="HtmlHome"/>
            <div className={classes.into}>
            <ParaText title="HTML Paragraphs" para="The HTML <p> element defines a paragraph:


"   /> 
    <Example html="&lt; !DOCTYPE html&gt;" head=" &lt;head&gt;" title="&lt;title&gt;
                        Page Title" titleend="  &lt;/title&gt;" headend="  &lt;/head&gt;" body="&lt;body&gt;"  h1="   &lt;h1&gt;
                        This is the html page" h1end=" &lt;/h1&gt;" para="  &lt;p&gt;
                        This is a  Html Paragraphs" prarend="  &lt;/p&gt;" bodyend="  &lt;/body&gt;" htmlend="    &lt;/html&gt;" 
                        headtitle="A Simple HTML Paragraphs"/>

                        <Tip title=" Browsers automatically add some white space (a margin) before and after a paragraph."/>
                        <ListPara title="HTML Display" list1="You cannot be sure how HTML will be displayed." list2="Large or small screens,
                         and resized windows will create different results." list3="With HTML, you cannot change the output by adding extra spaces or
                          extra lines in your HTML code." list4="The browser will remove any extra spaces and extra lines when the page is displayed:" />
                        <Example html="&lt; !DOCTYPE html&gt;" head=" &lt;head&gt;" title="&lt;title&gt;
                        Page Title" titleend="  &lt;/title&gt;" headend="  &lt;/head&gt;" body="&lt;body&gt;"  h1="   &lt;h1&gt;
                        This is the html page" h1end=" &lt;/h1&gt;" para="  &lt;p&gt;
                        This paragraph
    contains a lot of lines
    in the source code,
    but the browser
    ignores it." prarend="  &lt;/p&gt;" bodyend="  &lt;/body&gt;" htmlend="    &lt;/html&gt;" 
                        headtitle="A Example"/>
            <ListPara title="HTML Line Breaks" list1="The HTML <br> element defines a line break."
             list2="Use <br> if you want a line break (a new line) without starting a new paragraph:"
              list3="The <br> tag is an empty tag, which means that it has no end tag." list4="The HTML <pre> element defines preformatted text."
 
              />



            </div>
            <Htmlhead titletow="CodeCollege" />
        </Fragment >

    )
}
export default Card;