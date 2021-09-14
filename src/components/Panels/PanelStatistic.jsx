import React from 'react'
import {useSelector} from "react-redux"

const PanelStatistic = () => {
    const valuesStatistic = useSelector(({tasks}) => tasks.valuesStatistic)

    const taskStatistic = [
        {
            name: 'Создано',
            value: valuesStatistic.created
        },
        {
            name: 'Завершено',
            value: valuesStatistic.ended
        },
        {
            name: 'Удалено',
            value: valuesStatistic.deleted
        }
    ]

    return (
        <div className="panel panel-tasks__statistics">
            <div className="tasks-statistics__title panel__title">Успехи за неделю</div>
            <div className="tasks-statistics__items">
                {
                    taskStatistic && taskStatistic.map(({name = 'Что-то пошло не так', value = 0}) => (
                        <div
                            key={name}
                            className="tasks-statistics__item">
                            <div className="tasks-statistics__item-name">{name}</div>
                            <div className="tasks-statistics__item-value">
                                <div className="tasks-statistics__item-data">
                                    <div className="tasks-statistics__item-count">{value}</div>
                                    <div className="tasks-statistics__item-subtitle">задач</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PanelStatistic
