
import styled from "styled-components";

export const Navbar = styled.nav`
    display: grid;
    grid-template-columns: repeat(2, 50%);
    padding: 3em 0em;
    width: 80%;
    margin: 0 auto;
`;

export const NavbarContent = styled.div` 
    display:flex;
    justify-content: flex-end;
`;

export const NavbarTitle = styled.p`
    font-size: 1.4em;
    color: rgb(22, 242, 179);
`;

export const NavbarLink = styled.a`
    margin-left: 1.5em;
    cursor: pointer;
    text-decoration: none;
    font-size: 0.9em;

    &:hover {
        color: rgb(219, 39, 119);
    }
`;
