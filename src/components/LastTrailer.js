import React from 'react'


export default function LastTrailer(props) {
    let movie = props.callTrailer
            return (
              <div >
             {movie.map(item => {

                    return (
                        <div>
                        {item.title}   
                        </div>
                    )
                })
                }
             </div>)

}


