import React,{useState,useMemo} from 'react'
import {BrowserRouter as Router , Route , Link} from "react-router-dom"
import {HomeContext} from './HomeContext'
import {AboutContext} from './AboutContext'
import { UserContext } from './UserContext'

export default function ContextUse(){

    const [user,setUser]=useState(null);

    const providerValue = useMemo( ()=> ({user,setUser}) , [user , setUser ])


    return(
        <Router>
            <div>
                <h1>useContext Hook: Login (Store User)</h1>
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

