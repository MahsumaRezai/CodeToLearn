import { Fragment } from 'react';
import Htmlhead from '../Head/Htmlhead';
import classes from './Tablelyout.module.css';
import Button from './Button';
import Buttontow from './Buttontow';
import Tip from './Tip';
const Table = (props) => {
    return (
        <Fragment>
            <Htmlhead title="CodeCollege" textcenter="HtmlHome" />
            <div className={classes.into}>



                <div className={classes.list}>
                    <div className={classes.btn}>
                        <Button title="❮ Previous"  ></Button>
                        <Buttontow title="Next ❯" ></Buttontow>

                    </div>

                    <div className={classes.title}>
                        <h1> HTML Tables</h1>
                    </div>

                    <div className={classes.instedlist}>
                        <div> <p className={classes.text}> The &lt;table&gt; element was not designed to be a layout tool!
                         The purpose of the &lt;table> element is to display tabular data. So, do not use tables for your page layout! They will bring a mess into your code. And imagine how hard it will be to redesign your site after a couple of months.</p></div>

                    </div>
                </div>
                <br></br>
                <Tip title="Tip: Do NOT use tables for your page layout!" />







            </div>
        </Fragment >

    )
}
export default Table;