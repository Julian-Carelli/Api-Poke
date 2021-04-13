import React from 'react';
import { render, cleanup } from '@testing-library/react';
import {NotFound} from '../index';


describe('Not Found', () => {

  afterEach(() => { cleanup() })

  beforeEach(() => console.log('COMPONENT TEST "NOT FOUND"'))


  it('render correctly', () => {
      const {getByTestId} = render(<NotFound />);

      expect(getByTestId("test__notFound")).toBeTruthy()
  })
})