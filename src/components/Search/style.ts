import styled from 'styled-components'

export const SearchStyled = styled.section.attrs({
    className:'Search container'
})`


.Search__row {
    @media screen and (max-width:768px){
        display:flex;
        justify-content:center;
        flex-direction:column;
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
    @media screen and (max-width:768px){
        max-width:500px;
        width:100%;
    }

}


.Search__button {
    width:150px;

}

.Search__content__social-media {
    display: flex;
    align-items: center;
    padding-left: 250px;
    font-size: 20px;
    @media screen and (max-width:1200px){
        padding-left:50px;
    }
    @media screen and (max-width:992px){
        margin:auto;
        padding:25px 45px;
    }
    @media screen and (max-width:768px){
        display:flex;
        justify-content:center;
        padding-left:0px;
        padding:25px;
    }
}

`;
