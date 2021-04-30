import { Link } from "react-router-dom"
import { HiMoon } from "react-icons/hi"
import paths from "./config/paths.json"

const Sidebar = (props) => {
    return (
        <div className="h-screen w-2/12 shadow-2xl dark:bg-gray-900 dark:shadow-grey-2xl transition-all">
            <header className="flex mx-auto w-min flex-col h-5/6">
                <h1 className="h-min font-styled text-5xl my-8 dark:text-white transition-all">Delmas</h1>
                <ul className="flex flex-col mt-3">
                    { paths.map((pathInfo) => (
                    <li key={ pathInfo.label } className="uppercase my-1 text-2xl font-medium dark:text-white">
                        <Link to={ pathInfo.path }>{ pathInfo.description }</Link>
                    </li> 
                    )) }
                </ul>
            </header>

            <footer className="flex justify-center align-center h-1/6">
                <HiMoon
                className="text-5xl p-2 rounded-full ring-4 ring-black dark:text-white dark:ring-white transition-all"
                onClick={ () => props.switchDarkMode() } />
            </footer>
        </div>
    )
}

export default Sidebar