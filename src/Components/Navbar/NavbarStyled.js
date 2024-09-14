
import styled from "styled-components";

export const Navbar = styled.nav`
    display: grid;
    grid-template-columns: repeat(2, 50%);
`;

export const NavbarContent = styled.div` 
    padding: 3em 0em;
`;

export const NavbarTitle = styled.p`
    font-size: 1.4em;
    color: rgb(22, 242, 179);
    padding-left: 6.1em;
`;

export const NavbarLink = styled.a`
    padding-left: 2.05em;
    margin: 0 1.5em;
    cursor: pointer;
    text-decoration: none;
    font-size: 0.9em;

    &:hover {
        color: rgb(219, 39, 119);
    }
`;
