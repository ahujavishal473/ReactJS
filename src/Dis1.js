import './Dis1.css';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Dis1() {
    const { imdbID } = useParams();
    const [selectedmovie, setSelectedmovie] = useState();

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=4a3b711b`)
            .then(response => {
                // console.log(response.data)
                setSelectedmovie(response.data);
            })
    }, [imdbID]);


    return (
        selectedmovie &&
        <div className="selected">
            <center>
            <h1>Movie details</h1>
            <h3>Movie imdbID:{selectedmovie.imdbID}</h3>
            <h3>Movie Name:{selectedmovie.Title}</h3>
            <h3>Movie Realsed Year:{selectedmovie.Year}</h3>
            <h3>Movie Type:{selectedmovie.Type}</h3>
            <img src={selectedmovie.Poster} alt={selectedmovie.Title} />
            <br />
            <br />
            {/* <Link to="/"><button class="btn">Back</button></Link> */}
            </center>
        </div>
    );
}
export default Dis1;