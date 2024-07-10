import React from 'react'
import './VideosSection.css'
import { PiBatteryHighBold } from 'react-icons/pi'

const VideosSection = () => {
    return (
        <div className="Videos">
            <fieldset>
                <legend>Videos</legend>
                <div className="red">
                    <div><div className="battery"><PiBatteryHighBold className='bat-icon' /></div></div>
                    <div className='both-recs'>
                        <div className="cam">REC</div>
                        <div className="redDot"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="flex-items">
                        <iframe  src="https://www.youtube.com/embed/p-dpImCUDQ0?si=EuB7Ogm1v8Ee45o5&amp;start=11" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="flex-items">
                        <iframe  src="https://www.youtube.com/embed/V1-z1Rg6ZDI?si=ALGvcxFnNiBv130e&amp;start=11" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="flex-items">
                        <iframe  src="https://www.youtube.com/embed/OXlBXQqZIa4?si=sXflHlL9oOyoO8X1&amp;start=11" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="flex-items">
                        <iframe  src="https://www.youtube.com/embed/lCG3BLDdlug?si=oZYMzmwP8hvgRtvv&amp;start=11" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                </div>
                <div className="centered-btn border-btn">
                    <button><a href="https://www.youtube.com/@StudioMercyMusic" target='_blank' rel='noreferrer'>View All</a></button>
                </div>
            </fieldset>
        </div>
    )
}

export default VideosSection