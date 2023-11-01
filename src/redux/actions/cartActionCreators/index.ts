import { ADD_CART, REMOVE_CART } from '../actions';

interface IAddTaskAction {
    type: typeof ADD_CART,
    payload:  { id: number, counts: number }
}

interface IRemoveTaskAction {
    type: typeof REMOVE_CART,
    payload: { id: number }
}

export type TCartActionType = IAddTaskAction | IRemoveTaskAction;

export const addCart = (id: number, counts: number) : TCartActionType => {
    return(
        {
        type: ADD_CART,
        payload: { id, counts }
        }
    )
};

export const removeCart = (id: number) : TCartActionType => {
    return (
        {
            type: REMOVE_CART,
            payload: { id }
        }
    )
}