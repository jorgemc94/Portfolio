import React from 'react';
import skillsData from "../../Utils/Data/skills";
import { SkillContent, SkillSection, SkillTitle, SkillCard, SkillImage, SkillName, SkillWrapper } from "./SkillsStyled";

export const SkillsComponent = () => {
    const skills = [...skillsData.skills, ...skillsData.skills];

    return(
        <SkillSection borderOpacity={1}>
            <SkillTitle>Skills</SkillTitle>
            <SkillContent>
                <SkillWrapper>
                    {skills.map((skill, index) => (
                        <SkillCard key={index} borderOpacity={1}>
                            <SkillImage src={skill.image} alt={skill.name}/>
                            <SkillName>{skill.name}</SkillName>
                        </SkillCard>
                    ))}
                </SkillWrapper>
                <SkillWrapper>
                    {skills.map((skill, index) => (
                        <SkillCard key={index + skills.length} borderOpacity={1}>
                            <SkillImage src={skill.image} alt={skill.name}/>
                            <SkillName>{skill.name}</SkillName>
                        </SkillCard>
                    ))}
                </SkillWrapper>
            </SkillContent>
        </SkillSection>
    )
}
