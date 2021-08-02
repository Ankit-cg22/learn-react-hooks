import React , {useState, useReducer} from 'react'
import './Info.css'
import Player from './Player'
import Bio from './Bio'

export const ACTIONS = {
    ADD_PLAYER : "addPlayer",
    SHOW_INFO : "info"
}

function reducerCreate(players , action){
    switch(action.type)
    {
        case ACTIONS.ADD_PLAYER :
            return [...players ,
                 newPlayer( action.payload.name ,action.payload.club ,action.payload.pos )]
        
        default : return players;
    }

}

function reducerShow(playerInfo , action ){
    switch(action.type)
    {
        case ACTIONS.SHOW_INFO :
            playerInfo = action.payload.players
            return playerInfo.filter( p => p.id === action.payload.id)        
        default : return playerInfo;
    }
}

function newPlayer(name , club , pos)
{
    return { id:Date.now() , name : name , club:club , pos:pos}
}

export default function Info(){
    const [players , dispatchCreate]= useReducer( reducerCreate , []);
    const [playerInfo , dispatchShow]= useReducer( reducerShow , []);
    const [name , setName] = useState('')
    const [club , setClub] = useState('')
    const [pos , setPos] = useState('')


    function handleSubmit(e){
        e.preventDefault();
        dispatchCreate( {type : ACTIONS.ADD_PLAYER ,
                    payload: {name:name ,  club : club , pos: pos}
                })
        setName('');
        setClub('');
        setPos('');
        
    }

    return (
        <div className="info">
            <h1>Player Info</h1>

            <div className="sec1">
                <form onSubmit= {handleSubmit}>
                    <h2>Enter New Player</h2>
                    <input type="text" value={name} onChange= {e => setName(e.target.value)} placeholder = "Enter Name.."/>
                    <input type="text" value={club} onChange= {e => setClub(e.target.value)} placeholder = "Enter club name.."/>
                    <input type="text" value={pos} onChange= {e => setPos(e.target.value)} placeholder = "Enter Position.."/>
                    <button>Add Player</button>
                </form>
                <div className="playerList">
                    <h2>Players</h2>

                    {players.map(player => {
                        return <Player key={player.id} player={player} 
                                dispatchShow = {dispatchShow} players ={players}

                            />
                    })}
                </div>
            </div>
            <div className="bio">
                <h2>Player Details</h2>
                
                {playerInfo.map( player => {
                   return <Bio id= {player.id} player={player} />
                })} 
                
            </div>
        </div>
    )
}