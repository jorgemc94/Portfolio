
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
    color: #9bd076;
`;

export const NavbarLink = styled.a`
    margin-left: 1.5em;
    cursor: pointer;
    text-decoration: none;
    font-size: 0.9em;

    &:hover {
        color: #6b56c6;
    }
`;
