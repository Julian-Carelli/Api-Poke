import * as React from 'react';

import {IProps} from './IProps';
import {ModalStyled} from './style';

export const Modal = (props:IProps) => (
    
    <ModalStyled stateModal={props.stateModal} data-testid="test__modal">
        <div className="Modal__container">
            <div className="Modal__function">
                <button data-testid="test__btn" onClick={() => props.handleModal()} className="Modal__close_button btn btn-primary">
                    Cerrar
                </button>
            </div>
            {props.children}

        </div>
    </ModalStyled>
)

