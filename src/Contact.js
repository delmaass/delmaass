import React from "react";

class Panel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ready: false
        }
    }

    componentDidMount() {
        this.setState({
            ready: true
        })
    }

    render() {
        return (
            <main class="p-6 grid grid-cols-4 h-screen gap-4 bg-gray dark:bg-gray-700">
                { (this.state.ready) ? (
                    <h1>Contact</h1>
                ) : (
                    <span>Loading</span>
                ) }
            </main>
        )
    }
}

export default { Panel };