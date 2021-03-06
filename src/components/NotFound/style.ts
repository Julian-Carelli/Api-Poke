import styled from 'styled-components'

export const NotFoundStyled = styled.section.attrs({
    className:'NotFound container col-12'
})`

display: flex;
justify-content: center;
padding: 90px 0px;

.NotFound__image {
    width: 80%;
    border-radius: 15px;
    max-height: 500px;
    @media screen and (max-width:480px){
        width:100%;
    }
}



`;


