import React from 'react';
import { render } from '@testing-library/react';
import {Header} from '../index';


describe('Header', () => {
    it('render correctly', () => {
        const {getByTestId} = render(<Header/>);

        expect(getByTestId("Header")).toBeTruthy()
    
    })
})