import Types from '../actions/types';


const initialState = {
    data: [],
    errs: '',
    loading: false,
    complete: false,
}

const Example = (state = initialState, {type, payload}) => {
    switch (type) {
        case Types.SET_LOADING:
            return {
                ...state,
                loading: true
        }
        case Types.GET_DATA:
            return {
                ...state,
                data: payload
            }

        case Types.COMPLETE_GET_DATA:
            return {
                ...state,
                loading: false,
                getComplete: true
            }

        case Types.FAILED_GET_DATA:
            return {
                ...state,
                loading: false,
                errs: payload
            }

        default:
            return state;
    }
}

export default Example;