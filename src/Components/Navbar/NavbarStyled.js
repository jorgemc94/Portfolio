import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = styled.nav`
    display: grid;
    grid-template-columns: repeat(2, 50%);
    padding: 2.5em 0;
    border-bottom: 1px solid rgba(37, 33, 59, ${props => props.borderOpacity || 1});
    width: 80%;
    margin: 0 auto;
`;

export const NavbarContent = styled.div`
    transform: translateX(15%);
`;

export const NavbarTitle = styled.p`
    font-size: 1.4em;
    color: rgb(22, 242, 179);
`;

export const NavbarLink = styled.a`
    margin: 0 1.5em;
    cursor: pointer;
    text-decoration: none;
    font-size: 0.9em;

    &:hover {
        color: rgb(219, 39, 119);
    }
`;
