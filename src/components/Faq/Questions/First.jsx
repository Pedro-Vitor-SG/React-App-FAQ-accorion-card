import React, { useState } from 'react'
import '../index.css'
import arrow from '../icon-arrow-down.svg'

export default function First() {

const [active,setActive] =useState(false)

 const handleCLick = ( ) =>  setActive (!active)
 

    return (

            <div className="question one">
                <p tabIndex="0" className="q" onClick={handleCLick}>
                    How many team members can I invite?
                    <button onClick={handleCLick}><img src={arrow} alt=""  /></button>
               </p>

               <div className="line"></div>

               {active  ?   
                <p className="answer">
                    You can invite up to 2 additional users on the Free plan. There is no limit on
                    team members for the Premium plan.
                </p>: null}

            </div>

    )
}