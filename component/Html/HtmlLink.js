import { Fragment } from 'react';
import classes from './HtmlLink.module.css';
import Button from './Button';
import Buttontow from './Buttontow';
import { useRouter } from 'next/router';
import ListPara from './ListPara';
import Tip from './Tip';
import Htmlhead from '../Head/Htmlhead';
const HtmlLink = (props) => {
    const router = useRouter('');

    const nextpage = () => {
        router.push('/HtmlLesson4')
    }

    const HtmlLesson4 = () => {
        router.push('/Tablehtml')
    }
    return (
        <Fragment>
            <Htmlhead title="CodeCollege" textcenter="HtmlHome"/>
            <div className={classes.into}>
                <div className={classes.list}>
                    <div className={classes.btn}>
                        <Button title="❮ Previous" onClick={nextpage} ></Button>
                        <Buttontow title="Next ❯" onClick={HtmlLesson4}></Buttontow>
                    </div>
                    <div className={classes.title}>
                        <h1>HTML Links</h1>
                    </div>

                    <div className={classes.instedlist}>
                        <div> <p className={classes.text}>
                            Links are found in nearly all web pages. Links allow users to click their way from page to page.

                 </p></div>
                    </div>

                </div>
                <ListPara title="HTML Links - Hyperlinks
                         "  list1="HTML links are hyperlinks." list2="You can click on a link and jump to another document." list3="When you move the mouse over a link, the mouse arrow will turn into a little hand.
                         " list4=" A link does not have to be text. It can be an image or any other HTML element."/>
                         <div className={classes.list}>
                    
                    <div className={classes.title}>
                        <h1>Links - Syntax
                          </h1>
                    </div>

                    <div className={classes.instedlist}>
                        <div> <p className={classes.text}>
                        Hyperlinks are defined with the HTML &lt;a&gt; tag:

                 </p></div>
                    </div>

                </div>
                <Tip title="Note: Without a forward slash at the end of subfolder addresses, you might generate two requests to the server. Many servers will automatically add a forward slash to the end of the address, and then create a new request."/>
                <div className={classes.list}>
                    <div className={classes.title}>
                        <h2>Local Links</h2>
                    </div>

                    <div className={classes.instedlist}>
                        <div> <span className={classes.textspam}>
                            The example above used an absolute URL (a full web address).

                            A local link (link to the same web site) is specified with a relative URL (without https://www....).

                 </span></div>
                    </div>

                </div>
                  <div className={classes.list}>
                <div> <h1 className={classes.texthead}>HTML Links - The target Attribute

                </h1></div>
                <ul className={classes.ullist}>
                   <li>The target attribute specifies where to open the linked document.

    </li>
                   <li>
                   The target attribute can have one of the following values:
                   </li>
                   <li>
                   _blank - Opens the linked document in a new window or tab
                   </li>
                   <li>
                   _self - Opens the linked document in the same window/tab as it was clicked (this is default)

                   </li>
                   <li>
                   _parent - Opens the linked document in the parent frame

                   </li>
                   <li>
                   _top - Opens the linked document in the full body of the window
                   </li>


                </ul>
               

            </div>
            </div>
            <Htmlhead titletow="CodeCollege"/>
            




        </Fragment>
    )
}
export default HtmlLink;