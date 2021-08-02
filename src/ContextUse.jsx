
// what we want to do : greet the user on every page
// how: using useContext
// we will share same context among all the components

import React,{useState,useMemo} from 'react'
import {BrowserRouter as Router , Route , Link} from "react-router-dom"
import {HomeContext} from './HomeContext'
import {AboutContext} from './AboutContext'
import { UserContext } from './UserContext'

export default function ContextUse(){

    const [text,setText]=useState('ola');

    const providerValue = useMemo( () => ( {text , setText}), [text,setText] )
    // we dont want to re-rende text and setText everytime, only when they change

    return(
        <Router>
            <div>
                <h1>useContext Hook</h1>
                {/* this nav appears on every page */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                            {/* use Links not <a> */}
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>

                {/* all components with which we want to share this context , wrap them  */}
                <UserContext.Provider value={providerValue}>
                    <Route path='/' exact component ={HomeContext}/>
                    <Route path='/about' component ={AboutContext}/>
                </UserContext.Provider>

                {/* 
                <UserContext.Provider value=" ">
                   //all the components to which we want to share a common context

                   // we can access this value in all its child components
                </UserContext.Provider> 
                */}

            </div>
        </Router>
    )
}

