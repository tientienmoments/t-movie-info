
import React from 'react'
import Film from './Film'


export default function PopularityList(props) {
    
    if (!props.popularity) return <div></div>
    return (

        <div className="row-style">

            {props.popularity.map(item=> <Film movie={item}/>)}
            
        </div>)

}

