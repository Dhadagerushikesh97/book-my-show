import React from 'react';
import MovieNavbar from '../components/Navbar/MovieNavbar.component';

const Movielayout = (props) => {
  return (
    <>
    <MovieNavbar/>
    {props.children}
    </>
  );
};

export default Movielayout;