

import { ADD_PRODUCT,REM_PRODUCT  } from "../Action";

const initialState={
    product:[]
}

export const prodReducer = (state=initialState,{type,payload}) =>{

    switch(type){
        case ADD_PRODUCT:
            return { ...state, product: payload }
        case REM_PRODUCT:
            return { ...state, product: payload };
        default:
            return state;
    }

}