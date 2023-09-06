import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = (preloadedState: any) => (
    createStore(
        rootReducer, 
        preloadedState,
        composeEnhancers(),
    )
);

const store = configureStore({});
export default store;
