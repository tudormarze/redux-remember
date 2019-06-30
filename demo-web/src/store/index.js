import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import { rememberReducer, rememberEnhancer } from 'redux-remember';

const rememberedKeys = [ 'textToBePersisted' ];

const store = createStore(
    rememberReducer(
        combineReducers(reducers)
    ),
    { someData: 'asdf' },
    compose(
        applyMiddleware(
            // ...
        ),
        rememberEnhancer(
            window.localStorage,
            rememberedKeys
        )
    )
);

export default store;
