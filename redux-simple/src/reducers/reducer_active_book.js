// only state the reducer is responsible for, not app state

export default function (state = null, action) {

    switch (action.type) {
        case 'BOOK_SELECTED':
            console.info('action', action);
            console.info('state', state);
            return action.payload
    }

    return state
}
