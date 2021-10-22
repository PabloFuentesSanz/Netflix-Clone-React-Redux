import React from 'react'
import "./HomeScreen.css"
import Nav from './Nav.js'
import Banner from './Banner'
import req from "./Request"
import Row from './Row'
function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav/>
            
            <Banner/>
            <Row title='Tendencias ahora' fetchUrl={req.fetchActionMovies} />
            <Row title='Solo en Netflix' fetchUrl={req.fetchNetflixOriginals} isLargeRow/>
            <Row title='Las más vistas' fetchUrl={req.fetchTopRated} />
        </div>
    )
}

export default HomeScreen
