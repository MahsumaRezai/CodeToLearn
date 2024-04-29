import { Fragment } from 'react';
import classes from './HtmlLesson1.module.css'
import Example from './ex';
import Tagename from './Tagname';
import Tip from './Tip';
import Button from './Button';
import { useRouter } from 'next/router';
import Buttontow from './Buttontow';
import Htmlhead from '../Head/Htmlhead';
const HtmlLesson2 = (props) => {
    const router = useRouter('');


    const nextpage = () => {
        router.push('/classhtml')
    }

    

    const HtmlLesson3=()=>{
        router.push('/HtmlLesson3')
    }
    return (
        <Fragment>
            <Htmlhead title="CodeCollege" textcenter="HtmlHome"/>

            <div className={classes.into}>

                <div className={classes.list}>
                    <div className={classes.btn}>
                        <Button title="❮ Previous" onClick={nextpage} ></Button>
                        <Buttontow title="Next ❯" onClick={HtmlLesson3}></Buttontow>




                    </div>
                    <div className={classes.title}>
                        <h1>  HTML Attributes</h1>
                    </div>

                    <div className={classes.instedlist}>
                        <div> <p className={classes.text}>
                            Attributes provide additional information about HTML elements.</p></div>
                        <ul className={classes.ullist}>
                            <li>All HTML elements can have attributes</li>
                            <li>Attributes provide additional information about an element</li>
                            <li>Attributes are always specified in the start tag</li>
                            <li>
                                Attributes usually come in name/value pairs like: name="value"

            </li>
                        </ul>
                    </div>
                </div>


                <div className={classes.list}>
                    <div className={classes.title}>
                        <h1>The href Attribute</h1>

                    </div>
                    <div> <p className={classes.text}> HTML links are defined with the &lt;a&gt; tag. The link address is specified in the href attribute

                   </p></div>
                    <Tagename title="&lt;a&gt; href= https://www.w3schools.com This is a link &tl;/a&gt;" />

                    <ul className={classes.ullist}>

                        <li>You will learn more about links and the &lt;a&gt; tag later in this tutorial.</li>

                    </ul>

                </div>



                <div className={classes.list}>
                    <div className={classes.title}>
                        <h1>The src Attribute</h1>
                    </div>
                    <ul className={classes.ullist}>

                        <li>HTML images are defined with the &lt;img&gt;tag.</li>
                        <li>The filename of the image source is specified in the src attribute:</li>
                    </ul>
                    <Tagename title="&lt;img src= wirte address &lt;/img&gt;" />

                </div>

                <div className={classes.list}>
                    <div className={classes.title}>
                        <h1>The alt Attribute
</h1>
                    </div>
                    <ul className={classes.ullist}>

                        <li>The alt attribute specifies an alternative text to be used, if an image cannot be displayed.</li>
                        <li>The value of the alt attribute can be read by screen readers. This way, someone "listening" to the webpage, e.g. a vision impaired person, can "hear" the element.</li>
                    </ul>

                    <Tip title="Tip:The alt attribute is also useful if the image cannot be displayed (e.g. if it does not exist):" />

                </div>


                <div className={classes.list}>
                    <div className={classes.title}>
                        <h1>The style Attribute
                       </h1>
                    </div>
                    <ul className={classes.ullist}>

                        <li>The style attribute is used to specify the styling of an element, like color, font, size etc.

                         </li>
                    </ul>


                </div>
                <div className={classes.list}>
                    <div className={classes.title}>
                        <h1>
                            The lang Attribute

                       </h1>
                    </div>
                    <ul className={classes.ullist}>

                        <li>The language of the document can be declared in the &lt;html&gt; tag.

                         </li>
                        <li>The language is declared with the lang attribute.

                          </li>
                        <li>
                            Declaring a language is important for accessibility applications (screen readers) and search engines:
                          </li>
                    </ul>
                    <Example html="&lt; !DOCTYPE html   lang &gt;" head=" &lt;head&gt;" title="&lt;title&gt;
                     Page Title" titleend="  &lt;/title&gt;" headend="  &lt;/head&gt;" body="&lt;body&gt;"  h1="   &lt;h1&gt;
                     This is the html page" h1end=" &lt;/h1&gt;" para="  &lt;p&gt;
                    Do you want coding" paraend="  &lt;/p&gt;" bodyend="  &lt;/body&gt;" htmlend="    &lt;/html&gt;" headtitle="Example"/>
                </div>


            </div>
        </Fragment>
    )
}
export default HtmlLesson2;