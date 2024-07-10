import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import AlbumSection from '../../Components/AlbumsSection/AlbumSection'
import Who from '../../Components/Who/Who'
import Footer from '../../Components/Footer/Footer'
import Sponsor from '../../Components/Sponsors/Sponsor'

const Landing = () => {
    return (
        <div>
            <Header />
            <Hero />
            <AlbumSection />
            <Who />
            <Sponsor/>
            <Footer />
        </div>
    )
}

export default Landing