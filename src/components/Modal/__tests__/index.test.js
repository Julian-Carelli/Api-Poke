import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import {Modal} from '../index';

describe('Modal', () => {

    afterEach(() => cleanup())

    beforeEach(() => console.log('COMPONENT TEST "MODAL"'))

    it('render correctly', () => {
        const {getByTestId} = render(<Modal />);

        expect(getByTestId("test__modal")).toBeTruthy()
    })

    it('update on click', () => {

      const mockupHandleModal = jest.fn()


      const {getByTestId} = render
      (<Modal
      handleModal={mockupHandleModal}
      />);

      fireEvent.click(getByTestId('test__btn'))

      expect(mockupHandleModal).toHaveBeenCalledTimes(1)

})
})