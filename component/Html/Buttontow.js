import classes from './Button.module.css'
const Buttontow = (props) => {
    return (
        <button  onClick={props.onClick} className={classes.btn}>
            {props.children}
            <p>{props.title}</p>
        </button>
    )
}
export default Buttontow;