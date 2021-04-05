import React from 'react'
import './index.css'

import WomanDesktop from './illustration-woman-online-desktop.svg'
import WomanMobile from './illustration-woman-online-mobile.svg'
import box from './illustration-box-desktop.svg'

export default function LeftImg() {

    const width = window.innerWidth

    return (
        <section className="container-img">
            {width >= 771 ? <img src={box} alt="Box-img" className="box" /> : null}

            {width <= 770 ?
                <img src={WomanMobile} alt="Women-Mobile" className="womanMobile" />
                :
                <img src={WomanDesktop} alt="Women-Desktop" className="woman" />}
        </section>
    )
}