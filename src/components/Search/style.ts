import styled from 'styled-components'

export const SearchStyled = styled.section.attrs({
    className:'Search container'
})`


.Search__row {
    @media screen and (max-width:728px){
        display:flex;
        justify-content:center;
    }
}

.Search__input {
    width:500px;
}

.Search__function {
    padding-left:20px;
}

.Search__button {
    width:150px;

}

`;
