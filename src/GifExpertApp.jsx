
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        //Validamos si ya habiamos ingresado la nueva categoria dentro del Array y si esta NO lo ingresa
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);//En caso de no haberse ingresado , se va a modificar el UseState y se va a agregar la categoria
        console.log(newCategory);
    }

    return (

        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />

            {/* <button onClick={onAddCategory}>Agregar</button> */}


            <div className='card-grid contenedor'>

            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }


            </div>






        </>

    )
}
