import * as ActionTypes from './ActionTypes';

export const AnyValue = (pay) => {
    return {
        type: ActionTypes.ANYVALUE,
        payload: pay
    };
};