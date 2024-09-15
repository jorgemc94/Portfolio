import styled from "styled-components";


export const Header = styled.section`
    display: grid;
    grid-template-columns: 40% 50%;
    justify-content: space-between;
    column-gap: 2em;
    width: 80%;
    margin: 0 auto;
`;

export const Content = styled.article`
    width: 100%;
`

export const ContentText = styled.p`
    font-size: 2em;
    line-height: 1.5;
`

export const ContentTextColor = styled.span`
    color: ${props => props.color ? '#9bd076' : '#6b56c6'};
`

export const Image = styled.article`
    width: 100%;
    display: flex;
    justify-self: end;
`;

export const Network = styled.div`
    padding: 2.5em 0em;
    display: flex;
    gap: 2em;
`

export const NetworkIcon = styled.svg`
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.2);
    }
`

export const NetworkButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`