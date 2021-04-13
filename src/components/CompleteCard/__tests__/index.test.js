
import React from 'react';
import { render, cleanup} from '@testing-library/react';
import {CompleteCard} from '../index';

const stubbedCardComplete = {
  name: "testName",
  types:[
    {
        type: {
            name:'testName'
        }
    }
  ],
  sprites:{
    front_default: 'testFront',
    back_default:'testBack'
  },
  stats:[
      {
          stat:{
              name:'testStat'
          },
          base_stat: 'testBase'
      }
  ]
};

describe('CompleteCard', () => {

    afterEach(() => { cleanup() })

    beforeEach(() => console.log('COMPONENT TEST "COMPLETECARD"'))


    it('render correctly', () => {
        const {getByTestId} = render(<CompleteCard collectionPokemonView={stubbedCardComplete} />);

        expect(getByTestId("test__completeCard")).toHaveTextContent('testName');

    })
})