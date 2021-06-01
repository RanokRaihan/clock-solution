import React, { useEffect, useRef, useState } from 'react';
import './Timer.css';
import beep from '../../beep.mp3'
import Modal from '../Modal/Modal';

const Timer = () => {
    const [time, setTime] = useState({
        minute: 0,
        second: 0
    })
    const [finalTime, setFinalTime] = useState(0)
    const [timerOn, setTimerOn] = useState(false)
    const alarm = useRef();

    //warning box
    const [showWarning, setShowWarning] = useState(false)

    const handleBlur = event => {
        if (event.target.name === 'minute') {
            setTime(oldTime => {
                return (
                    {
                        minute: event.target.value * 1,
                        second: time.second
                    }
                )
            })
        }
        if (event.target.name === 'second') {
            setTime(oldTime => {
                return (
                    {
                        minute: time.minute,
                        second: event.target.value * 1
                    }
                )
            })
        }

    }
    useEffect(() => {

        let interval = null;
        if (timerOn) {
            interval = setInterval(() => {
                setFinalTime(oldTime => oldTime - 1)
                console.log(finalTime);
            }, 1000)
            if (!finalTime) {
                clearInterval(interval)
                alarm.current.play()

            }

        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [timerOn, finalTime])

    const handleStart = (isStarting) => {
        if (isStarting) {
            if (time.minute !== 0 || time.second !== 0) {
                setFinalTime(time.minute * 60 + time.second)
                setTimerOn(true)
                // console.log(alarm.current);
            } else {
                setShowWarning(true)
            }

        } else {
            setTimerOn(false);
            setFinalTime(0);
            setTime({
                minute: 0,
                second: 0
            })
            alarm.current.load()

        }



    }

    return (
        <div>
            {
                !timerOn && <div className='timer-input'>
                    <input onBlur={handleBlur} type="number" name="minute" className='input-left' defaultValue='00' min="0" />
                    <span>:</span>
                    <input onBlur={handleBlur} type="number" name="second" defaultValue='00' min="0" />
                </div>

            }
            {
                timerOn && <p className='timer-time'>

                    <span>
                        {
                            ('0' + Math.floor(finalTime / 60)).slice(-2)
                        }:
                    </span>
                    <span>
                        {
                            ('0' + finalTime % 60).slice(-2)
                        }
                    </span>
                </p>
            }
            <div className="btn-container">
                {
                    !timerOn && <button className='stopwatch-btn btn-start' onClick={() => handleStart(true)}>start</button>

                }
                {
                    timerOn && <button className='stopwatch-btn btn-reset' onClick={() => handleStart(false)}>Reset</button>
                }
            </div>
            {
                showWarning && <Modal hider={setShowWarning}></Modal>
            }

            <audio loop ref={alarm}>
                <source src={beep} type="audio/mp3" />
            </audio>
        </div>
    );
};

export default Timer;