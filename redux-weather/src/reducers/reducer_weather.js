import {FETCH_WEATHER} from '../actions/index'

export default function (state = [], action) {

    console.info('action received', action);
    switch (action.type) {
        case FETCH_WEATHER:
            // dont mutate state, concat makes a new array
            //return state.concat([action.payload.data]);
            return [action.payload.data, ...state];
    }

    return state;
}
