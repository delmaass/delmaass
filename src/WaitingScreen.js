import { HiMoon } from "react-icons/hi";
import { Link } from "react-router-dom";
import paths from "./config/paths.json";

const WaitingScreen = (props) => {
    return (
        <div className="w-screen h-screen dark:bg-gray-900 transition-all">
        <header className="flex flex-col justify-center items-center h-5/6">
            <h1 className="h-min font-styled text-8xl dark:text-white transition-all">Delmas</h1>
            <ul className="flex flex-row mt-3">
                { paths.map((pathInfo) => (
                   <li key={ pathInfo.label } className="mx-3 uppercase text-2xl font-medium dark:text-white">
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
    );
}

export default WaitingScreen;