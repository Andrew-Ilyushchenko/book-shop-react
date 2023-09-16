import { ADD_CART, REMOVE_CART } from '../../actions/actions';
import { TCartActionType } from '../../actions/cartActionCreators';

interface IInitialState {
    text?: string,
    id?: string
}

const initialState: IInitialState[] = [];

const cartReducer = (state = initialState, {type, payload}: TCartActionType ) => {
    switch(type){
        case ADD_CART:
            return [
                ...state,
                {
                    text: payload.text,
                    id: payload.id
                }
            ]
        case REMOVE_CART:
            return state.filter(
                item => item.id !== payload.id
            )
            default:
                return state;
    }
}

export default cartReducer;