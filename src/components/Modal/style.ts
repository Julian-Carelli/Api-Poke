import styled from 'styled-components';

export const ModalStyled = styled.section.attrs({
    className:'Modal container'
})`

width:60%;
padding:40px;
@media screen and (max-width:728px){
    width:100%;
}

.Modal__row {
    width:45%;
}

.Modal__function{
    display:flex;
    justify-content:flex-end;   
}

.Modal__close_button {
    width:100px;
}
`;

