import classes from './Head.module.css';
import { useRouter } from 'next/router';
const Head = (props) => {
    const router = useRouter('');


    const nextpage = () => {
        router.push('./Maincotent')
    }


    return (
        <div className={classes.head}>
            <div className={classes.button}>
                <button className={classes.btn} onClick={nextpage}>
                    ❮ Previous
                </button>
                <h1 className={classes.title}>CodeCollege</h1>


            </div>

        </div>
    )
}
export default Head