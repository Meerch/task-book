import {format} from "date-fns"
import {defaultCategories} from "../../constants";

let oldTasks, newTasks, newTaskWithId, tasksClone, deletedTask, newCategories, newCategoriesWithId

const initialState = JSON.parse(localStorage.getItem('redux-state')) || {
    tasks: {
        active: {},
        inactive: {}
    },
    categories: defaultCategories,
    selectedCategory: 0,
    valuesStatistic: {
        created: 0,
        ended: 0,
        deleted: 0
    },
    observation: {
        created: {
            Monday: 0,
            Tuesday: 0,
            Wednesday: 0,
            Thursday: 0,
            Friday: 0,
            Saturday: 0,
            Sunday: 0
        },
        ended: {
            Monday: 0,
            Tuesday: 0,
            Wednesday: 0,
            Thursday: 0,
            Friday: 0,
            Saturday: 0,
            Sunday: 0
        }
    }
}


let nowDay = format(new Date(), 'EEEE')

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            const {payload: {category}} = action
            const {tasks: stateTasks} = state
            oldTasks = stateTasks.active[category] ?? []
            newTasks = [...oldTasks, {text: action.payload.text}]
            newTaskWithId = newTasks.map(({text}, id) => ({text, id}))

            return {
                ...state,
                tasks: {
                    ...stateTasks,
                    active: {
                        ...stateTasks.active,
                        [category]: newTaskWithId
                    }
                },
                valuesStatistic: {
                    ...state.valuesStatistic,
                    created: ++state.valuesStatistic.created
                },
                observation: {
                    ...state.observation,
                    created: {
                        ...state.observation.created,
                        [nowDay]: ++state.observation.created[nowDay]
                    }
                }
            }
        case 'ADD_CATEGORY':
            const {name, color: icon} = action
            newCategories = [...state.categories, {name, icon}]
            newCategoriesWithId = newCategories.map(({name, icon}, id) => ({name, icon, id}))

            return {
                ...state,
                categories: newCategoriesWithId
            }
        case 'SET_ACTIVE_CATEGORY':
            return {
                ...state,
                selectedCategory: action.index
            }
        case 'DELETE_TASK':
            const {tasks} = cutTask(state, action, action.categoryTask)

            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [action.categoryTask]: {
                        ...state.tasks[action.categoryTask],
                        [action.selectedCategory]: tasks
                    }
                },
                valuesStatistic: {
                    ...state.valuesStatistic,
                    deleted: ++state.valuesStatistic.deleted
                }
            }
        case 'TASK_TO_INACTIVE':
            ({tasks: tasksClone, deletedTask} = cutTask(state, action, 'active'))
            oldTasks = state.tasks.inactive[action.selectedCategory] ?? []
            newTasks = [...oldTasks, ...deletedTask]
            newTaskWithId = newTasks.map(({text}, id) => ({text, id}))

            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    active: {
                        ...state.tasks[action.categoryTask],
                        [action.selectedCategory]: tasksClone
                    },
                    inactive: {
                        ...state.tasks.inactive,
                        [action.selectedCategory]: newTaskWithId
                    }
                },
                valuesStatistic: {
                    ...state.valuesStatistic,
                    ended: ++state.valuesStatistic.ended
                },
                observation: {
                    ...state.observation,
                    ended: {
                        ...state.observation.ended,
                        [nowDay]: ++state.observation.ended[nowDay]
                    }
                }
            }
        case 'TASK_TO_ACTIVE':
            ({tasks: tasksClone, deletedTask} = cutTask(state, action, 'inactive'))
            oldTasks = state.tasks.active[action.selectedCategory] ?? []
            newTasks = [...oldTasks, ...deletedTask]
            newTaskWithId = newTasks.map(({text}, id) => ({text, id}))

            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    active: {
                        ...state.tasks[action.categoryTask],
                        [action.selectedCategory]: newTaskWithId
                    },
                    inactive: {
                        ...state.tasks.inactive,
                        [action.selectedCategory]: tasksClone
                    }
                },
                valuesStatistic: {
                    ...state.valuesStatistic,
                    ended: --state.valuesStatistic.ended
                }
            }
        default:
            return state
    }
}


function cutTask(state, action, taskState) {
    const {selectedCategory, taskId} = action
    const indexTask = state.tasks[taskState][selectedCategory].findIndex(({id}) => id === taskId)
    const tasks = [...state.tasks[taskState][selectedCategory]]
    const deletedTask = tasks.splice(indexTask, 1)

    return {
        tasks,
        deletedTask
    }
}


export default tasks