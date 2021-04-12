import React from 'react';
import { render } from '@testing-library/react';
import {NotFound} from '../index';


describe('Not Found', () => {
  it('render correctly', () => {
      const {getByTestId} = render(<NotFound />);

      expect(getByTestId("Not Found")).toBeTruthy()
  })
})