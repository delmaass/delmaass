import { Link } from "react-router-dom";

const linkTarget = {
    pathname: "/",
    key: Math.random(), // we could use Math.random, but that's not guaranteed unique.
    state: {
      applied: true
    }
};

const Start = (props) => (
    <header className="h-vh flex flex-col">
        <div className="flex w-vw justify-center items-center h-14">
            <Link to={ linkTarget } onClick={ (e) => {
                props.changeLang("FR")
            } }>FR</Link>&nbsp;|&nbsp;<Link to={ linkTarget } onClick={ (e) => {
                props.changeLang("EN")
            } }>EN</Link>
        </div>
        
        <div className="flex-1 px-5 md:px-10 font-light text-lg md:text-2xl">
            { props.text }
        </div>

        <div style={ props.hideName ? {opacity: 0} : {} } className="NameCentered z-10 flex flex-col items-center p-1 md:p-5 bg-white dark:bg-gray-900 transition-all">
            <h1 className="font-styled text-6xl md:text-8xl">Delmas</h1>
            <h2 className="text-xl text-center md:text-2xl font-medium">Full-stack developer</h2>
        </div>            
    </header>
);

export default Start;