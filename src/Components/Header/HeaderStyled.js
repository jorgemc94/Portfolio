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

export const Contact = styled.div`
    padding-bottom: 1.5em;
    display: flex;
    gap: 2em;
`

export const ContactLink = styled.a`
    text-decoration: none;
`

export const ContactButton = styled.button`
    display: flex;
    align-items: center;
    padding: 1em 2em;
    border-radius: 2em;
    border-color: ${props => props.color ? '#6b56c6' : 'transparent'};
    background: ${props => props.color ? 'transparent' : '#6b56c6'};
    letter-spacing: 0.1em;

    .material-symbols-outlined {
        background-color: transparent;
        margin-right: 0.5rem;
    }
`