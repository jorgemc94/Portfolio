import styled from "styled-components";

export const ProyectoSection = styled.section`
  width: 80%;
  margin: 0 auto;
  margin-top: 5em;
  border-top: 1px solid rgba(37, 33, 59, ${(props) => props.borderOpacity || 1});
  overflow: hidden;
`;

export const TitleSection = styled.h1`
  padding: 1.5em 0em;
  background: transparent;
  font-size: 2em;
  color: #9bd076;
`;

export const ProyectoContent = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3em;
`;

export const ProyectoCard = styled.div`
  
  border-radius: 0.5em;
  border: 0.1px solid rgba(59, 130, 246, .5);
  padding: 1.5em;
`;

export const ProyectoImagen = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
`;

export const ProyectoTitle = styled.h2`
  font-size: 1.5em;
  padding-top: 1.5em;
  padding-bottom: 0.8em;
  text-align: center;
`;

export const ProyectoDescripcion = styled.p`
    padding-bottom: 1.5em;
    line-height: 1.5;
    font-size: 1.3em;
`

export const SkillContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
  background: transparent;
`;

export const StackContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background: transparent;
`;

export const StackImagen = styled.img`
  width: 3em;
  height: 3em;
`;

export const StackName = styled.span`
  font-size: 1.2em;
`;

export const ContentLink = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 1.5em;
`

export const ProyectoLink = styled.a`
  display: inline-block;
  text-align: center;
  background: transparent;
  text-decoration: none;

  &:hover {
    color: #9bd076;
  }
`;
