import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import TempPosters from "../config/TempPoster.config";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import Slider from "react-slick";

const HomePage = () => {
    return (
        <>
            <div className="flex flex-col gap-10">
            <div className="container mx-auto px-4 ">
                <h1 className="text-2xl font-bold text-gray-800 my-3">
                    The best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>
            <div className="bg-bms-800 py-12 ">
            <div className="container mx-auto px-4 flex flex-col gap">
                    <div className="hidden md:flex">
                        <img
                            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                            alt="premier"
                            className="w-fill h-full"
                        />
                    </div>
                    <PosterSlider images = {TempPosters} title="Premieres" subtitle="Brand new movie every friday" isDark={true}/>
                </div>
            </div>
            </div>
            <div className="container mx-auto px-4 my-8">
            <PosterSlider 
            images = {TempPosters} 
            title="Online Streaming events " 
            isDark={false}/>
            </div>
            <div className="container mx-auto px-4 my-8">
            <PosterSlider 
            images = {TempPosters} 
            title="Outdoor events " 
            isDark={false}/>
            </div>
        </>
    );
};

export default HomePage;