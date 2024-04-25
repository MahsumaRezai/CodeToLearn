import classes from './Button.module.css'
const Button = (props) => {
    return (
        <button onClick={props.onClick} onBlur={props.onNext} className={classes.btn}>
            {props.children}
            <p>{props.title}</p>
        </button>
    )
}
export default Button;