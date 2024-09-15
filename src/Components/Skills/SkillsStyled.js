import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const SkillSection = styled.section`
  width: 80%;
  margin: 0 auto;
  margin-top: 5em;
  border-top: 1px solid rgba(37, 33, 59, ${props => props.borderOpacity || 1});
  overflow: hidden;
`;

export const SkillTitle = styled.h1`
  padding-top: 1.5em;
  color: #9bd076;
  font-size: 2em;
`;

export const SkillContent = styled.div`
  display: flex;
  gap: 1.5em; // Espacio entre las cartas
  width: 200%; 
  animation: ${scroll} 20s linear infinite; 
  &:hover {
    animation-play-state: paused; 
  }
`;

export const SkillWrapper = styled.div`
  display: flex;
`;

export const SkillCard = styled.article`
  text-align: center;
  background: rgb(37 33 59);
  padding: 1em;
  margin: 1.5em;
  width: 9em;
  height: 7em;
  border: 0.1px solid rgba(59, 130, 246, .5);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2); 
  }
`;

export const SkillImage = styled.img`
  background: transparent;
  width: 3.5em;
  height: 3.5em;
`;

export const SkillName = styled.p`
  padding-top: 1.5em;
  font-size: 1em;
  background: transparent;
`;
