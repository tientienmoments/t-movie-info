
import React from 'react'
import Film from './Film'


export default function ShowResults(props) {
    

    return (

        <div className="film-style">
            {props.resultKeyWord.map(item=> <Film movie={item}/>)}
            
        </div>)

}




