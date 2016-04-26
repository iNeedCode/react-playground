export function selectBook(book) {
    console.log('A book has been selected: ', book.title);

    // selectBook is ActionCreator, needs to return ACTION, an object with type propoerty
    // Actions has type and payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
