
import React from 'react'
import Film from './Film'


export default function Popular(props) {
    

    return (

        <div className="row-style">
            {props.popular.map(item=> <Film movie={item}/>)}
            
        </div>)

}

