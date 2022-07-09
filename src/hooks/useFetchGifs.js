import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    //   Todo este codigo lo podemos resumir en un "CustomHook"
    const [images, setimages] = useState([]);
    const [IsLoading, setIsLoading] = useState(true);



    const getImages = async () => {
        const newimages = await getGifs(category); //Buscamos las imagenes y cuando esten cargadas...
        setimages(newimages); //.. Y agregamos imagenes al useState
        setIsLoading(false);
    }

    //Para que nuestro Hook pueda obtener las imagenes
    useEffect(() => {
        getImages();
    }, [])


    return {
        images: images,
        isLoading: IsLoading,
    }
}
