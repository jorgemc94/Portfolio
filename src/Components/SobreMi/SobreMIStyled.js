import styled from "styled-components";


export const SectionSobreMi = styled.section`
    display: grid;
    grid-template-columns: 40% 40%;
    justify-content: space-between;
    column-gap: 2em;
    width: 80%;
    margin: 0 auto;
    
`

export const Title = styled.h1`
    transform:translateX(10%);
    margin-top: 3em;
    padding-bottom: 1.5em;
    color: #9bd076;
    font-size: 2em;
    
`;

export const Text = styled.p`
    line-height: 1.3;
    font-size: 1.2em;
`

export const Imagen = styled.img`
    border-radius: 2em;
    width: 50%;
    filter: grayscale(100%);
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1); 
        filter: grayscale(0%);
    }
`;


export const ContentImage = styled.div`
    display:flex;
    justify-content: center;
`