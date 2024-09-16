import { estudiosData } from "../../Utils/Data/estudios"
import { DescripcionCard, EstudiosCard, EstudiosContent, EstudiosSection, EstudiosTitle, SubtituloCard, TituloCard } from "./EstudiosStyled"

export const EstudiosComponent = () => {


    return(
        <>
            <EstudiosSection>
                <EstudiosTitle>Estudios</EstudiosTitle>
                <EstudiosContent>
                    {estudiosData.estudios.map((estudio, index) => (
                        <EstudiosCard key={index}>
                            <TituloCard>{estudio.titulo}</TituloCard>
                            <SubtituloCard>{estudio.fecha}</SubtituloCard>
                            <DescripcionCard>{estudio.descripcion}</DescripcionCard>
                        </EstudiosCard>
                    ))}
                </EstudiosContent>
            </EstudiosSection>
        </>
    )
}