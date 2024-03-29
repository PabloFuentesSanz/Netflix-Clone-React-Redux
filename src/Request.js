const API_KEY = "708278112f005cbacffaecf3731709de";

const req = {
    fetchTrending: `/trending/all/week/?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv/?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated/?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie/?api_key=${API_KEY}&with_genres=28`,
}

export default req;