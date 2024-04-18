import { Fragment } from 'react';
import classes from './Html.module.css';

const Htmlnext = (props) => {
    return (
        <Fragment>
            <div>
                <div className={classes.head} >
                    <div>
                        <h1 className={classes.title}>HTML Styles</h1>

                    </div>
                    <div className={classes.headbtn}>
                        <button className={classes.btn} >Previous</button>
                        <button className={classes.btn}>Next</button>

                    </div>

                </div>

                <div className={classes.nextdec}>
                    <h3> The HTML Style Attribute</h3>
                    <p>Setting the style of an HTML element, can be done with the style attribute.</p>
                    <li>The property is a CSS property. The value is a CSS value.</li>
                </div>

                <div className={classes.nextdec}>
                    <h3>Background Color
                 </h3>
                    <p>The CSS background-color property defines the background color for an HTML element.</p>
                </div>


                <div className={classes.nextdec}>
                    <h3>Fonts
                </h3>
                    <p>The CSS font-family property defines the font to be used for an HTML element:

                   </p>
                </div>

                <div className={classes.nextdec}>
                    <h3>Text Size
                   </h3>
                    <p>
                        The CSS font-size property defines the text size for an HTML element:
                   </p>
                </div>

                <div className={classes.nextdec}>
                    <h3>Text Alignment
               </h3>
                    <p>
                        The CSS text-align property defines the horizontal text alignment for an HTML element:
               </p>
                </div>
                <div className={classes.nextdec}>
                    <span>Chapter Summary</span>
                    <li>Use the style attribute for styling HTML elements</li>
                    <li>
                        Use background-color for background color
    
                    </li>
                    <li>
                    Use color for text colors

                    </li>
                    <li>
                    Use font-family for text fonts
                    </li>
                    <li>
                    Use font-size for text sizes
                    </li>
                    <li>
                    Use text-align for text alignment
                    </li>
                </div>






























            </div>
        </Fragment>
    )
}
export default Htmlnext