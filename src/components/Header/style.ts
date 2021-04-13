import styled from 'styled-components'

export const HeaderStyled = styled.section.attrs({
    className:'Header container'
})`

padding:45px 0px;

@media screen and (max-width:768px){
    text-align:center;
}



.Header__title {
    font-size:50px;
}

.Header__text {
    font-size:20px;
}

`;

