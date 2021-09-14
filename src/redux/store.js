import {applyMiddleware, compose, createStore} from "redux"
import rootReducer from "./reducers"
import setStorage from "./middlewares/storage"
import devTools from "./middlewares/devTools"

const store = createStore(
    rootReducer,
    compose(applyMiddleware(setStorage), devTools)
)

export default store