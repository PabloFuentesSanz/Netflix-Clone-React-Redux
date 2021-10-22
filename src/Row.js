import React from 'react'
import './Row.css'
import { useEffect, useState } from 'react'
import axios from './axios';
function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData() {
            const request = await axios({ url: fetchUrl, baseURL: 'https://api.themoviedb.org/3' })
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl])
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="rowPosters">
                {movies.map(movie => (
                    <img className={`rowPoster ${isLargeRow && "rowLargePoster"}`} src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt="" />
                ))}
            </div>
        </div>
    )
}

export default Row
