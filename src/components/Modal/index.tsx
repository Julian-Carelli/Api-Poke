import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {IProps} from './IProps';
import {ModalStyled} from './style';

export const Modal = (props:IProps) => {
    if(props.stateModal === false){
        return null
    }
    return ReactDOM.createPortal(
        <ModalStyled data-testid="Modal">
            <div className="Modal__container">
                <div className="Modal__function">
                    <button onClick={() => props.handleModal()} className="Modal__close_button btn btn-primary">
                        Cerrar
                    </button>
                </div>
                {props.children}

            </div>
        </ModalStyled>,
        document.getElementById('modal')
    )
}
