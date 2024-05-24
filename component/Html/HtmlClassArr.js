import { Fragment } from 'react';
import Htmlhead from '../Head/Htmlhead';
import classes from './ClassArr.module.css';
import Button from './Button';
import Buttontow from './Buttontow';
import { useRouter } from 'next/router';


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
                        <br></br>
                        <br></br>
                        &lt;style&gt;
                        .cities <br></br>
                        
                        background-color: black;
                        <br></br>
                        <br></br>
                            color: white;
                            <br></br>
                            <br></br>

                            margin: 20px;
                            <br></br>
                            <br></br>

                            padding: 20px; 
                            
                        &lt;/style&gt;
                        <br></br>
                        <br></br>

                        &lt;/head&gt;
                       


                        &lt;/html&gt;
                </div>
                </div>
            </div>



        </Fragment >

    )
}
export default HtmlClassArrb;