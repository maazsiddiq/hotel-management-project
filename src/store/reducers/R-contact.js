import * as ActionTypes from '../actions/ActionTypes';

const initialstate = {
  show: []
};

const Reducer = (state = initialstate, action) => {
    switch(action.type) {
        case ActionTypes.ANYVALUE :
            return{show: action.payload};
    };
    return state;
};


export default Reducer;