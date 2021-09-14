const ButtonAddTask = ({changeVisibilityTask}) => {
    return (
        <button onClick={() => changeVisibilityTask(true)} className="panel-tasks__add-task">
                    <span className="plus">
                        <div/>
                    </span>
            <span>Новая задача</span>
        </button>
    )
}

export default ButtonAddTask
