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
      lang: "EN"
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
      <div className={(this.state.darkMode) ? "dark" : ""}>
        <Router>
          <Switch render={({children}) => (<Fader className="dark:bg-gray-900">{children}</Fader>)}>
            {/* <Route key="0 1 2 3" exact strict path="/:smtg">
              <div className="flex flex-row">
                <Sidebar switchDarkMode={ () => this.switchDarkMode() }/>
                <Switch render={({children}) => (<Fader className="w-10/12 h-screen dark:bg-gray-700">{children}</Fader>)}>
                  <Route key="0" path="/home">
                    <Home.Panel/>
                  </Route>
                  <Route key="1" path="/instagram">
                    <Instagram.Panel/>
                  </Route>
                  <Route key="2" path="/projects">
                    <Projects.Panel/>
                  </Route>
                  <Route key="3" path="/contact">
                    <Contact.Panel/>
                  </Route>
                </Switch>
              </div>
            </Route> */}
            <Route path="/">
              <Home key={ this.state.lang }
                lang={ this.state.lang }
                switchDarkMode={ this.switchDarkMode }
                changeLang={ this.changeLang }
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
