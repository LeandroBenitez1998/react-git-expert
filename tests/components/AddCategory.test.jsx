const { render, screen, fireEvent } = require("@testing-library/react");
const { AddCategory } = require("../../src/components/AddCategory");


describe('Probando el archivo AddCategory.test.jsx', () => {

    test('Debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');

        //Usamos esto para testear un evento como es en este caso el onChange
        fireEvent.input(input, { target: { value: 'Saitama' } });

        expect(input.value).toBe('Saitama');


    });


    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputvalue = 'Saitama'; //Valor que tiene la caja de texto (Simluamos que escribimos en la caja de texto)
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputvalue } });
        fireEvent.submit(form);
        // screen.debug();
        expect(input.value).toBe('');


        expect(onNewCategory).toHaveBeenCalled();//Esperamos que la funcion haya sido llamda alguna vez
        expect(onNewCategory).toHaveBeenCalledTimes(1);//Esperamos que la funcion haya sido llamada solo una vez
        expect(onNewCategory).toHaveBeenCalledWith(inputvalue);//Esperamos que la funcion haya sido con el valor de 'Saitama'




    })


    test('No debe de llamar el onNewCategory si el input esta vacio ', () => {

        const inputvalue = '';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputvalue } });
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();


    })

   

});