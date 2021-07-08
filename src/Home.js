import React from "react"
import { Link } from "react-router-dom"

import bgTextHeader from "./config/bg-text-header.json"

import Start from "./home/Start";
import Biography from "./home/Biography";
import Timeline from "./home/Timeline";

class Home extends React.Component {
    constructor(props) {
        super(props);

        let text = "";

        switch(props.lang) {
            case "FR":
                text = bgTextHeader.FR;
                break;
            case "EN":
                text = bgTextHeader.EN;
                break;
            default:
                text = bgTextHeader.EN;
                console.log("Unknown language.");
                break;
        }

        this.changeLang = props.changeLang;

        this.state = {
            text: text,
            actualText: "",
            speed: 50,
            hideName: false
        };
    }

    hideName = () => {
        this.setState({
            ...this.state,
            hideName: true
        });
    }

    componentDidMount() {
        // setTimeout(this.updateActualText, 10000)
        // setTimeout(this.hideName, 15000)
    }

    updateActualText = () => {
        if(this.state.text.length > 1) {
            let speed = 50;
            
            switch(this.state.text[0]) {
                case ",":
                    speed = 150;
                    break;
                case ".":
                    speed = 300;
                    break;
                case "!":
                    speed = 400;
                    break;
                case "?":
                    speed = 600;
                    break;
            }

            this.setState({
                ...this.state,
                actualText: this.state.actualText + this.state.text[0],
                text: this.state.text.slice(- this.state.text.length + 1),
                speed: speed
            });

            setTimeout(this.updateActualText, this.state.speed);
        }
    }

    render() {
        return (
            <div className="w-vw dark:text-white dark:bg-gray-900 transition-all ">
                <Start
                    text={ this.state.actualText }
                    hideName={ this.state.hideName }
                    changeLang={ this.changeLang }
                />
                <Biography />
                {/* <Timeline /> */}
            </div>
        );
    }
}

export default Home;