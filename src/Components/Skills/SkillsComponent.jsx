import skillsData from "../../Utils/Data/skills";
import { SkillContent, SkillSection, SkillTitle, SkillCard, SkillImage, SkillName } from "./SkillsStyled";

export const SkillsComponent = () => {

    return(
        <>
            <SkillSection borderOpacity={1}>
                <SkillTitle>Skills</SkillTitle>
                <SkillContent>
                    {skillsData.skills.map((skill, index) => (
                    <SkillCard key={index} borderOpacity={1}>
                        <SkillImage src={skill.image} alt={skill.name}/>
                        <SkillName>{skill.name}</SkillName>
                    </SkillCard>
                    ))}
                </SkillContent>
            </SkillSection>
        </>
    )
}