import { ADD_CART, REMOVE_CART } from '../actions';

interface IAddTaskAction {
    type: typeof ADD_CART,
    payload: { text: string, id: string }
}

interface IRemoveTaskAction {
    type: typeof REMOVE_CART,
    payload: { id: string }
}

export type TCartActionType = IAddTaskAction | IRemoveTaskAction;

export const addCart = (cart: {text: string, id: string}) : TCartActionType => {
    return(
        {
        type: ADD_CART,
        payload: { text: cart.text, id: cart.id }
        }
    )
};

export const removeCart = (id: string) : TCartActionType => {
    return (
        {
            type: REMOVE_CART,
            payload: { id }
        }
    )
}