import { Fragment } from 'react';
import Htmlhead from '../Head/Htmlhead';
import classes from './ClassArr.module.css';
import Button from './Button';
import Buttontow from './Buttontow';
import { useRouter } from 'next/router'


const HtmlClassArrb = (props) => {
    const router = useRouter('');

    const nextpage = () => {
        router.push('/Tablehtml')
    }

    const htmllessontow = () => {
        router.push('/HtmlLesson2')
    }
    return (
        <Fragment>
            <Htmlhead title="CodeCollege" textcenter="HtmlHome" />
            <div className={classes.into}>
                <div className={classes.list}>
                    <div className={classes.btn}>
                        <Button title="❮ Previous" onClick={nextpage} ></Button>
                        <Buttontow title="Next ❯" onClick={htmllessontow}></Buttontow>
                    </div>
                    <div className={classes.title}>
                        <h1>HTML The class Attribute</h1>
                    </div>

                    <div className={classes.instedlist}>
                        <div className={classes.listtext}>
                            <h3>Using The class Attribute
                                            </h3>
                            <div className={classes.listtexttwo}>
                                <p className={classes.text}>The HTML <b className={classes.bold}>class</b> attribute is used to define equal styles for elements with the same class name.</p>
                                <p>So, all HTML elements with the same <b className={classes.bold}>class</b> attribute will get the same style.</p>
                                <p>Here we have three  <b className={classes.bold}> &lt;div&gt;</b> elements that point to the same class name:</p>



                            </div>

                        </div>
                    </div>

                </div>



                <div className={classes.warrpe}>
                    <div className={classes.insed}>

                        &lt;html&gt;
                        <br></br>
                        <br></br>

                        &lt;head&gt;
                        &lt;/head&gt;
                        <br></br>
                        <br></br>
                        &lt;style&gt;
                        
                        &lt;/style&gt;
                        <br></br>
                        <br></br>

                        &lt;th&gt;Firstname&lt;/th
                        <br></br>
                        <br></br>

                        &lt;th&gt;Lastname&lt;/th&gt;
                        <br></br>
                        <br></br>

                        &lt;th&gt;Age&lt;/th&gt;
                        <br></br>
                        <br></br>

                        &lt;/tr&gt;
                        <br></br>
                        <br></br>

                        &lt;tr&gt;
                        <br></br>
                        <br></br>

                        &lt;td&gt;Jill&lt;/td&gt;
                        <br></br>
                        <br></br>

                        &lt;td&gt;Smith&lt;/td&gt;
                        <br></br>
                        <br></br>

                        &lt;td&gt;50&lt;/td&gt;
                        <br></br>
                        <br></br>

                        &lt;/tr&gt;
                        <br></br>
                        <br></br>

                        &lt;tr&gt;
                        <br></br>
                        <br></br>

                        &lt;td&gt;Eve&lt;/td&gt;
                        <br></br>
                        <br></br>

                        &lt;td&gt;Jackson&lt;/td&gt;
                        <br></br>
                        <br></br>

                        &lt;td&gt;94&lt;/td&gt;
                        <br></br>
                        <br></br>

                        &lt;/tr&gt;
                        <br></br>
                        <br></br>


                        &lt;/html&gt;
                </div>
                </div>
            </div>



        </Fragment >

    )
}
export default HtmlClassArrb;