import React, { useEffect, useState } from 'react';
import './StopWatch.css'

const StopWatch = () => {
    const [stopWatchOn, setStopWatchOn] = useState(false);
    const [time, setTime] = useState(0)
    useEffect(() => {
        let interval = null;
        if (stopWatchOn) {
            interval = setInterval(() => {
                setTime(oldTime => oldTime + 10)
            }, 10)
        }
        else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [stopWatchOn])
    return (
        <div>
            <div className='stopwatch-time'>
                <span>
                    {
                        ('0' + Math.floor(time / 60000)).slice(-2)
                    }:
                </span>
                <span>
                    {
                        ('0' + Math.floor(((time / 1000) % 60))).slice(-2)
                    }:
                </span>
                <span>
                    {
                        ('0' + (time / 10) % 100).slice(-2)
                    }
                </span>

            </div>
            <div className='btn-container'>
                {
                    !time && <button className='stopwatch-btn btn-start' onClick={() => setStopWatchOn(true)} >Start</button>
                }
                {
                    (time && stopWatchOn) ? <button className='stopwatch-btn btn-stop' onClick={() => setStopWatchOn(false)} >Stop</button> : null
                }
                {
                    (time && !stopWatchOn) ? <button className='stopwatch-btn btn-start' onClick={() => setStopWatchOn(true)} >Resume</button> : null
                }

                {
                    <button className='stopwatch-btn btn-reset' onClick={() => { setStopWatchOn(false); setTime(0) }} >Reset</button>
                }

            </div>
        </div>
    );
};

export default StopWatch;