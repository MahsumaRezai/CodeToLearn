import classes from './Float.module.css';
import { Fragment } from 'react';

const Float = () => {
    return (
        <Fragment>
            <div className={classes.main}>
            <div className={classes.warrp}>
                <div>
                    <h1>CSS Layout - float and clear</h1>
                </div>
                <div className={classes.text}>
                    The CSS <span className={classes.blud}>float</span> property specifies how an element should float.

                 The CSS <span className={classes.blud}> clear</span> property specifies what elements can float beside the cleared element and on which side.
   
                </div>
                <div className={classes.button}>
                    <span className={classes.left}>Float Left</span>
                    <span className={classes.right}>Float Right</span>

                </div>
            </div>

             <div className={classes.list}>
                  <h3>The float Property</h3>
                  <p>The float property is used for positioning and formatting content e.g.
                       let an image float left to the text in a container.</p>
                       <p>The float property can have one of the following values:</p>
                  <ul className={classes.sublist}>
                      <li>left - The element floats to the left of its container
                     </li>
                     <li>right - The element floats to the right of its container</li>
                     <li>none - The element does not float (will be displayed just where it occurs in the text). This is default
                    </li>
                    <li>inherit - The element inherits the float value of its parent</li>

                  </ul>
              </div>
         </div>
        </Fragment>
    )
}
export default Float;