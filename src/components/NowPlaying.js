
import React from 'react'
import Film from './Film'


export default function NowPlaying(props) {
    

    return (

        <div className="row-style">
            {props.nowPlaying.map(item=> <Film movie={item}/>)}
            
        </div>)

}

