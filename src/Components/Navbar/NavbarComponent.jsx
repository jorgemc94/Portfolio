import { Navbar, NavbarContent, NavbarLink, NavbarTitle } from "./NavbarStyled";

export const NavbarComponent = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <Navbar borderOpacity={1}>
            <NavbarContent>
                <NavbarTitle>&lt;Jorge /&gt;</NavbarTitle>
            </NavbarContent>
            <NavbarContent>
                <NavbarLink href="#sobremi" onClick={() => scrollToSection("sobremi")}>Sobre Mí</NavbarLink>
                <NavbarLink href="#skills" onClick={() => scrollToSection("skills")}>Skills</NavbarLink>
                <NavbarLink href="#estudios" onClick={() => scrollToSection("estudios")}>Estudios</NavbarLink>
                <NavbarLink href="#experiencia" onClick={() => scrollToSection("experiencia")}>Experiencia</NavbarLink>
                <NavbarLink href="#proyectos" onClick={() => scrollToSection("proyectos")}>Proyectos</NavbarLink>
            </NavbarContent>
        </Navbar>
    );
};
