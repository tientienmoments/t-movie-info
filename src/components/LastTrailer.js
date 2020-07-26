
import React from 'react'
import Film from './Film'


export default function LastTrailer(props) {
    

    return (

        <div className="row-style">
            {props.callTrailer.map(item => 
            <div>
                {item.title}
                
             {/* <iframe src='//www.youtube.com/embed/=${item.videos.type}'></iframe> */}

            </div>
            
            )}
            
        </div>)

}




