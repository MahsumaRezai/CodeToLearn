import { Fragment } from 'react';
import classes from './Html.module.css';
import Head from '../Head/Head';
import List from './Listes';
const Htmlinto = (props) => {
    
   
    return (
        <Fragment>
            <Head/>
            <div className={classes.warrp}>
            <h1> WHAT IS HTML ?</h1>
             <List/>
            </div>




        </Fragment>
    )
}
export default Htmlinto