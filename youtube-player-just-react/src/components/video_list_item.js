import React, {Component} from 'react'

export default class VideoListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const imageUrl = this.props.video.snippet.thumbnails.default.url;
        const title = this.props.video.snippet.title;

        return (
            <li onClick={() => this.props.onVideoSelect(this.props.video)} className="list-group-item">
                <div className="video-list media">

                    <div className="media-left">
                        <img src={imageUrl} alt="" className="media-object"/>
                    </div>

                    <div className="media-body">
                        <div className="media-heading"> {title} </div>
                    </div>

                </div>

            </li>
        );
    }

}
