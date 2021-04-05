import React, { useState } from 'react'
import '../index.css'
import arrow from '../icon-arrow-down.svg'

export default function Fourth() {

    const [active, setActive] = useState(false)

    const handleCLick = () => setActive(!active)


    return (


        <div className="question four">
            <p tabIndex="0" className="q" onClick={handleCLick}>
                Can I cancel my subscription?
                    <button onClick={handleCLick}><img src={arrow} alt="" /></button>

            </p>

            <div className="line"></div>

            {active ? <p className="answer">
                Yes! Send us a message and we’ll process your request no questions asked.
                   </p> : null}

        </div>



    )
}