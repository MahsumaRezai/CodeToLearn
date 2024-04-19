import { useRouter } from 'next/router';
import classe from './List.module.css'

const List = (prosp) => {
    const router = useRouter('');


    const nextpage = () => {
        router.push('/Nexthtmlone')
    }
    const nextper = () => {
        router.push('/news')
    }
    return (
        <div className={classe.list}>
            <button onClick={nextper}>HTML Introduction</button>
            <button onClick={nextpage}>HTML Elements</button>
            <button onClick={nextpage}>HTML Attributes</button>
            <button onClick={nextpage}>HTML Headings</button>
            <button onClick={nextpage}>HTML Paragraphs</button>
            <button onClick={nextpage}>HTML HTML Styles</button>
            <button onClick={nextpage}>HTML Colors</button>
            <button onClick={nextpage}>HTML Styles - CSS</button>
            <button onClick={nextpage}>HTML Links</button>
            <button onClick={nextpage}>HTML Images</button>
            <button onClick={nextpage}>HTML Tables</button>
            <button onClick={nextpage}>HTML Lists</button>
            <button onClick={nextpage}>HTML The class Attribute</button>
            <button onClick={nextpage}>HTML JavaScript</button>
            <button onClick={nextpage}>HTML Layouts</button>
            <button onClick={nextpage}>HTML Forms</button>




        </div>
    )
}

export default List