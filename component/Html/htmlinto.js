import { Fragment } from 'react';
import classes from './Html.module.css';
import { useRouter } from 'next/router'
const Htmlinto = (props) => {
    const router = useRouter();

    const nextpage = () => {
        router.push('/Nexthtmlone')
    }
    const nextper = () => {
        router.push('/news')
    }
    return (
        <Fragment>
            <div className={classes.warrp}>
                <div className={classes.head} >
                    <div>
                        <h1 className={classes.title}>HTML Introduction</h1>

                    </div>
                    <div className={classes.headbtn}>
                        <button className={classes.btn} onClick={nextper}>Previous</button>
                        <button className={classes.btn} onClick={nextpage}>Next</button>

                    </div>

                </div>


<div>
    
</div>

                    <div className={classes.descraption}>
                        <h3>What is HTML?</h3>
                        <p>HTML is the standard markup language for creating Web pages.</p>
                        <li>
                            HTML stands for Hyper Text Markup Language
                    </li>
                        <li>
                            HTML describes the structure of a Web page
                    </li>
                        <li>
                            HTML consists of a series of elements
                    </li>
                        <li>
                            HTML elements tell the browser how to display the content
                    </li>
                        <li>HTML elements are represented by tags
                       </li>
                        <li>
                            HTML tags label pieces of content such as "heading", "paragraph", "table", and so on
                       </li>
                        <li>
                            Browsers do not display the HTML tags, but use them to render the content of the page
                       </li>
                    </div>

                </div>
                <div className={classes.descraption}>
                    <h3>HTML Elements</h3>
                    <li>An HTML element usually consists of a start tag and an end tag, with the content inserted in between:</li>
                            <p>&lt;tagname&gt; Content goes here...
                                 /tagname&gt;</p>
                        
                    <li>
                        The HTML element is everything from the start tag to the end tag:
                        <p>&lt;p&gt;My first paragraph. /p&gt; </p>
    
                        </li>
                </div>

                <div className={classes.descraption}>
                    <h3>HTML Attributes</h3>
                    <p> Attributes provide additional information about HTML elements.</p>
                    <li>
                        All HTML elements can have attributes
    
                        </li>
                    <li>
                        Attributes provide additional information about an element
    
                        </li>
                    <li>
                        Attributes are always specified in the start tag
    
                        </li>
                    <li>

                        Attributes usually come in name/value pairs like: name="value"
    
                        </li>
                </div>




        </Fragment>
    )
}
export default Htmlinto