import styled from "styled-components";


export const SkillSection = styled.section`
    width: 80%;
    margin: 0 auto;
    margin-top: 5em;
    border-top: 1px solid rgba(37, 33, 59, ${props => props.borderOpacity || 1});
`

export const SkillTitle = styled.h1`
    padding: 1.5em 0em;
    color: #9bd076;
    font-size: 2em;
    text-align: center;
`

export const SkillContent = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    justify-content: center;
    gap: 1.5em;
`

export const SkillCard = styled.article`
    text-align: center;
    background: rgb(37 33 59);
    padding: 1em 0.5em;
    width: 8em;
    height: 5em;
    border: 0.1px solid rgba(59, 130, 246, .5);

    &:hover {
        transform: scale(1.2);
    }
`

export const SkillImage = styled.img`
    background: transparent;
    widht: 2.5em;
    height: 2.5em;
`

export const SkillName = styled.p`
    padding-top: 1.5em;
    font-size: 1em;
    background: transparent;
`