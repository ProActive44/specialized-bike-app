import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'
import { productsReducer } from './productsReducer';
import thunk from 'redux-thunk'
import { cartReducer } from './cartReducer';
import { accountReducer } from './accountReducer';


const rootReducer = combineReducers(productsReducer, cartReducer, accountReducer);


const store = createStore(rootReducer, applyMiddleware(thunk));

export { store }