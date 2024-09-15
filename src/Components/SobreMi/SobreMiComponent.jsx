import { SectionSobreMi, Title, Text, ContentImage, Imagen } from "./SobreMIStyled"


export const SobreMiComponent = () => {


    return(
        <>
            <Title>Sobre mí</Title>
            <SectionSobreMi>
                <div>
                    <Text>Soy un Desarrollador Web Fullstack Junior y actualmente estoy desarrollando proyectos web trabajando a diario con programadores senior. Me gusta desarrollar código tanto en front end como en back end. El stack tecnológico que utilizo es JS con React y PHP con Laravel. También trabajo con Typescript y Testing (Unitario y Cypress). Puedo maquetar sitios web totalmente responsive (FlexBox, SaaS, …) y he desarrollado proyectos con bases de datos relacionales (SQL) y no relacionales (Mongo). Para el despliegue de mis proyectos utilizo AWS. Tengo experiencia desarrollando proyectos para turismo, ocio…</Text>
                </div>
                <ContentImage>
                    <Imagen src="./Jorge.png" alt="Jorge"/>
                </ContentImage>
            </SectionSobreMi>
        </>
    )
}