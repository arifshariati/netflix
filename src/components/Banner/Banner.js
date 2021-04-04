import React, { useState, useEffect} from 'react';
import axios from '../../axios';
import endPoints from '../../tmdbRequests';
// MUI
import {
    Typography, 
    Button
} from '@material-ui/core';
import styles from './style';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
const Banner = () => {
    const classes = styles();
    const [movie, setMovie] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const request = await axios.get(endPoints.getNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            );
            return request;
        };
        fetchData();
    },[]);
    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n-1) + " .... " : string;
    }
    return (
        <header 
            className={classes.banner} 
            style={{ 
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`, 
                backgroundSize:'cover',
                backgroundPosition:'center center'
            }}
        >
            <div className={classes.banner__contents}>
                <Typography 
                    variant="h1" 
                    style={{
                        fontWeight:'bold', 
                        paddingBottom:'1rem', 
                        color:'white'
                    }}
                >
                    {movie?.title || movie?.name || movie?.original_name}
                </Typography>
                <div className={classes.banner__buttons}>
                    <Button 
                        variant="contained" 
                        color='primary' 
                        className={classes.banner__buttons} 
                        startIcon={<PlayCircleFilledWhiteIcon />}
                    >
                            Play
                    </Button>
                    <Button 
                        variant="contained" 
                        className={classes.banner__buttons}
                    >
                        My List
                    </Button>
                </div>
                <Typography 
                    variant="body1" 
                    style={{color:'white'}}
                >
                    {truncate(movie?.overview,150)}
                </Typography>
            </div>
            <div className={classes.banner__fadeBottom} />
        </header>
    )
}

export default Banner;
