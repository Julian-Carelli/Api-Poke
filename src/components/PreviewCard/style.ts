import styled from 'styled-components'

export const PreviewCardStyled = styled.section.attrs({
    className:'PreviewCard pt-5 pb-5 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'
})`

display: flex;
flex-direction: column;
text-align: center;
border: 2px solid black;
border-radius: 17px;
background-color: aliceblue;


.PreviewCard__title {
    font-size:33px;
}

.PreviewCard__img {
    width:200px;
    height:200px;
}

`;
