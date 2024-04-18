import { Fragment } from 'react';
import classes from './Main.module.css';
import { Footer } from './Footer';

export const Maincontent = (prosp) => {
    return (
        <Fragment>
            <div className={classes.maintext}>
                <h1 className={classes.mamititlecontet}>
                    Meaning of Coding
            </h1>
                <p className={classes.para}>
                    Coding is the process of creating instructions that computers then interpret and follow
                     Coding is also known as programming – even though a lot of people would argue there is a slight difference
                      between the two,coding and programming still reference the same general process in the long run.
                      People who code are known as programmers or developers, and the set of instructions they pass on to a computer
                      is called a program.

                  These programs can be interpreted by the computer so that the computer can then execute what the programmer
                   intends to make it do. Examples of programs and things built with code are websites, web applications,
                  mobile applications, games, and artificial intelligence systems.
            </p>
            </div>

            <div className={classes.maintext}>
                <h1 className={classes.mamititlecontet}>
                    Why is Coding Important?
            </h1>
                <p className={classes.para} >
                    Computers don’t understand the languages we humans speak. So, for you as a human to communicate with computers, you need to learn a coding language, or better put, a programming language.

        The primary type of code computers understand is binary. Binary consists of only 0s and 1s, with 0 meaning off and 1 meaning on.

        Computers understand these 0s and 1s because they are made by combing thousands of transistors – solid state off and on switches.

        The 0s of binary tell the transistors to switch off and the 1s tell the transistors to switch on. When thousands of these transistors work through the help of binary, then you are able to communicate with computers and get them to do something for you.

        The downside of binary is that working with it to switch on and off the thousands of transistors in a computer by hand would take ages. So other low-level and high level programming languages were created to make these tasks easier for programmers.
            </p>
            </div>

            <div className={classes.maintext} >

                <h1 className={classes.mamititlecontet} >
                    What is Coding Used For?
            </h1>
                <p className={classes.para}>
                    In our day to day lives, coding is everywhere and is used for almost everything. Since coding is used for virtually everything, computer programmers need to specialize in a particular field.

        Some of the main uses of coding are in web development, mobile app development, database administration, and more.
            </p>
            </div>

            <div className={classes.maintext}>

                <h1 className={classes.mamititlecontet}>
                    Web Development
            </h1>
                <p className={classes.para}>
                    Web development deals with the creation of websites and web applications. The professionals who create these websites and web applications are called web developers.
        
        In web development, there is frontend development and backend development.
        
        Frontend development involves the creation of user interfaces (UIs) with markup languages such as HTML and CSS, and a programming called JavaScript. Those who create these user interfaces are called frontend developers.
        Backend development, on the other hand, is the creation of web servers that make the user interfaces (UIs) more interactive.
        
            </p>
            <Footer/>
            </div>

        </Fragment >
    )
}