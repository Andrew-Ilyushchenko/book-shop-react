import { ADD_CART, MINUS_CART, PLUS_CART, REMOVE_CART } from '../../actions/actions';
import { TCartActionType } from '../../actions/cartActionCreators';

interface IInitialState {
    id?: number | undefined;
    counts?: Record<number, number> | undefined;
}

const initialState: IInitialState[] = [];

const cartReducer = (state = initialState, {type, payload}: TCartActionType) => {
  switch (type) {
    
    case ADD_CART:
      
    const existingItem = state.find(item => item.id === payload.id);
      
    if (existingItem) {
        return state.map(item =>
          item.id === payload.id
            ? { ...item, counts: {...item.counts, [payload.id]: (item.counts?.[payload.id] || 0) + 1 }}
            : item
        );
      } else {
        return [
          ...state,
          {
            id: payload.id,
            counts: {[payload.id]: 1}
          }
        ];
      }

      case REMOVE_CART:
        return state.filter(
            item => item.id !== payload.id
        );

        case PLUS_CART:
          return state.map(item =>
            item.id === payload.id
              ? { ...item, counts: {...item.counts, [payload.id]: (item.counts?.[payload.id] || 0) + 1 }}
              : item
          );
        
        case MINUS_CART:
          return state
            .map(item =>
              item.id === payload.id
                ? { ...item, counts: {...item.counts, [payload.id]: (item.counts?.[payload.id] || 0) - 1 }}
                : item
            )
            .filter(item => item.counts?.[payload.id] !== 0);

      default:
        return state;
    }
  };

export default cartReducer;