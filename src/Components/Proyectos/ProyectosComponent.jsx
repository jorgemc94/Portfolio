import { proyectosData } from "../../Utils/Data/proyectos";
import { ProyectoSection, ProyectoTitle, ProyectoCard, ProyectoContent, ProyectoVideo, TitleSection, StackContent, ProyectoLink, StackImagen, StackName, SkillContent, ContentLink, ProyectoDescripcion } from "./ProyectosStyled";

export const ProyectosComponent = () => {
    const handleMouseOver = (index) => {
        const video = document.getElementById(`video-${index}`);
        if (video) {
            video.play();
        }
    };

    const handleMouseOut = (index) => {
        const video = document.getElementById(`video-${index}`);
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    };

    return (
        <ProyectoSection borderOpacity={1}>
            <TitleSection>Proyectos</TitleSection>
            <ProyectoContent>
                {proyectosData.proyectos.map((proyecto, index) => (
                    <ProyectoCard key={index} id={`proyecto-card-${index}`}onMouseOver={() => handleMouseOver(index)}onMouseOut={() => handleMouseOut(index)} >
                        <ProyectoVideo id={`video-${index}`} muted loopstyle={{ width: '100%', height: 'auto' }}>
                            <source src={proyecto.video} type="video/mp4" />
                        </ProyectoVideo>
                        <ProyectoTitle>{proyecto.proyecto}</ProyectoTitle>
                        <ProyectoDescripcion>{proyecto.descripción}</ProyectoDescripcion>
                        <SkillContent>
                            {proyecto.stack.map((tech, idx) => (
                                <StackContent key={idx}>
                                    <StackImagen src={tech.image} alt={tech.name} className="stack-image" />
                                    <StackName>{tech.name}</StackName>
                                </StackContent>
                            ))}
                        </SkillContent>
                        <ContentLink>
                            {proyecto.codigo && (
                                <ProyectoLink href={proyecto.codigo} target="_blank" rel="noopener noreferrer">
                                    &lt;Código /&gt;
                                </ProyectoLink>
                            )}
                            {proyecto.despliegue && (
                                <ProyectoLink href={proyecto.despliegue} target="_blank" rel="noopener noreferrer">
                                    Despliegue
                                </ProyectoLink>
                            )}
                        </ContentLink>
                    </ProyectoCard>
                ))}
            </ProyectoContent>
        </ProyectoSection>
    );
};
