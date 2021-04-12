import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import {Search} from '../index';


describe('Search', () => {

    it('render correctly', () => {
        const {getByTestId, getByPlaceholderText} = render(<Search/>);

        expect(getByTestId("Search__input")).toBeTruthy()
        expect(getByPlaceholderText("Ingresa el nombre a buscar")).toBeTruthy()
    })

    it('updates on change', () => {
        const {getByPlaceholderText} = render(<Search/>)
        const searchInput = getByPlaceholderText('Ingresa el nombre a buscar')

        fireEvent.change(searchInput, {target:{value:"test"}})

        expect(searchInput.value).toBe('test')
    })

})