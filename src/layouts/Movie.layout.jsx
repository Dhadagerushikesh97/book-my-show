import React, { useEffect, useContext}  from 'react';
import MovieNavbar from '../components/Navbar/MovieNavbar.component';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../context/movie.context';
import axios from 'axios';

const Movielayout = (props) => {
const { id } = useParams();
const { movie,setMovie } = useContext(MovieContext); 

useEffect(() => {
  const requestMovie = async () => {
    const getMovieData = await axios.get(`/movie/${id}`);
    setMovie(getMovieData.data);
  };
  requestMovie();
}, [id]);

  return (
    <>
    <MovieNavbar/>
    {props.children}

    </>
  );
};

export default Movielayout;