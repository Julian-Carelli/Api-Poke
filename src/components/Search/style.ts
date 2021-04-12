import styled from 'styled-components'

export const SearchStyled = styled.section.attrs({
    className:'Search container'
})`

width:80%;

.Search__row {
    @media screen and (max-width:728px){
        display:flex;
        justify-content:center;
    }
}

.Search__input {
    width:500px;
}

`;
