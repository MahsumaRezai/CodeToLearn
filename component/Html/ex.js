import { Fragment } from 'react';
import classes from './Example.module.css';
const Example = (props) => {
    return (
        <Fragment>
            <div className={classes.title}>
                <h1> {props.headtitle}</h1>

            </div>
            <div className={classes.warrpe}>

                <div className={classes.insed}>
                    <p>
                        {props.html}
                    </p>
                    <br></br>
                    <p>{props.head}</p>
                    <br></br>
                    {props.title}
                    {props.titleend}

                    <br></br>
                    <br></br>

                    {props.headend}

                    <br></br>
                    <br></br>

                    {props.body}

                    <br></br>
                    <br></br>
                    {props.h1}
                    {props.h1end}


                    <br></br>
                    <br></br>
                    {props.para}

                    {props.prarend}

                    <br></br>
                    <br></br>

                    {props.bodyend}
                    <br></br>
                    <br></br>
                    {props.htmlend}



                </div>




            </div>

        </Fragment>
    )
}
export default Example