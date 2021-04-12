import styled from 'styled-components'

export const CompleteCardStyled = styled.section.attrs({
    className:'CompleteCard container'
})`

width:80%;
padding:45px 0px;


.CompleteCard__title {
    color:white;
    font-size: 60px;
}

.CompleteCard__text_type {
    font-size:25px;
    margin-bottom:0px;
}

.CompleteCard__text_front, .CompleteCard__text_back {
    font-size:18px;
    color:white;
}

.CompleteCard__type {
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    color:white;
}

.CompleteCard__arrow {
    background:white;
    height:3px;
    border-radius:15px;
    width:100%;
}

.CompleteCard__information{
    padding:25px 0px;
}

.CompleteCard__title_stats {
    width:80%;
    color:white;
}

.CompleteCard__stats {
    color:black;
}

.CompleteCard__text {
    font-size:18px;
}

.CompleteCard__prop {
    font-size: 15px;
}

.CompleteCard__exp {
    padding:0px 5px;
    background-color:royalblue;
    width:100%;
    border-radius: 15px;
}

`;

