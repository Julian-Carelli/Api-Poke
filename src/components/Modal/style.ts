import styled from 'styled-components';

export const ModalStyled = styled.section.attrs({
    className:'Modal container'
})`

width:60%;
padding:40px;
@media screen and (max-width:1027px){   
    width:100%;
}

.Modal__row {
    width:45%;
}

.Modal__function{
    display:flex;
    justify-content:center;
    @media screen and (max-width:1027px){
        justify-content:center;  
        font-size:13px;
    }
    @media screen and (max-width:767px){
        width:100%;
        font-size:13px;
    }
}

.Modal__close_button {
    width: 40%;
    @media screen and (max-width:1067px){
        width:60%;
        font-size:13px;
    }
    @media screen and (max-width:767px){
        width:100%;
        font-size:13px;
    }
}
`;

