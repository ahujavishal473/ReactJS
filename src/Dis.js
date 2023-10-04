import './Dis.css'
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Dis() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get("https://www.omdbapi.com/?s=man&apikey=4a3b711b")
            .then(response => {
                setMovies(response.data.Search)
            })
             .then(res=>res.json())
            .then(json=>console.log(json))
    }, []);

    return (
        <>
            <div className="head">
            <center>  <h1>Movies info</h1> </center>
    
            </div>
            <div className="show">
    
                 {
                         movies.map(movie => (
                        <div className="info" key={movie.imbdID}>
                            
                            <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: "none" }}>
                            
                                    <h3>{movie.Title}</h3>
                                
                                    <img src={movie.Poster} alt={movie.Title} height="400px" />
                            </Link>
                            
                        </div>

                ))
                 }
         </div>
         <div className='note'><h3>Note:For movie other information click on poster or Name</h3></div>
         </>
    );

}
export default Dis;