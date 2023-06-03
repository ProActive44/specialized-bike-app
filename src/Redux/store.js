import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'
import { productsReducer } from './productsReducer';
import thunk from 'redux-thunk'
import { cartReducer } from './cartReducer';
import { accountReducer } from './accountReducer';
import { wishReducer } from './wishlistReducer';


const rootReducer = combineReducers({productsReducer, cartReducer, accountReducer, wishReducer})


const store = createStore(rootReducer, applyMiddleware(thunk));

export { store }