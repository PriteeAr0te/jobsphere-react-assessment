import React from 'react'
import ExperienceComponent from '../ExperienceComponent';

const ExperienceSection = ({ formData, setFormData, errors }) => {
    return (
        <fieldset className='w-full border border-br-primary/60 p-2 sm:p-3 rounded-lg bg-transparent'>
            <legend className='bg-primary p-2 text-lg font-medium text-white mb-2'>Experience</legend>
            <div className='flex flex-col gap-6'>
                {Array.isArray(formData.experience) && formData.experience.map((exp, index) => (
                    <ExperienceComponent
                        key={index}
                        index={index}
                        data={exp}
                        errors={errors?.experience?.[index] || {}}
                        onChange={(i, newExp) => {
                            const updated = [...formData.experience];
                            updated[i] = newExp;
                            setFormData({ ...formData, experience: updated });
                        }}
                        onRemove={(i) => {
                            const updated = [...formData.experience];
                            updated.splice(i, 1);
                            setFormData({ ...formData, experience: updated });
                        }}
                    />
                ))}
            </div>
        </fieldset>
    )
}

export default ExperienceSection