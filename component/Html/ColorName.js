import { Fragment } from 'react';
import classes from './Color.module.css'
const ColorName = (props) => {
    return (
        <Fragment>
            <div className={classes.colorname}>
                <div>
                    <h1 className={classes.title}>Color Names</h1>
                    <p className={classes.para}>In HTML, a color can be specified by using a color name:

                   </p>
                </div>
                <div>
                    <ul className={classes.list}>
                        <li className={classes.listone}>Tomato</li>
                        <li className={classes.listtwo}> Orange</li>
                        <li className={classes.listthree}> DodgerBlue
                          </li>
                        <li className={classes.listfour}> MediumSeaGreen</li>
                        <li className={classes.listfive}> Gray
                       </li>
                        <li className={classes.listsix}> SlateBlue
                        </li>
                        <li className={classes.listseven}>Violet
                        </li>
                        <li className={classes.listeigth}> LightGray</li>

                    </ul>
                </div>

            </div>

        </Fragment>
    )
}
export default ColorName;