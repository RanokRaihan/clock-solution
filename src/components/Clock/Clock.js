import React, { useEffect, useState } from 'react';
import './Clock.css'

const Clock = () => {
    //month name
    const monthFull = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    // const monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    //day name
    const daysIndex = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let time = new Date().toLocaleTimeString();
    let localDate = new Date().toLocaleDateString();
    let day = new Date().getDay();

    const [currentTime, setCurrentTime] = useState(time);
    const [currentDate, setCurrentDate] = useState(localDate)
    const [weekDay, setWeekDay] = useState(day)

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        localDate = new Date().toLocaleDateString();
        day = new Date().getDay();
        setCurrentTime(time);
        setCurrentDate(localDate)
        setWeekDay(day)
    }
    useEffect(() => {
        let interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <div className="time-wrapper">
                <div className='hr-min'>
                    <p>{('0' + currentTime.split(':')[0]).slice(-2)}:{('0' + currentTime.split(':')[1]).slice(-2)}</p>
                </div>
                <div className="sec-am-pm">
                    <p className='sec'>{currentTime.slice(5, 7)}</p>
                    <p className='am-pm'>{currentTime.slice(8, 10)}</p>
                </div>
            </div>
            <div className="date-wrapper">
                <p className="date">
                    {daysIndex[weekDay] + ', ' + monthFull[(currentDate.split('/')[0]) * 1] + ' '}
                    {('0' + currentDate.split('/')[1]).slice(-2) + ', '}
                    {currentDate.split('/')[2]}

                </p>
            </div>
        </div>
    )
};

export default Clock;