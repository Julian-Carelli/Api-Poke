import styled from 'styled-components';

export const LoadingStyled = styled.section.attrs({
    className:'Loading'
})`

display: flex;
justify-content: center;
align-items: center;
width: 100%;
height:100vh;

.Loading__circle {
    max-width: 120px;
    width: 100%;
    max-height: 120px;
    height: 100%;
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    animation: spin 2s linear infinite; 
}    
        
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;