import React from 'react'
import './AlbumSection.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../../Assets/albums/a0169049054_2.jpg'
import slide2 from '../../Assets/albums/a1044223294_2.jpg'
import slide3 from '../../Assets/albums/a1264983291_2.jpg'
import slide4 from '../../Assets/albums/a1695987948_2.jpg'
import slide0 from '../../Assets/albums/glassSm.png'
import { Link } from 'react-router-dom';

const AlbumSection = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };
    const sliderSettingsMob = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <div className='Flex-albums'>
            <div className="container">
                <h1 className='title'>Featured Albums</h1>

                <div className="album-slider">
                    <Slider {...sliderSettings}>
                        <div>
                            <img src={slide0} alt="Slide 0" />
                        </div>
                        <div>
                            <img src={slide1} alt="Slide 1" />
                        </div>
                        <div>
                            <img src={slide2} alt="Slide 2" />
                        </div>
                        <div>
                            <img src={slide3} alt="Slide 1" />
                        </div>
                        <div>
                            <img src={slide4} alt="Slide 2" />
                        </div>

                    </Slider>
                </div>
                <div className="album-slider-mobile">
                    <Slider {...sliderSettingsMob}>
                        <div>
                            <img src={slide0} alt="Slide 0" />
                        </div>
                        <div>
                            <img src={slide1} alt="Slide 1" />
                        </div>
                        <div>
                            <img src={slide2} alt="Slide 2" />
                        </div>
                        <div>
                            <img src={slide3} alt="Slide 1" />
                        </div>
                        <div>
                            <img src={slide4} alt="Slide 2" />
                        </div>

                    </Slider>
                </div>
                <div className="border-btn">
                    <button><Link to='/albums'>View All</Link></button>
                </div>
            </div>

        </div>
    )
}

export default AlbumSection