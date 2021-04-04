import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import styles from './style';
import axios from '../../axios';
const Categories = ({ title, fetchURL, isLarge = false }) => {
    const classes = styles();
    const [movies, setMovies] = useState([]);
    const base_url = 'https://image.tmdb.org/t/p/original/';
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        };
        fetchData();
    }, [fetchURL]);
    return (
        <div className={classes.container}>
            <Typography
                variant='h5'
                color='primary'
                style={{ marginBottom:'0.5rem'}}
            >
                {title}
            </Typography>
            <div className={classes.posters}>
                {
                    movies.map(movie => (
                        ((isLarge && movie.poster_path) ||
                            (!isLarge && movie.backdrop_path))
                        && (
                            <img
                                className={`${classes.poster} ${isLarge && classes.posterLarge}`}
                                key={movie.id}
                                src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path
                                    }`} 
                                alt={`${movie.name}`}
                            />
                        )
                    ))
                }
            </div>

        </div>
    )
}

export default Categories;
