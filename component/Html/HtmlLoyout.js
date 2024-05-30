import classes from './Loyout.module.css'
import { Fragment } from 'react'
import Htmlhead from '../Head/Htmlhead';
import Button from './Button';
import Buttontow from './Buttontow';
import { useRouter } from 'next/router';

const HtmlLayout = () => {
    const router = useRouter('');

    const nextpage = () => {
        router.push('/HtmlLesson4')
    }

    const HtmlLesson4 = () => {
        router.push('/Tablehtml')
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
                        <h1>HTML Layout Elements</h1>
                    </div>

                    <div className={classes.instedlist}>
                        <div className={classes.text}>
                            <p>
                                Websites often display content in multiple columns (like a magazine or newspaper).

                                HTML offers several semantic elements that define the different parts of a web page:

                 </p>
                        </div>
                        <div className="">
                            <ul className={classes.ullist}>
                                <li>&lt;header&gt; - Defines a header for a document or a section

                             </li>
                                <li>
                                    &lt;nav&gt; - Defines a container for navigation links
                   </li>
                                <li>
                                    &lt;section&gt; - Defines a section in a document
                                </li>
                                <li>
                                    &lt;article&gt; - Defines an independent self-contained article

                   </li>
                                <li>
                                    &lt;aside&gt; - Defines content aside from the content (like a sidebar)

                   </li>
                                <li>
                                    &lt;footer&gt; - Defines a footer for a document or a section
                   </li>
                                <li>
                                    &lt;details&gt; - Defines additional details
                   </li>
                                <li>
                                    &lt;summary&gt; - Defines a heading for the &lt;details&gt; element
                   </li>


                            </ul>
                        </div>
                    </div>

                </div>
            </div>


        </Fragment>
    )
}
export default HtmlLayout;