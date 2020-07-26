import React from 'react'
import Film from './Film'


export default function Trending(props) {
    

    return (

        <div className="row-style">
            {props.trending.map(item => <Film movie={item}/>)}
            
        </div>)

}