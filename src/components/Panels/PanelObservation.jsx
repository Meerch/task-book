import {useSelector} from "react-redux"
import {engToRuDays} from "../../constants";

const PanelObservation = () => {



    let {created, ended} = useSelector(({tasks: {observation}}) => observation)


    created = engToRuDays[findMaxNumberOnObj(created)]
    ended = engToRuDays[findMaxNumberOnObj(ended)]


    return (
        <div className="observation-panel panel">
            <div className="observation__title panel__title">Наблюдение</div>
            <div className="observation">
                <div className="observation__items">
                    <div className="observation__item">Больше всего задача вы создаёте
                        в <span>{created}</span></div>
                    <div className="observation__item">Больше всего задача вы завершаете в <span>{ended}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PanelObservation


function findMaxNumberOnObj(obj) {
    const sortedEntriesByVal = Object.entries(obj).sort(([, v1], [, v2]) => v2 - v1)
    return sortedEntriesByVal[0][0]
}