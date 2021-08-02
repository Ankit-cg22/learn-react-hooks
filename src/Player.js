import React from 'react'
import './Info.css'
import {ACTIONS} from './info'

export default function Player({player , dispatchShow , players}) {
    return (
        <div className="eachPlayer">
            <p>{player.name}</p>
            <button onClick = { () => dispatchShow( {
                                                     type : ACTIONS.SHOW_INFO,
                                                     payload : {id : player.id , players : players}
                                                     })} > 
                Details
            </button>
        </div>
    )
}
