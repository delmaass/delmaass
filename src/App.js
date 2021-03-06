import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Fader from "react-fader";
import Switch from "react-router-transition-switch";
/* import Instagram from "./Instagram";
import Sidebar from "./Sidebar"
import Projects from "./Projects"
import Contact from "./Contact" */
import Home from "./Home"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      darkMode: true,
      lang: "FR"
    }
  }

  switchDarkMode = () => {
    this.setState({
      ...this.state,
      darkMode: !this.state.darkMode,
    })
  }

  changeLang = (lang) => {
    console.log(lang)
    console.log(this.state)
    this.setState({
      ...this.state,
      lang: lang
    })
  }

  render() {
    return (
      <div className={(this.state.darkMode) ? "dark overflow-x-hidden" : " overflow-x-hidden"}>
        <Router>
          <Switch render={({children}) => (<Fader className="dark:bg-gray-900">{children}</Fader>)}>
            <Route path="/">
              <Home key={ this.state.lang }
                lang={ this.state.lang }
                changeLang={ this.changeLang }
                switchDarkMode={ this.switchDarkMode }
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
