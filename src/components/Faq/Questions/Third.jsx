import React, { useState } from 'react'
import '../index.css'
import arrow from '../icon-arrow-down.svg'

export default function Third() {

    const [active, setActive] = useState(false)

    const handleCLick = () => setActive(!active)


    return (

        <div className="question three">
            <p tabIndex="0" className="q" onClick={handleCLick}>
                How do I reset my password?
                <button onClick={handleCLick}><img src={arrow} alt="" /></button>

            </p>

            <div className="line"></div>


            {active ?
                <p className="answer">
                    Click “Forgot password” from the login page or “Change password” from your profile page.
                    A reset link will be emailed to you.
                </p> : null}
        </div>

    )
}