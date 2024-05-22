import { Fragment } from 'react';
import classes from './table.module.css';
import { useRouter } from 'next/router';
import Button from './Button';
import Buttontow from './Buttontow'
import Tip from './Tip';
const Table = (props) => {
    const router = useRouter('');

    const nextpage = () => {
        router.push('/HtmlLesson4')
    }

    const HtmlLesson4 = () => {
        router.push('/HtmlLink')
    }
    return (

        <Fragment>
            <div className={classes.into}>
                <div className={classes.list}>
                    <div className={classes.btn}>
                        <Button title="❮ Previous" onClick={nextpage} ></Button>
                        <Buttontow title="Next ❯" onClick={HtmlLesson4}></Buttontow>
                    </div>
                    <div className={classes.title}>
                        <h1>Defining an HTML Table</h1>
                    </div>

                    <div className={classes.instedlist}>
                        <div className={classes.tabletex}> <p className={classes.text}>
                            An HTML table is defined with the &lt;table&gt; tag.

                 </p>
                            <p>
                                Each table row is defined with the &lt;tr&gt; tag. A table header is defined with the &lt;th&gt;
                                 tag. By default, table headings are bold and centered. A table data/cell is defined with the &lt;td&gt; tag.
                            </p>
                        </div>
                    </div>

                </div>
                <div className={classes.warrpe}>
                    <div className={classes.insed}>

                        &lt;table&gt;
                        <br></br>
                        <br></br>

                        &lt;tr&gt;
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


                        &lt;/table&gt;
                </div>

                </div>
                <Tip title=" Note : The <td> elements are the data containers of the table.
                 They can contain all sorts of HTML elements; text, images, lists, other tables, etc."/>

                   <div className={classes.list}>
                    
                    <div className={classes.title}>
                        <h1>HTML Table - Adding a Caption</h1>
                    </div>

                    <div className={classes.instedlist}>
                        <div className={classes.tabletex}> <p className={classes.text}>
                        To add a caption to a table, use the &lt;caption&gt; tag:

                 </p>
                            
                        </div>
                    </div>

                </div>


            </div >

        </Fragment >
    )
}
export default Table;