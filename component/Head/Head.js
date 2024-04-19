import classes from './Head.module.css'
const Head = (props) => {
    return (
        <div className={classes.head}>
            <div className={classes.button}>
                <button className={classes.btn}>
                    <a class="w3-left w3-btn" href="default.html">❮ Previous</a>
                </button>
                <h1 className={classes.title}>CodeCollege</h1>


            </div>

        </div>
    )
}
export default Head