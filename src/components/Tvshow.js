
import React from 'react'
import Film from './Film'


export default function Tvshow(props) {
    

    return (

        <div className="row-style">
            {props.tvshow.map(item=> <Film movie={item}/>)}
            
        </div>)

}

