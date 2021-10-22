import React from 'react'
import './Banner.css'
import { useState, useEffect } from 'react'
import axios from './axios.js'
import req from './Request.js'
import  {BsFillPlayFill} from 'react-icons/bs'
import {AiOutlineInfoCircle} from 'react-icons/ai'

function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const url = req.fetchNetflixOriginals
            const request = await axios({ url: url, baseURL: 'https://api.themoviedb.org/3' })
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
                )
            return request;
        }
        fetchData();
    }, []);

    console.log(movie)

    const truncate = (text, n) => {
        return text?.length > n ? text.substring(0, n - 1) + '...' : text;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="bannerContents">
                <h1 className="bannerTitle">
                    {movie?.title || movie?.name ||movie?.original_name}
                </h1>
                <h1 className="bannerDesc">{truncate(movie?.overview, 150)}</h1>
                <div className="bannerButtons">
                    <button className="bannerButton reproButton"><BsFillPlayFill className="Icon"/>Reproducir</button>
                    <button className="bannerButton moreButton"><AiOutlineInfoCircle className="Icon"/>Más información</button>
                </div>
            </div>
            <div className="bannerFadeButton" />
        </header>
    )
}

export default Banner
