import { Fragment } from 'react'
import classes from './Home.module.css';
import { useRouter } from 'next/router'
import Button from './Button';
import { useState } from 'react'
const Form = (props) => {
    const [name, setname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [address, setadress] = useState('');
    const [esducation, seteducation] = useState('');

    const router = useRouter();

    const BackPage = (props) => {
        router.push('/')
    }
    const PageNext = () => {
        router.push('/news')
    }

    const FormHandler = (event) => {
        event.preventDefault();
        if (name.trim().length !== 0 && lastname.trim().length !== 0 && address.trim().length !== 0 && email.trim().length !== 0 &&
            esducation.trim().length !== 0) {
            PageNext()


        }


    }

    const SetNameHandler = (event) => {
        setname(event.target.value)
    }
    const SetLastnameHandler = (event) => {
        setlastname(event.target.value)
    }
    const SetEamilHandler = (event) => {
        setemail(event.target.value)
    }
    const SetAddressHandler = (event) => {
        setadress(event.target.value)
    }
    const SetEduactionHanlder = (event) => {
        seteducation(event.target.value)
    }

    return (
        <Fragment>
            <div className={classes.formsection}>
                <form className={classes.form} onSubmit={FormHandler}>
                    <h1 className={classes.titles}>Welcome to CodeCollege Reigeration Form</h1>
                    <div className={classes.label}>
                        <label>Name</label>
                        <input onChange={SetNameHandler}></input>

                    </div>
                    <div className={classes.label}>
                        <label>LastName</label>
                        <input onChange={SetLastnameHandler}></input>
                    </div>
                    <div className={classes.label}>
                        <label>Eamil</label>
                        <input onChange={SetEamilHandler} className={classes.edu} type="email"></input>
                    </div>
                    <div className={classes.label}>
                        <label>City</label>
                        <input onChange={SetAddressHandler} type="address"></input>
                    </div>
                    <div className={classes.label}>
                        <label>Education</label>
                        <input onChange={SetEduactionHanlder} className={classes.edu}></input>
                    </div>
                    <div className={classes.button}>
                        <Button onClick={BackPage}>Back</Button>
                        <button className={classes.btn}>
                            Submit
                    </button>

                    </div>


                </form>

            </div>


        </Fragment>
    )
}
export default Form