import { ADD_CART, MINUS_CART, PLUS_CART, REMOVE_CART } from '../actions';

interface IAddTaskAction {
    type: typeof ADD_CART,
    payload:  { id: number, counts: Record<number, number> }
}

interface IRemoveTaskAction {
    type: typeof REMOVE_CART,
    payload: { id: number }
}

interface IPlusTaskAction {
    type: typeof PLUS_CART,
    payload:  { id: number }
}

interface IMinusTaskAction {
    type: typeof MINUS_CART,
    payload:  { id: number }
}

export type TCartActionType = IAddTaskAction | IRemoveTaskAction | IPlusTaskAction | IMinusTaskAction;

export const addCart = (id: number, counts: Record<number, number>) : TCartActionType => {
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

export const plusCart = (id: number) : TCartActionType => {
    return (
        {
            type: PLUS_CART,
            payload: { id }
        }
    )
}

export const minusCart = (id: number) : TCartActionType => {
    return (
        {
            type: MINUS_CART,
            payload: { id }
        }
    )
}