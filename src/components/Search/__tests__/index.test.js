import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import {Search} from '../index';


describe('Search', () => {

    afterEach(() => { cleanup() })

    beforeEach(() => console.log('COMPONENT TEST "SEARCH"'))


    it('render correctly', () => {
        const {getByTestId, getByPlaceholderText} = render(<Search/>);

        expect(getByTestId("test__search")).toBeTruthy()
        expect(getByPlaceholderText("Ingresa el nombre a buscar")).toBeTruthy()
    })

    it('update on change', () => {
        const {getByPlaceholderText} = render(<Search/>);

        const searchInput = getByPlaceholderText('Ingresa el nombre a buscar')

        fireEvent.change(searchInput, {target:{value:"test"}})

        expect(searchInput.value).toBe('test')
    })

    it('update on click', () => {

        const mockupSearchPokemon = jest.fn()


        const {getByTestId} = render
        (<Search
        searchPokemon={mockupSearchPokemon}
        />);

        fireEvent.click(getByTestId('test__btn'))

        expect(mockupSearchPokemon).toHaveBeenCalledTimes(1)

    })


})