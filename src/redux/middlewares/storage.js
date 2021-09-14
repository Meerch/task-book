import storage from '../../utils/utils'

const setStorage = store => next => action => {
    let result = next(action)
    let state = store.getState().tasks
    storage('redux-state', state)
    return result
}

export default setStorage