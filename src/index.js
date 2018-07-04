import _ from "lodash";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import {API_KEY} from "./config";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

class App extends Component {
    //State
    constructor(props){
        super(props);

        this.state = { 
            videos:[],
            selectedVideo: null
        };

        this.videoSearch("Momoland");

    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term}, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
            //this.setState({videos:videos});
        });
    }

    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar 
                    onSearchTermChange={videoSearch}
                />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />

            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector(".container"));


/*

//Everything in React is a component
//So here we want to create a component that produces some HTML
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

//Then we want to output/render the component's generated HTML to the DOM
ReactDOM.render(<App/>, document.querySelector(".container"));

/*  First try: React.render(App);
    We will get the error React is not defined. You need to import React and React DOM

    Second try: ReactDOM.render(<App />);
    Still would not work because you don't have a target to the DOM
*/
