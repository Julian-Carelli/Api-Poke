import React from 'react';
import { render, cleanup } from '@testing-library/react';
import {Header} from '../index';


describe('Header', () => {

    afterEach(() => { cleanup() })

    beforeEach(() => console.log('COMPONENT TEST "HEADER"'))


    it('render correctly', () => {
        const {getByTestId} = render(<Header/>);

        expect(getByTestId("test__header")).toHaveTextContent('Pokemon Finder')
    
    })
})