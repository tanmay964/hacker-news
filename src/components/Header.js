import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'
export const Header = () => {
    return (
        <BrowserRouter>
        <header className = "header-links">
        <Link to ="/"><h3>Hacker News</h3></Link>
        <Link to="/new" >New</Link>
        <Link to="/past" >Past</Link>
        <Link to="/comments" >Comments</Link>
        <Link to="/ask" >Ask</Link>
        <Link to="/show" >Show</Link>
        <Link to="/jobs" >Jobs</Link>
        
        </header>

        </BrowserRouter>
    )
}