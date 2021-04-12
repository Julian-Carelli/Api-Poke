import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import {Search} from '../index';


describe('Search', () => {

    afterEach(() => {
        cleanup()
    })

    it('render correctly', () => {
        const {getByTestId, getByPlaceholderText} = render(<Search/>);

        expect(getByTestId("Search__input")).toBeTruthy()
        expect(getByPlaceholderText("Ingresa el nombre a buscar")).toBeTruthy()
    })

    it('update on change', () => {
        const {getByTestId, getByPlaceholderText} = render(<Search/>);

        const searchInput = getByPlaceholderText('Ingresa el nombre a buscar')

        fireEvent.change(searchInput, {target:{value:"test"}})

        expect(searchInput.value).toBe('test')
    })

    it('update on click', () => {
        const {getByTestId, getByPlaceholderText} = render(<Search/>);

        fireEvent.click(getByTestId('btn'))

    })


})