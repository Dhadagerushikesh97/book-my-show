import React from 'react'
import MovieHero from '../components/MovieHero/MovieHero.component';
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import Cast from '../components/Cast/CastComponent';
import TempPosters from "../config/TempPoster.config";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";


const Movie = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <>
      <MovieHero />
      <div className='my-5 container px-4 lg:ml-20 lg:w-2/3'>
        <div className='flex flex-col items-start gap-3'>
          <h2 className='text-gray-800 font-bold text-2xl'>About the movie</h2>
          <p>After a spell goes terribly wrong, Spider-Man (Tom Holland) is forced to battle foes from different dimensions, as he learns what it truly means to be a superhero.</p>
        </div>
        <div className='my-8'>
          <hr />
        </div>
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay cards* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                <p className="text-gray-600">
                  Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                  Pass @Rs.99
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='my-8'>
          <h2 className='text-gray-800 font-bold text-2xl mb-4'>Cast & Crew</h2>
          <div className='flex flex-wrap gap-4'>
            <Cast
              image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tom-holland-33741-15-12-2021-05-05-50.jpg"
              castName="Tom Hollad" role="Actor" />
            <Cast
              image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/zendaya-2016258-18-01-2022-11-21-40.jpg"
              castName="Zendaya" role="Actor" />
            <Cast
              image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/benedict-cumberbatch-6466-25-04-2018-02-01-01.jpg"
              castName="Benedict Cumberbatch" role="Actor" />
            <Cast
              image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/marisa-tomei-23232-24-03-2017-17-29-33.jpg"
              castName="Marisa Tomei" role="Actor" />
            <Cast
              image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/angourie-rice-38311-24-03-2017-16-05-52.jpg"
              castName="Angourie Rice" role="Actor" />
            <Cast
              image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/willem-dafoe-2526-1659523287.jpg"
              castName="Willem Dafoe" role="Actor" />
          </div>
        </div>
        <div className='my-8'>
          <hr />
        </div>
        <div className='my-8'>
          <PosterSlider
            config={settings}
            images={TempPosters}
            title="You might also like"
            isDark={false} />
        </div>
        <div className='my-8'>
          <hr />
        </div>
        <div className='my-8'>
          <PosterSlider
            config={settings}
            images={TempPosters}
            title="BMS XCLUSIV"
            isDark={false} />
        </div>
      </div>
    </>
  );
};

export default Movie;