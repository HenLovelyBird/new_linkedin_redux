import {createStore, combineReducers, compose, applyMiddleware} from "redux"
import loginReducer from "../reducers/loginReducer"
import utilReducer from "../reducers/utilReducer"
import newsfeedReducer from '../reducers/newsfeedReducer';
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = {
    loginAuth: {
        userToken: undefined
    },

    utils:{
       loggedIn: false 
    },

    newsfeed: {
        news: [],
        comment: {}
    }

}

const combinedReducers = combineReducers({
    loginAuth: loginReducer,
    utils: utilReducer,
    newsfeed: newsfeedReducer
})

 const configureStore=()=>{
    return createStore(
        combinedReducers,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
)}

export default configureStore