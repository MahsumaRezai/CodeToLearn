import { Fragment } from 'react';
import classes from './table.module.css';
import { useRouter } from 'next/router';
import Button from './Button';
import Buttontow from './Buttontow'
import Tip from './Tip';
import Htmlhead from '../Head/Htmlhead';
const Table = (props) => {
    const router = useRouter('');

    const nextpage = () => {
        router.push('/HtmlLink')
    }

    const HtmlLesson4 = () => {
        router.push('/HtmlLink')
    }
    return (

        <Fragment>
            <Htmlhead title="CodeCollege" textcenter="HtmlHome"/>
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
                <div className={classes.liste}>
                    <h1>Chapter Summary</h1>
                <ul className={classes.ullist}>
        
                   <li>Use the HTML &lt;table&gt; element to define a table</li>
                   <li>Use the HTML &lt;tr&gt; element to define a table row
                        </li>
                        <li>Use the HTML &lt;td&gt; element to define a table data</li>
                        <li>Use the HTML &lt;th&g; element to define a table heading</li>
                        <li>Use the HTML &lt;caption&gt; element to define a table caption</li>
                        <li>Use the CSS border property to define a border</li>
                        <li>Use the CSS border-collapse property to collapse cell borders</li>
                        <li>Use the CSS padding property to add padding to cells</li>
                        <li>Use the CSS text-align property to align cell text</li>
                        <li>Use the CSS border-spacing property to set the spacing between cells
                        </li>
                        <li>
                        Use the colspan attribute to make a cell span many columns

                        </li>
                        <li>
                        Use the rowspan attribute to make a cell span many rows
                        </li>
                        <li>
                        Use the id attribute to uniquely define one table
                        </li>
                </ul> 
                </div>


            </div >
            <Htmlhead  titletow="CodeCollege"/>

        </Fragment >
    )
}
export default Table;