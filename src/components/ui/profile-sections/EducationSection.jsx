import React from 'react'
import EducationComponent from '../EducationComponent';

const EducationSection = ({formData, setFormData}) => {
    return (
        <fieldset className="w-full border border-br-primary/60 p-2 sm:p-3 rounded-lg bg-transparent">
            <legend className="bg-primary p-2 text-lg font-medium text-white mb-2">Education</legend>

            <div className="flex flex-col gap-6">
                {formData.education.map((edu, index) => (
                    <EducationComponent
                        key={index}
                        index={index}
                        data={edu}
                        onChange={(i, newEdu) => {
                            const updated = [...formData.education];
                            updated[i] = newEdu;
                            setFormData({ ...formData, education: updated });
                        }}
                        onRemove={(i) => {
                            const updated = [...formData.education];
                            updated.splice(i, 1);
                            setFormData({ ...formData, education: updated });
                        }}
                    />
                ))}
            </div>

            <button
                type="button"
                className="mt-4 bg-primary cursor-pointer text-white border hover:bg-btn-bg border-br-primary/80 text-sm px-4 py-2 rounded-md"
                onClick={() => {
                    const newEdu = {
                        degree: '',
                        specialization: '',
                        institution: '',
                        startDate: '',
                        endDate: '',
                        isPresent: false
                    };
                    setFormData({ ...formData, education: [...formData.education, newEdu] });
                }}
            >
                + Add Education
            </button>
        </fieldset>
    )
}

export default EducationSection