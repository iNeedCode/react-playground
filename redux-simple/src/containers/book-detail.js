import React, {Component} from 'react'
import {connect} from 'react-redux'
//import { bindActionCreators } from 'redux'
//import {selectBook} from '../actions/index'


class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div>Select a book to get started</div>;
        }
        return (
            <div className="well">
                <h3>Details for:</h3>
                <p>Title: {this.props.book.title}</p>
                <p>Pages: {this.props.book.pages}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

//// returned object can be used in the smart component (container) via this.props
//function mapDispatchToProps(dispatch) {
//    // bindActionCreators sends action to all reducers
//    return bindActionCreators({
//        selectBook: selectBook
//    }, dispatch)
//}
//

export default connect(mapStateToProps)(BookDetail);
