import React from 'react';
import Poster from '../Poster/poster.component';
import PosterCarousalsettings from '../../config/PosterCarousal.cofig';
import Slider from 'react-slick';

const PosterSlider = (props) =>{
    const sliderConfig = props.config ? props.config : PosterCarousalsettings;
  return (
    <>
    <div className='flex flex-col items-start my-2'>
        <h3 className={`text-2xl font-bold ${
          props.isDark ? "text-white" : "text-gray-800"
          }`}
          >
            {props.title}
          </h3>
        <p className={`text-sm ${
          props.isDark ? "text-white" : "text-gray-800"
          }`}>{props.subtitle}</p>
    </div>
    <Slider {...sliderConfig}>
        {props.images.map((image) =>( 
        <Poster {...image} isDark={props.isDark} />
        ))}
    </Slider>
    </>
  );
};

export default PosterSlider;