import { ADD_CART, REMOVE_CART } from '../../actions/actions';
import { TCartActionType } from '../../actions/cartActionCreators';

interface IInitialState {
    id?: number | undefined;
    counts?: number | undefined;
}

const initialState: IInitialState[] = [];

const cartReducer = (state = initialState, {type, payload}: TCartActionType) => {
    switch (type) {
      case ADD_CART:
        const existingItem = state.find(item => item.id === payload.id);
        if (existingItem) {
          return state.map(item =>
            item.id === payload.id
              ? { ...item, counts: payload.counts++ }
              : item
          );
        } else {
          return [
            ...state,
            {
              id: payload.id,
              counts: 1
            }
          ];
        }
      case REMOVE_CART:
        return state.filter(
            item => item.id !== payload.id
        );
      default:
        return state;
    }
  };

export default cartReducer;