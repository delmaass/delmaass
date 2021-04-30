import React from "react";
import instagram from "./config/instagram.json"

const Photo = (props) => {
    // inspired by https://tailwindcomponents.com/component/simple-card
    
    return (
        <div class="max-w-xs h-min rounded overflow-hidden shadow-lg my-2">
            <img class="w-full" src={ props.photo } alt={ props.title } />
            <div class="px-6 py-4 dark:bg-gray-400">
                <div class="font-bold text-xl mb-2">{ props.title }</div>
                <p class="text-grey-darker text-base">
                { props.description }
                </p>
            </div>
            <div class="px-6 py-4 dark:bg-gray-400">
                {props.tags.map(tag => (
                    <span class="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#{ tag }</span>
                ))}
            </div>
        </div>
    )
}

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
                    instagram.map(photo => (
                        <Photo photo={`${process.env.PUBLIC_URL}` + photo.src} title={ photo.title } description={ photo.description } tags={ photo.tags }/>
                    ))
                ) : (
                    <span>Loading</span>
                ) }
            </main>
        )
    }
}

export default { Photo, Panel };