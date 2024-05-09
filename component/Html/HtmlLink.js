import { Fragment } from 'react';
import classes from './HtmlLink.module.css';
import Button from './Button';
import Buttontow from './Buttontow';
import { useRouter } from 'next/router';
import ListPara from './ListPara';
const HtmlLink = (props) => {
    const router = useRouter('');

    const nextpage = () => {
        router.push('/classhtml')
    }

    const HtmlLesson4 = () => {
        router.push('/HtmlLink')
    }
    return (
        <Fragment>
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





            </div>




        </Fragment>
    )
}
export default HtmlLink;