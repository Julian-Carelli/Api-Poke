import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import {PreviewCard} from '../index';

const stubbedPreviewCard = {
    pokemonId: 1,
    pokemonName:'pikachu',
    pokemonSprite:'image.png',
    handleModal: () => 'hello world'
};

describe('PreviewCard', () => {
    it('render correctly', () => {
        const {getByTestId} = render(<PreviewCard/>);

        expect(getByTestId("PreviewCard")).toBeTruthy()
    })

    it('event onclick', () => {
        const handledClick = jest.fn()

        const {getByTestId} = render(<PreviewCard/>)
        const searchInput = getByTestId('btn')

        console.log(searchInput)

        fireEvent.click(searchInput)

        expect(handledClick).toHaveBeenCalledTimes(1)

    })
})