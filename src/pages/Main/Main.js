import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Landing, About, Skills, Education, Experience, Contacts, Projects, Achievement, Certification } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>
            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Certification/>
            <Achievement />
            <Contacts />
        </div>
    )
}

export default Main
