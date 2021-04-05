import React, { useState } from 'react'
import '../index.css'
import arrow from '../icon-arrow-down.svg'

export default function Fifth() {

    const [active, setActive] = useState(false)

    const handleCLick = () => setActive(!active)


    return (

        <div className="question five">
            <p tabIndex="0" className="q" onClick={handleCLick}>
                Do you provide additional support?
            <button onClick={handleCLick}><img src={arrow} alt="" /></button>

            </p>

            <div className="line"></div>


            {active ?
                <p className="answer">
                    Chat and email support is available 24/7. Phone lines are open during normal business hours.
                </p> : null}
        </div>


    )
}