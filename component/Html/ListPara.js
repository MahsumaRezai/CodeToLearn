import { Fragment } from 'react';
import classes from './HtmlLesson1.module.css';

const ListPara = (props) => {
    return (
        <Fragment>
            <div className={classes.list}>
                <div> <h1 className={classes.texthead}>{props.title}
                </h1></div>
                <ul className={classes.ullist}>
                    <li>{props.list1}</li>
                    <li>{props.list2}</li>
                    <li>{props.list3}</li>
                    <li>{props.list4}</li>


                </ul>


            </div>

        </Fragment>
    )
}
export default ListPara;