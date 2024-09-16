import { experienciaData } from "../../Utils/Data/experiencia";
import { ExperienciaCard, ExperienciaContent, ExperienciaSection, ExperienciaTitle, ItemList, ListaCard, SubtituloCard, TituloCard } from "./ExperienciaStyled";

export const ExperienciaComponent = () => {
    return (
        <>
            <ExperienciaSection>
                <ExperienciaTitle>Experiencia</ExperienciaTitle>
                <ExperienciaContent>
                    {experienciaData.experiencia.map((experiencia, index) => (
                        <ExperienciaCard key={index}>
                            <TituloCard>{experiencia.titulo}</TituloCard>
                            <SubtituloCard>{experiencia.fecha}</SubtituloCard>
                            {experiencia.descripcion.map((descripcion, idx) => (
                                <ListaCard key={idx}>
                                    {Object.entries(descripcion).map(([tipo, valor], i) => (
                                        <ItemList key={i}>{valor}</ItemList>
                                    ))}
                                </ListaCard>
                            ))}
                        </ExperienciaCard>
                    ))}
                </ExperienciaContent>
            </ExperienciaSection>
        </>
    );
}
