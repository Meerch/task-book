import {useState} from 'react'
import timeIcon from '../../assets/img/icons/time-4.webp'
import dateIcon from '../../assets/img/icons/calendar-1.webp'
import {format} from 'date-fns'
import {months} from "../../constants"

const PanelTime = () => {
    const [date, changeDate] = useState({})

    setTimeout(() => {
        let [year, month, day, hour, minutes, seconds] = format(new Date(), 'yyyy-M-dd-hh-mm-ss').split('-')
        let date = {hour, minutes, seconds, day, month: months[month], year}
        changeDate(date)
    }, 1000)

    const {hour = '?', minutes = '?', seconds = '?', day = '?', month = '?', year = '?'} = date

    return (
        <div className="time-info__panel panel">
            <div className="time-info__title panel__title">Такс такс такс</div>
            <div className="time-info__data">
                <div className="time">
                    <div className="time__title">На часах у нас</div>
                    <div className="time__data">
                        <div className="time__data-icon">
                            <img src={timeIcon} alt=""/>
                        </div>
                        <div className="time__data-value">{hour}:{minutes}:{seconds}</div>
                    </div>
                </div>
                <div className="date">
                    <div className="date__title">А сегодня у нас</div>
                    <div className="date__data">
                        <div className="date__data-icon">
                            <img src={dateIcon} alt=""/>
                        </div>
                        <div className="date__data-value">{day} {month} {year}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PanelTime