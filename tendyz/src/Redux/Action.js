

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REM_PRODUCT = "REM_PRODUCT";
export const SEL_PRODUCT = "SEL_PRODUCT";

export const addProduct = (payload) => ({type: ADD_PRODUCT,payload});

export const remProduct = (payload) => ({type:REM_PRODUCT,payload});

export const selProduct = (payload) =>({type:SEL_PRODUCT,payload});

