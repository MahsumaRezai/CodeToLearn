import { Fragment } from 'react';
import classes from './Footer.module.css';
import { useRouter } from 'next/router'
export const Footer = (props) => {
    const router = useRouter();

    const ShowLog = (props) => {
        router.push('/classhtml')
    }
    return (
        <Fragment>
            <div className={classes.footer}>
                <div className={classes.cards}>

                    <div className={classes.card}>
                        <div className={classes.text}>
                            <h4 className={classes.title}>
                                WHAT IS HTML ?
                                </h4>
                            <p>
                                HTML is a markup language that defines the structure of your content. HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way. The enclosing tags can make a word or image hyperlink to somewhere else, can italicize words, can make the font bigger or smaller, and so on.
                                </p>
                            <button onClick={ShowLog} className={classes.btn}><span className={classes.btncontent}>Click</span></button>

                        </div>

                    </div>


                    <div className={classes.card}>

                        <div className={classes.text}>
                            <h4 className={classes.title}>
                                WHAT IS CSS ?
                        </h4>
                            <p >
                                As we have mentioned before, CSS is a language for specifying how documents are presented to users — how they are styled, laid out, etc.

            A document is usually a text file structured using a markup language — HTML is the most common markup language, but you may also come across other markup languages such as SVG or XML.
                        </p>
                            <button onClick={ShowLog} className={classes.btn}><span className={classes.btncontent}>Click</span></button>


                        </div>

                    </div>

                    <div className={classes.card}>

                        <div className={classes.text}>
                            <h4 className={classes.title}>
                                WHAT IS JAVASCRIPT ?
                      </h4>
                            <p >
                                The JavaScript programming language is text-based and can be used on both client and server-side. It controls multimedia within web pages and allows them to become interactive. JavaScript empowers a developer to do many things like adding animation to images or updating content automatically on a page.

                            JavaScript is what allows you to interact with the vast majority of web pages that you visit. Whether it’s filling out forms, scrolling through maps, or registering for an event, it’s most likely that JavaScript programming is what’s allowing you to do it.
                     </p>


                            <button onClick={ShowLog} className={classes.btn}><span className={classes.btncontent}>Click</span></button>

                        </div>

                    </div>




                </div>


            </div>

        </Fragment>
    )
}