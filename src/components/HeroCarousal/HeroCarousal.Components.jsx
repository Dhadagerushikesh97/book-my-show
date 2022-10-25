import React from "react";
import HeroSlider from "react-slick";

import { NextArrow,PrevArrow } from "./Arrows.Component";


const HeroCarousal = () => {

    const settingLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };

    const settings = {
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };

    const images = ["https://images.unsplash.com/photo-1661961112134-fbce0fdf3d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1666307533559-070b90d171a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    ];
    return (
        <>
            <div className="lg:hidden">
                <HeroSlider{...settings}>
                    {
                        images.map((image) => (
                            <div className="w-full h-56 md: h-80 py-3 ">
                                <img src={image} alt="testing" className="w-full h-full" />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
            <div className="hidden lg:block">
                <HeroSlider{...settingLG}>
                    {
                        images.map((image) => (
                            <div className="w-full h-96 px-2 py-3">
                                <img src={image} alt="testing" className="w-full h-full rounded-md" />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
        </>
    );
};

export default HeroCarousal;