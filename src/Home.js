import React from "react"
import { Link } from "react-router-dom"

import bgTextHeader from "./config/bg-text-header.json"

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
            <h2 className="text-xl text-center md:text-2xl font-medium">Full-stack developer working for you</h2>
        </div>            
    </header>
)

const Biography = () => (
    <article className="dark:text-white dark:bg-gray-700 bg-gray-200 transition-all">
        <h3>Hello! happy to see you there. My name is Louis Delmas and I am actually working in freelance as a full-stack web developer. Please give a look on GitHub:)</h3>
    </article>
)

class Home extends React.Component {
    constructor(props) {
        super(props)

        let text = "";

        switch(props.lang) {
            case "FR":
                text = bgTextHeader.FR
                break
            case "EN":
                text = bgTextHeader.EN
                break
            default:
                text = bgTextHeader.EN
                console.log("Unknown language.")
                break
        }

        this.changeLang = props.changeLang;

        this.state = {
            text: text,
            actualText: "",
            speed: 50,
            hideName: false
        }
    }

    hideName = () => {
        this.setState({
            ...this.state,
            hideName: true
        })
    }

    componentDidMount() {
        setTimeout(this.updateActualText, 10000)
        setTimeout(this.hideName, 15000)
    }

    updateActualText = () => {
        if(this.state.text.length > 1) {
            let speed = 50;
            
            switch(this.state.text[0]) {
                /* case " ":
                    speed = 60
                    break */
                case ",":
                    speed = 150
                    break
                case ".":
                    speed = 300
                    break
                case "!":
                    speed = 400
                    break
                case "?":
                    speed = 600
                    break
            }

            this.setState({
                ...this.state,
                actualText: this.state.actualText + this.state.text[0],
                text: this.state.text.slice(- this.state.text.length + 1),
                speed: speed
            })

            setTimeout(this.updateActualText, this.state.speed)
        }
    }

    render() {
        return (
            <div className="w-vw dark:text-white dark:bg-gray-900 transition-all">
                <Start
                    text={this.state.actualText}
                    hideName={this.state.hideName}
                    changeLang={ this.changeLang }
                />
                {/* <Biography /> */}
            </div>
        )
    }
}

export default Home