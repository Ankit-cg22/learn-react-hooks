import React from 'react'

export default function Bio({player}) {
    return (
        <div className="playerInfo">
            <p> {player.name} plays for {player.club} . He plays in {player.pos} position.</p>
        </div>
    )
}
