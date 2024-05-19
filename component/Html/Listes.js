import { useRouter } from 'next/router';
import classe from './List.module.css';
import { Fragment } from 'react';
import React, { useState } from 'react';

const List = (prosp) => {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter('');

    const toggleList = () => {
        setIsOpen(!isOpen);
    };
    const nextpage = () => {
        router.push('/Nexthtmlone')
    }
    const nextper = () => {
        router.push('/Nexthtmlone')

    }
    const nextarr = () => {
        router.push('/HtmlLesson2')
    }

    const nextpara = () => {
        router.push('/HtmlLesson3')
    }

    const htmllink = () => {
        router.push('./HtmlLink')
    }
    const htmlcolor = () => {
        router.push('./HtmlLesson4')
    }
    const tablepage = () => {
        router.push('./Tablehtml')
    }

    return (
        <Fragment>
            <div className={classe.btnclose}>
                <button onClick={toggleList} >HTML CLASS</button>

            </div>
            <div className={classe.list}>
                {isOpen && (
                    <ul className={classe.Lists}>
                        <button onClick={nextper}>HTML Introduction</button>
                        <button onClick={nextpage}>HTML Elements</button>
                        <button onClick={nextarr}>HTML Attributes</button>
                        <button onClick={nextpage}>HTML Headings</button>
                        <button onClick={nextpara}>HTML Paragraphs</button>
                        <button onClick={nextpage}>HTML HTML Styles</button>
                        <button onClick={htmlcolor}>HTML Colors</button>
                        <button onClick={nextpage}>HTML Styles - CSS</button>
                        <button onClick={htmllink}>HTML Links</button>
                        <button onClick={nextpage}>HTML Images</button>
                        <button onClick={tablepage}>HTML Tables</button>
                        <button onClick={nextpage}>HTML Lists</button>
                        <button onClick={nextpage}>HTML The class Attribute</button>
                        <button onClick={nextpage}>HTML JavaScript</button>
                        <button onClick={nextpage}>HTML Layouts</button>
                        <button onClick={nextpage}>HTML Forms</button>
                    </ul>
                )}





            </div>
        </Fragment>
    )
}

export default List