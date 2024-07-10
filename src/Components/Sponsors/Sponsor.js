import React from 'react'
import './Sponsor.css'
import s1 from '../../Assets/sponsor/s-1.png'
import s2 from '../../Assets/sponsor/s-2.png'

const Sponsor = () => {
  return (
    <div className='Sponsors'>
        <h1 className='title'>Sponsors</h1>
        <div className="flex-sponsors container">
            <div className="image">
                <a href="https://www.youtube.com/@TatsTopVideos" ><img src={s1} alt='s1'/></a>
            </div>
            <div className="image">
                <a href="https://www.dubby.gg/collections/all?gad=1" ><img src={s2} alt='s2'/></a>
            </div>
        </div>
    </div>
  )
}

export default Sponsor