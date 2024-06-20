import classes from './Loyout.module.css'
import { Fragment } from 'react'
import Htmlhead from '../Head/Htmlhead';
import Button from './Button';
import Buttontow from './Buttontow';
import { useRouter } from 'next/router';
import ListPara from './ListPara';

const HtmlLayout = () => {
    const router = useRouter('');

    const nextpage = () => {
        router.push('/HtmlLesson4')
    }

    const HtmlLesson4 = () => {
        router.push('/Tablehtml')
    }

   
    const htmltable=()=>{
        router.push('HtmlTable')
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
                            <p className={classes.textpara}>
                                Websites often display content in multiple columns (like a magazine or newspaper).

                                HTML offers several semantic elements that define the different parts of a web page:

                 </p>
                        </div>
                        <div className="">
                            <ul className={classes.ullist}>
                                <li > <span> &lt;header&gt;</span> - Defines a header for a document or a section

                             </li>
                                <li>
                                    <span> &lt;nav&gt;</span>  - Defines a container for navigation links
                   </li>
                                <li>
                                    <span>&lt;section&gt;</span> - Defines a section in a document
                                </li>
                                <li>
                                    <span>&lt;article&gt;</span>  - Defines an independent self-contained article

                   </li>
                                <li>
                                    <span>  &lt;aside&gt;</span>  - Defines content aside from the content (like a sidebar)

                   </li>
                                <li>
                                    <span>&lt;footer&gt;</span>  - Defines a footer for a document or a section
                   </li>
                                <li>
                                    <span> &lt;details&gt;</span> - Defines additional details
                   </li>
                                <li>
                                    <span> &lt;summary&gt;</span>  - Defines a heading for the &lt;details&gt; element
                   </li>


                            </ul>
                        </div>
                    </div>

                </div>
                <ListPara textpara="There are five different ways to create multicolumn layouts. Each way has its pros and cons:" title="HTML Layout Techniques" list1="HTML tables (not recommended)" list2="CSS float property" list3="CSS flexbox
" list4="CSS framework and CSS grid"  list5="
"/>
  

<div className={classes.list}>
                <div> <h1 className={classes.texthead}>Which One to Choose?
                </h1>
                <p className={classes.textpara}>you can  choose very yo want by click on it:</p>
                </div>
                <div className={classes.ullistt}>
                    <button onClick={htmltable} className={classes.button}>HTML tables (not recommended)</button>
                    <button  className={classes.button}>CSS float property
                    </button>
                                        <button  className={classes.button}>CSS flexbox</button>
                                        <button className={classes.button}>CSS framework
                    </button>
                    <button  className={classes.button}>CSS grid</button>


                </div>


            </div>


            </div>


        </Fragment>
    )
}
export default HtmlLayout;