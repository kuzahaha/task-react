function sbmtReducer(state=[],action){
    if (action.type === 'ADD_TRACK'){
        return [
            ...state,
            action.payload
        ]
    }else {
       return state;
    }
}
export default sbmtReducer;