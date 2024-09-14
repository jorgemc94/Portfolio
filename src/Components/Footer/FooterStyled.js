import styled from "styled-components";

export const Footer = styled.footer`
    border-top: 1px solid rgba(37, 33, 59, ${props => props.borderOpacity || 1});
    margin-top: 3em;
    display: flex;
    justify-content: space-between;
    padding: 3em 0em;
`;

export const FooterText = styled.p`
    font-size: 1.2em;
    transform: translateX(47%);
`;

export const FooterLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: rgb(22, 242, 179);
`;

export const FooterCode = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    margin-right: 5em;
    transform: translateX(-135%);

    &:hover {
        color: rgb(22, 242, 179);

        .material-symbols-outlined {
            color: rgb(22, 242, 179);
        }
    }

    .material-symbols-outlined {
        margin-right: 0.5rem;
    }
`;
