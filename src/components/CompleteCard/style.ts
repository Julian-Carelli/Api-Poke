import styled from 'styled-components'

export const CompleteCardStyled = styled.section.attrs({
    className:'CompleteCard container'
})`

width:80%;
@media screen and (max-width:1027px) and (min-wdith:768px){
    width:100%;
}

.CompleteCard__presentation {
    @media screen and (max-width:1027px){
        padding:25px;
    }
}

.CompleteCard__title {
    color:white;
    font-size: 60px;
    @media screen and (max-width:1027px){
        text-align:center;
    }
    @media screen and (max-width:767px){
        font-size:32px;
        text-align:center;
    }
}

.CompleteCard__text_type {
    font-size:25px;
    margin-bottom:0px;
    padding-left:15px;
    @media screen and (max-width:767px){
        font-size:13px;
        padding-left:0px;
    }
}

.CompleteCard__background_front, .CompleteCard__background_back {
    @media screen and (max-width:1067px){
        padding:13px;
    }
}

.CompleteCard__text_front, .CompleteCard__text_back {
    font-size:18px;
    color:white;
    @media screen and (max-width:767px){
        font-size:13px;
    }
}

.CompleteCard__type {
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    color:white;
}

.CompleteCard__img {
    width:150px;
    height:150px;
    @media screen and (max-width:767px){
        width:100px;
        height:100px;
    }
}

.CompleteCard__arrow {
    background:white;
    height:3px;
    border-radius:15px;
    width:100%;
}

.CompleteCard__information{
    padding:0px 0px;
    @media screen and (max-width:1027px){
        justify-content:center;
    }
}

.CompleteCard__title_stats {
    width:80%;
    color:white;
    @media screen and (max-width:767px){
        font-size:13px;
    }
}

.CompleteCard__stats {
    color:black;
}

.CompleteCard__text {
    font-size:18px;
    @media screen and (max-width:767px){
        font-size:10px;
    }
}

.CompleteCard__prop {
    font-size: 15px;
    @media screen and (max-width:767px){
        font-size:10px;
    }
}

.CompleteCard__exp {
    padding:0px 5px;
    background-color:royalblue;
    width:100%;
    border-radius: 15px;
}

`;

