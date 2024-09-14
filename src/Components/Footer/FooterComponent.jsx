import { Footer, FooterText, FooterLink, FooterCode } from "./FooterStyled";

export const FooterComponent = () => {
    return (
        <>
            <Footer borderOpacity={1}>
                <FooterText>
                    © Portfolio de{' '}
                    <FooterLink href="https://www.linkedin.com/in/jorge-macias-cordob%C3%A9s-24aa142ba/" target="_blank">
                        Jorge Macías Cordobés
                    </FooterLink>
                </FooterText>
                <FooterCode href="https://github.com/jorgemc94/Portfolio" target="_blank">
                    <span className="material-symbols-outlined">star</span>Código
                </FooterCode>
            </Footer>
        </>
    );
}
