import React from 'react'
import SkillsComponent from '../SkillsComponent'

const SkillsSection = ({ formData, setFormData }) => {
    return (
        <fieldset className='w-full border border-br-primary/60 p-2 sm:p-3 rounded-lg bg-transparent'>
            <legend className='bg-primary p-2 text-lg font-medium text-white mb-2'>Skills</legend>
            <SkillsComponent
                skills={formData.skills}
                setSkills={(newSkills) => setFormData({ ...formData, skills: newSkills })}
            />
        </fieldset>
    )
}

export default SkillsSection