import React from 'react';
import { render, cleanup} from '@testing-library/react';
import Presentation from '../index';

describe('Presentation', () => {
  afterEach(() => {
      cleanup()
  })


  it('render correctly', () => {

    const mockCollectionPokemons = jest.fn();

    const mockCollectionPokemon = []
    

    const {getByTestId} = render(
    <Presentation 
    collectionPokemonsView={mockCollectionPokemons} 
    collectionPokemonsView={mockCollectionPokemon} 
    />);

    expect(getByTestId('Presentation')).toBeTruthy()
  })
})