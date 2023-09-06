import { cart } from "../../../constans/cart";

const initialState = cart;

//@ts-ignore
const cartReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case 'ADD_CART':
            return [
                ...state,
                {
                    text: payload.text,
                    id: payload.id
                }
            ]
        case 'REMOVE_CART':
            return state.filter(
                item => item.id !== payload.id
            )
            default:
                return state;
    }
}

export default cartReducer;