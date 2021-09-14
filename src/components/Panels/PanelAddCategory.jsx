import {useState} from 'react'
import classNames from "classnames"
import {addCategory} from "../../redux/actions/tasks"
import {useDispatch} from "react-redux";
import {defaultColors} from "../../constants";

// Accept TODO: Создал новый dispatch, а не прокидываю его

const PanelAddCategory = ({closeWindow}) => {
    const [selectedColor, changeSelectedColor] = useState(0)
    const [nameCategory, setNameCategory] = useState('')
    const dispatch = useDispatch()

    const addNewCategory = () => {
        dispatch(addCategory(nameCategory, defaultColors[selectedColor]))
        closeWindow(false)
    }


    return (
        <div className="add-category">
            <textarea
                onInput={(e) => setNameCategory(e.target.value)}
                className="add-category__input"
                placeholder="Название..."/>
            <div className="add-category__colors">
                <div className="colors__title">Цвет:</div>
                <div className="colors__items">
                    {
                        defaultColors.map((color, index) => (
                            <div
                                key={color}
                                onClick={() => changeSelectedColor(index)}
                                className={classNames('colors__item', {
                                    'selected': selectedColor === index
                                })}
                                style={{backgroundColor: color}}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="add-category__buttons">
                <div onClick={() => addNewCategory()} className="add-category__button-accept">
                    <div/>
                </div>
                <div onClick={() => closeWindow(false)} className="add-category__button-close">
                    <div/>
                </div>
            </div>
        </div>
    )
}

export default PanelAddCategory
