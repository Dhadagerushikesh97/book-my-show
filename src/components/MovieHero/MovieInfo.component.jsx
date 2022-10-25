import React from 'react';

const MovieInfo = () => {
    return (
        <>
            <div className='flex flex-col gap-3  lg:gap-8'>
                <div className='flex items-center gap-3 md:px-4'>
                    <div className='w-40 h-8'>
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                            alt="premier"
                            className='w-full h-full' />
                    </div>
                    <span className='bg-bms-700 p-1 text-xs text-white rounded-md'>
                        Streaming Now
                    </span>
                </div>
                <h1 className='text-white lg:text-5xl font-bold hidden lg:block'>Spider-Man : No Way Home</h1>
                <h1 className='text-white lg:text-5xl font-bold hidden lg:block'>The Extended Version</h1>
                <div className='flex flex-col-reverse gap-3 lg:g-5 lg:flex-col'>
                    <div className='text-white font-light flex flex-col gap-2 md:px-4'>
                        <h4>English &bull;Languages &bull;Audio(1), Subtitles(1)</h4>
                        <h4>2h 28m &bull; Action,Adventure,Sci-Fi &bull; UA&bull; 2 Sep, 2022</h4>
                    </div>
                    <div className='flex items-center gap-3 md:px-4 md:w-screen lg:w-full '>
                        <button className='bg-red-600 w-full py-3 text-white font-semibold rounded-lg'>Rent ₹99</button>
                        <button className='bg-red-600 w-full py-3 text-white font-semibold rounded-lg'>Buy ₹449</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieInfo;