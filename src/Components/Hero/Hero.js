import React from 'react'
import './Hero.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide4 from '../../Assets/hero-fades/s4.png'
import slide5 from '../../Assets/hero-fades/glass.png'
import videofile from '../../Assets/hero-fades/vid1.mp4'
import videofile2 from '../../Assets/hero-fades/vid2.mp4'
import vid from '../../Assets/hero-fades/mob.mp4'

const Hero = () => {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        Speed: 2500,
        arrows: false,
    };

    return (

        <>
            <div className="hero-slider">
                <Slider {...sliderSettings}>

                    <div className='slide5'>
                        <img src={slide5} alt="slide5" />
                    </div>
                    <div>
                        <video autoPlay loop muted src={videofile}>
                        </video>
                    </div>
                    <div>
                        <video autoPlay loop muted src={videofile2}>
                        </video>
                    </div>
                    <div>
                        <img src={slide4} alt="Slide 4" />
                    </div>
                    {/* <div>
                    <img src={slide1} alt="Slide 1" />
                </div>
                <div>
                    <img src={slide2} alt="Slide 2" />
                </div>
                <div>
                    <img src={slide3} alt="Slide 3" />
                </div>
                
                <div>
                    <img src={slide5} alt="Slide 5" />
                </div> */}

                </Slider>
            </div>
            <div className='mob-video'>
                <video autoPlay muted loop src={vid}></video>
            </div>
        </>
    )
}

export default Hero;