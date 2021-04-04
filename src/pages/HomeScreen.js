import React from 'react'
import { Banner, Categories } from '../components';
import endPoints from '../tmdbRequests';
import styles from './style';
const  HomeScreen = () => {
    const classes = styles();
    return (
        <div className={classes.container}>
            <Banner />
            <Categories 
                title='NETFLIX ORIGINALS'
                fetchURL={endPoints.getNetflixOriginals}
                isLarge
            />
            <Categories 
                title='TRENDING'
                fetchURL={endPoints.getTrending}
            />
            <Categories 
                title='TOP RATED'
                fetchURL={endPoints.getTopRated}
            />
            <Categories 
                title='ACTION MOVIEW'
                fetchURL={endPoints.getActionMoview}
            />
            <Categories 
                title='COMEDY MOVIES'
                fetchURL={endPoints.getComedyMovies}
            />
            <Categories 
                title='HORROR MOVIEW'
                fetchURL={endPoints.getHorrorMoview}
            />
            <Categories 
                title='ROMANCE MOVIEW'
                fetchURL={endPoints.getRomanceMoview}
            />
            <Categories 
                title='DOCUMENTARIES'
                fetchURL={endPoints.getDocumentaries}
            />
        </div>
    )
}

export default HomeScreen
