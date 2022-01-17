export const ADD_ONE = "ADD_ONE";
export const addOne = () => {
    return({type:ADD_ONE});
}

export const APPLY_NUMBER = "APPLY_NUMBER";
export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}

export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const MEMORY_ADD = 'MEMORY_ADD';
export const addMemory = () => {
    return({type:MEMORY_ADD});
}

export const MEMORY_APPLY = 'MEMORY_APPLY';
export const applyMemory = () => {
    return({type:MEMORY_APPLY});
}

export const MEMORY_CLEAR = 'MEMORY_CLEAR';
export const clearMemory = () => {
    return({type:MEMORY_CLEAR});
}