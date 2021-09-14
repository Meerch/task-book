import {useDispatch, useSelector} from "react-redux"
import {deleteTask, makeTaskActive, makeTaskInactive} from "../../redux/actions/tasks"
import Task from "../Task/Task"

const PanelTasks = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(({tasks}) => ({
        active: tasks.tasks.active[tasks.selectedCategory],
        inactive: tasks.tasks.inactive[tasks.selectedCategory],
        selectedCategory: tasks.selectedCategory
    }))


    const elNoTasks = (<div className="tasks__item-clear">Здесь ничего нет</div>)

    const deleteActiveTask = (taskId, categoryTask) => {
        dispatch(deleteTask(taskId, categoryTask, tasks.selectedCategory))
    }


    const makeTaskThanInactive = (taskId) => {
        dispatch(makeTaskInactive(taskId, tasks.selectedCategory))
    }

    const makeTaskThenActive = (taskId) => {
        dispatch(makeTaskActive(taskId, tasks.selectedCategory))
    }


    return (
        <div className="tasks panel">
            <div className="tasks__active">
                <div className="tasks__active-title panel__title">Активные задачи</div>
                <div className="tasks__items">
                    {
                        tasks.active && tasks.active.length !== 0
                            ? tasks.active.map(({text, id}) => (
                                <Task
                                    key={id}
                                    text={text}
                                    id={id}
                                    makeTaskThenSomething={makeTaskThanInactive}
                                    deleteTask={deleteActiveTask}
                                    typeTask='active'
                                />
                            ))
                            : elNoTasks
                    }
                </div>
            </div>
            <div className="tasks__inactive">
                <div className="tasks__active-title panel__title">Завершённые задачи</div>
                <div className="tasks__items">

                    {
                        tasks.inactive && tasks.inactive.length !== 0
                            ? tasks.inactive.map(({text, id}) => (
                                <Task
                                    key={id}
                                    text={text}
                                    id={id}
                                    makeTaskThenSomething={makeTaskThenActive}
                                    deleteTask={deleteActiveTask}
                                    typeTask='inactive'
                                />
                            ))
                            : elNoTasks
                    }

                </div>
            </div>
        </div>
    )
}

export default PanelTasks
