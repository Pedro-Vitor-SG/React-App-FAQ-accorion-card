import React from 'react'
import './index.css'
import Fifth from './Questions/Fifth'

import First from './Questions/First'
import Fourth from './Questions/Fourth'
import Second from './Questions/Second'
import Third from './Questions/Third'

export default function Faq() {

    return (

        <main className="container-faq">
            <h1>FAQ</h1>

            <div className="container-questions">
                <First />

                <Second />

                <Third />

                <Fourth />

                <Fifth />
            </div>
        </main>
    )
}