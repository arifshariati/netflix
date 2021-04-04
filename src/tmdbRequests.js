const API_KEY = '460c60b742609eef550eefdbe5637bab';
const endPoints = {
    getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    getTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    getActionMoview:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    getComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    getHorrorMoview: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    getRomanceMoview: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    getDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default endPoints;