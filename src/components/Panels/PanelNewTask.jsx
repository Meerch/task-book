import {useEffect, useState} from 'react'
import close from '../../assets/img/icons/delete-1.webp'
import classNames from "classnames"
import {addTask} from "../../redux/actions/tasks"
import {useDispatch, useSelector} from "react-redux"

const PanelNewTask = ({changeVisibilityTask}) => {

    const dispatch = useDispatch()
    const categories = useSelector(({tasks}) => tasks.categories)
    const [selectedCategory, changeSelectedCategory] = useState(0)
    const [textTask, setTextTask] = useState('')

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])


    const addNewTask = (text, category) => {
        dispatch(addTask({
            text,
            category
        }))
        changeVisibilityTask(false)
    }

    const setSelectedCategory = (index) => {
        if (selectedCategory !== index) {
            changeSelectedCategory(index)
        }
    }

    return (
        <>
            <div onClick={() => changeVisibilityTask(false)} className="blur"/>

            <div className="panel__add-task">
                <div className="add-task">
                    <div className="add-task__header">
                        <h1 className="add-task__title">Новая задача</h1>
                        <div onClick={() => changeVisibilityTask(false)} className="add-task__close">
                            <img src={close} alt="Закрыть" className="add-task__icon"/>
                        </div>
                    </div>
                    <textarea onInput={(e) => setTextTask(e.target.value)} placeholder="Задача..."
                              className="add-task__input"/>
                    <div className="add-task__categories">
                        <div className="categories__title">Категория:</div>
                        <div className="categories__items">
                            {
                                categories.map(({name: category, id}) => (
                                    <div
                                        key={category}
                                        className={classNames("category", {
                                            'selected': selectedCategory === id
                                        })}
                                        onClick={() => setSelectedCategory(id)}>
                                        <span>{category}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <button
                        onClick={() => addNewTask(textTask, selectedCategory)}
                        className="add-task__button">
                        <span>Добавить</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default PanelNewTask
