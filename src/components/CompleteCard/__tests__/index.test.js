
import React from 'react';
import { render} from '@testing-library/react';
import {CompleteCard} from '../index';

const stubbedCardComplete = {
  name: "Slovakia",
  types:[
    {
        type: {
            name:'juli'
        }
    }
  ],
  sprites:{
    front_default: 'pipo',
    back_default:'pipe'
  },
  stats:[
      {
          stat:{
              name:'juli'
          },
          base_stat: 'pipo'
      }
  ]
};

describe('CompleteCard', () => {
  it('render correctly', () => {
      const {getByTestId} = render(<CompleteCard collectionPokemonView={stubbedCardComplete} />);

      expect(getByTestId("CompleteCard")).toBeTruthy()
  })
})