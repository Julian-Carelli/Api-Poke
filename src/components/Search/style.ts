import styled from 'styled-components'

export const SearchStyled = styled.section.attrs({
    className:'Search container'
})`


.Search__row {
    @media screen and (max-width:768px){
        display:flex;
        justify-content:center;
    }
}

.Search__find {
    @media screen and (max-width:768px){
        display:flex;
        justify-content:center;
    }
}

.Search__function {
    padding-left:20px;
    @media screen and (max-width:768px){
        display:flex;
        justify-content:center;
        padding-left:0px;
        padding:25px 0px;
    }

}

.Search__input {
    width:500px;
    max-width:100%;
    @media screen and (max-width:768px){
        max-width:60%;
    }

}


.Search__button {
    width:150px;

}

.Search__content__icon {
    width:50px;
}

`;
