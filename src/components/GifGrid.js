import React/*, { useState, useEffect }*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category}) => {
    

    
    const { data:images, loading } = useFetchGifs( category );

    //console.log(data);
   
    

    return (

        <>
            <h3 className="animate_animated animate_fadeIn"> { category } </h3>

            {loading && <p className="animate__animated animate__flash">Loading...</p> }

            <div className="card-grid">
                
                {
                    images.map( img => (
                            <GifGridItem 
                                key={ img.id }
                                { ...img } //Esto envia las propiedades de la imagen por separado
                            />
                        ))
                }
                
            </div>        
        </>
    )
}
