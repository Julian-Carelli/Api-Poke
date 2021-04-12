import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import {PreviewCard} from '../index';

describe('PreviewCard', () => {

    afterEach(() => {
        cleanup()
    })


    it('render correctly', () => {
        const {getByTestId} = render(<PreviewCard/>);

        expect(getByTestId("PreviewCard")).toHaveTextContent('Ver mas')
    })

    it('event onclick', () => {
        const mockOnClick= jest.fn();

        const {getByTestId} = render(<PreviewCard handleModal={mockOnClick} />)

        fireEvent.click(getByTestId('btn'))

        expect(mockOnClick).toHaveBeenCalledTimes(1)


    })
})