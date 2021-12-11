
import Types from './types';

// GET DATA EXAMPLE ==
export const getData = () => async dispatch => {
   
    try {
        dispatch(setLoading());
       
        let res = await fetch('https://jsonplaceholder.typicode.com/posts/');
        let data = await res.json();

        dispatch({
            type: Types.GET_DATA,
            payload: data
        })
     
        dispatch(getDataComplete()); 

    } catch(err) {
        console.log('error creating place:', err)

        // RUN FAIL ACTION ----
        dispatch(getDataFailed(err))
    }
}

// Get DATA Complete
export const getDataComplete = () => {
    return {
        type: Types.COMPLETE_GET_DATA,
    }
}

// Get DATA Failed
export const getDataFailed = (err) => {
    return {
        type: Types.COMPLETE_GET_DATA,
        payload: err
    }
}


// Set Loading to True..
export const setLoading = () => {
    return {
        type: Types.SET_LOADING,
    }
}
