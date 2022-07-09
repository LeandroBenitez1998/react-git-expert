import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('')

    const OnInputChange = ({ target }) => {
        // console.log(target.value);
        setinputValue(target.value);
    }

    // Modificar 
    const onSubmit = (event) => {

        //Se limpia el valor ingresado y se le saca los espacios
        const valorInput = inputValue.trim();

        event.preventDefault();
        //Validamos que por lo menos busquen algo dentro del input
        if (valorInput.length <= 1) {
            return;
        }
        // setCategories(categories => [inputValue, ...categories]);        // Modificamos nuestro array de objetos . Mediante un CALLBACK

       //Devolvemos el valor del componente al GifExpertApp
        onNewCategory(valorInput);
       
        //Limpiamos el buscador
        setinputValue("");
    }


    return (

        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text"
                placeholder='Buscar en Google'
                value={inputValue}
                onChange={OnInputChange}
            />
        </form>





    )
}
