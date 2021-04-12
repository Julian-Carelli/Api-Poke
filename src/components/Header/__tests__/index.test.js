import React from 'react';
import { render, cleanup } from '@testing-library/react';
import {Header} from '../index';


describe('Header', () => {

    afterEach(() => {
        cleanup()
    })

    it('render correctly', () => {
        const {getByTestId} = render(<Header/>);

        expect(getByTestId("Header")).toHaveTextContent('Pokemon Finder')
    
    })
})