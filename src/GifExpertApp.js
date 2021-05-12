import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Dragon Ball']);

/*     //const handleAdd = () => setCategories(currentCategories => currentCategories.concat('Bob Esponja')); //Opcion1 usando concat
    //const handleAdd = () => setCategories(categories.concat('Bob Esponja')); //Opcion2 usando concat
    const handleAdd = () => setCategories([...categories, 'Bob Esponja']); //Opcion 3 usando operador spread */
    

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories= { setCategories }/>
            <hr /> 

           

            <ol>
                {
                    categories.map( category => 
                        //return <li key={ category }> {category} </li>
                        <GifGrid 
                            key= { category }
                            category={ category}
                        />
                    )
                }
            </ol>
        </>
    )
}
