import styled from "styled-components";

export const EstudiosSection = styled.section`
    width: 80%;
    margin: 0 auto;
    margin-top: 5em;
    border-top: 1px solid rgba(37, 33, 59, ${(props) => props.borderOpacity || 1});
    overflow: visible;
`;

export const EstudiosContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 50%);
  gap: 3em;
  justify-content: center;
  overflow: visible;
`;

export const EstudiosTitle = styled.h1`
    padding: 1.5em 0em;
    background: transparent;
    font-size: 2em;
    color: #9bd076;
    text-align: center;
`;

export const EstudiosCard = styled.article`
  background: rgb(37 33 59);
  border-radius: 0.5em;
  border: 0.1px solid #6b56c6;
  padding: 1.5em;
  width: 100%;
  transition: transform 0.3s ease;
  transform-origin: center;
  transform: scale(0.95);
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const TituloCard = styled.h1`
    color: #9bd076;
    font-size:1.3em;
    background: inherit;
    padding-bottom: 0.3em; 
`

export const SubtituloCard = styled.h3`
    color: #6b56c6;
    font-size: 1.1em;
    padding-bottom: 0.8em;
    background: inherit;
`

export const DescripcionCard = styled.p`
    background: inherit;
    font-style: oblique;
    line-height: 1.7;
`