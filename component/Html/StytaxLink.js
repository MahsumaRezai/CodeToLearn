import { Fragment } from 'react'
import Tagename from './Tagname';
const Stytaxlink = (props) => {
    return (
        <Fragment>
            <div>
                <h1>{props.title}</h1>
                <p>{props.para}</p>
                <Tagename para=" &lt;a&gt;  link text&lt;/a&gt; " />
            </div>


        </Fragment>
    )
}
export default Stytaxlink;