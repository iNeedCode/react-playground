import React from 'react';
import { Component } from 'react';
import YTSearch from 'youtube-api-search'
import _ from 'lodash'

import SeachBar from './search_bar'
import VideoList from './video_list'
import VideoDetail from './video_detail'
import API_KEY from './shared/secret'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch("React Redux")
    }

    videoSearch(term){

        YTSearch({key: API_KEY, term: term}, (data) => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            });
        });
    }



    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 600);

        return (
            <div>
                <h1>Youtube Player</h1>
                <SeachBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos}/>
            </div>
        );
    }

}
