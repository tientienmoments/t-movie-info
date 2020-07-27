
import React from 'react'
import Film from './Film'
import Paginate from './Paginate'

export default function PopularityList(props) {
    
    if (!props.popularity) return <div>loading</div>
    return (

        <div className="film-style">
            <Paginate/>
            {props.popularity.map(item=> <Film movie={item}/>)}
            
        </div>)

}

