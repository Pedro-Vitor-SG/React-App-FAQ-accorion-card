import React, { useState } from 'react'
import '../index.css'
import arrow from '../icon-arrow-down.svg'

export default function Second() {

    const [active, setActive] = useState(false)

    const handleCLick = () => setActive(!active)


    return (

        <div className="question two">
            <p  tabIndex="0" className="q" onClick={handleCLick}>
                What is the maximum file upload size?
                    <button onClick={handleCLick}><img src={arrow} alt="" /></button>
            </p>

            <div className="line"></div>


            {active ?
                <p className="answer">
                    No more than 2GB. All files in your account must fit your allotted storage space.
                </p> : null}
        </div>

    )
}