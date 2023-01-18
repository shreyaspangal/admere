import React from 'react';
import { Navigate } from 'react-router-dom';
import Hero from './Hero';
import { useNavigate } from 'react-router-dom';

function NoRouteFound() {
    const navigate = useNavigate();

    return (
        <div>
            <Hero heroTitle='Oops, 404 page not found!' btnText="Go home" onClick={() => navigate("/home")} bgHeight="100vh" bgInnerHeight="100vh"/>
        </div>
    )
}

export default NoRouteFound