const initialState = { isAuth: false, name: '', email: '' };

//@ts-ignore
const authReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case 'LOG_IN':
            return { ...state, email: payload.email, isAuth: true };
        default: 
            return state; 
    }
}

export default authReducer;