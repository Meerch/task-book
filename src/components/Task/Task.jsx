import deleteIcon from "../../assets/img/icons/delete-7.webp"

const Task = ({id, makeTaskThenSomething, text, deleteTask, typeTask}) => {

    const defaultChecked = typeTask !== 'active'

    return (
        <div
            className="tasks__item">
            <div onClick={() => makeTaskThenSomething(id)} className="tasks__item-state">
                <label className="b-contain">
                    <span>{text}</span>
                    <input defaultChecked={defaultChecked} type="checkbox"/>
                    <div className="b-input"/>
                </label>
            </div>
            <div className="tasks__item-buttons">
                <button
                    onClick={() => deleteTask(id, typeTask)}
                    className="tasks__item-delete">
                    <img src={deleteIcon} alt="delete"/>
                </button>
            </div>
        </div>
    )
}

// <div
//                                     key={id}
//                                     className="tasks__item">
//                                     <div onClick={() => makeTaskThenActive(id)} className="tasks__item-state">
//                                         <label className="b-contain">
//                                             <span>{text}</span>
//                                             <input defaultChecked={true} type="checkbox"/>
//                                             <div className="b-input"/>
//                                         </label>
//                                     </div>
//                                     <div className="tasks__item-buttons">
//                                         <button
//                                             onClick={() => deleteActiveTask(id, 'inactive')}
//                                             className="tasks__item-delete">
//                                             <img src={deleteIcon} alt="delete"/>
//                                         </button>
//                                     </div>
//                                 </div>


export default Task
