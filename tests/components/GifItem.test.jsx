const { GifItem } = require("../../src/components/GifItem");
import React from "react";
import { render, screen } from "@testing-library/react";

describe('Prueba tipo demo', () => {

    const title = "opm GIF";
    const url = "https://media3.giphy.com/media/DuVRadBbaX6A8/giphy.gif?cid=649d8854977ofj0ulvujhzd67fod678y6uwe0688roflinup&rid=giphy.gif&ct=g";

    test('1. Debe de renderizar <GifItem /> correctamente', () => {

        const wrapper = render(<GifItem title={"Prueba"} url={"Prop"} />);

    });

    test('Debe de mostrar error si es que no utilizo los props junto con el snapshot', () => {

        const wrapper = render(<GifItem title={"Naruto"} url={"naruto.com.ar"} />);
        expect(wrapper).toMatchSnapshot();

    });

    //Hacemos Test especificos. Nos sirve muchisimo!!! 
    test('Debe de mostrar la imagen con la URL y con el ALT indicado', () => {

        const wrapper = render(<GifItem title={title} url={url} />);
        // screen.debug(); //Para saber que es lo que estamos haciendo en las pruebas(Sirve como inspect)

        // console.log(screen.getByRole('img').src);
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);


    });


    test('Debe de mostrar el titulo en el componente', () => { 

        const wrapper = render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();


     })





})