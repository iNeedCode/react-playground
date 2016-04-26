import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {selectBook} from '../actions/index'


class BookList extends Component {
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title}
                    className="list-group-item"
                    onClick={() => this.props.selectBook(book)}
                >
                    {book.title}
                </li>
            )
        })
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        books: state.books
    }
}

// returned object can be used in the smart component (container) via this.props
function mapDispatchToProps(dispatch) {
    // bindActionCreators sends action to all reducers
    return bindActionCreators({
        selectBook: selectBook
    }, dispatch)
}

// Promote Component to to a container makes props and actions available to container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
