import React from "react";
import WaitingScreen from "./WaitingScreen.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Fader from "react-fader";
import Switch from "react-router-transition-switch";
import Instagram from "./Instagram.js";
import Sidebar from "./Sidebar.js"
import Projects from "./Projects.js"
import Contact from "./Contact.js"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      darkMode: false,
    }
  }

  switchDarkMode() {
    this.setState({
      darkMode: !this.state.darkMode,
    })
  }

  render() {
    return (
      <div className={(this.state.darkMode) ? "dark" : ""}>
        <Router>
          <Switch render={({children}) => (<Fader className="dark:bg-gray-900">{children}</Fader>)}>
            <Route key="0 1 2" exact strict path="/:smtg">
              <div class="flex flex-row">
                <Sidebar switchDarkMode={ () => this.switchDarkMode() }/>
                <Switch render={({children}) => (<Fader className="w-10/12 h-screen dark:bg-gray-700">{children}</Fader>)}>
                  <Route key="0" path="/instagram">
                    <Instagram.Panel/>
                  </Route>
                  <Route key="1" path="/projects">
                    <Projects.Panel/>
                  </Route>
                  <Route key="2" path="/contact">
                    <Contact.Panel/>
                  </Route>
                </Switch>
              </div>
            </Route>
            <Route path="/">
              <WaitingScreen switchDarkMode={ () => this.switchDarkMode() }/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
