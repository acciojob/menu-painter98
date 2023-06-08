import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Menu from './Menu.js';
import HomePage from './homepage.js';
import NavBar from './navbar.js';
import '../styles/App.css';

function App(){

    return (
        <>
        <h1>Our Menu</h1>
        <hr/>
        <NavBar/>
        <Routes>
            <Route path='/' element={<HomePage/>}>
                <Route path='all' element={<Menu state={''}/>}/>
                <Route path='breakfast' element={<Menu state={'breakfast'}/>}/>
                <Route path='lunch' element={<Menu state={'lunch'}/>}/>
                <Route path='Shakes' element={<Menu state={'shakes'}/>}/>
            </Route>
        </Routes>
        </>
    )
}

export default App;

