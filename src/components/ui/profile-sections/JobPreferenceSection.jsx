import React from 'react'
import InputComponent from '../InputComponent'

const JobPreferenceSection = ({ formData, handleInputChange, setFormData }) => {
    return (
        <fieldset className='w-full border border-br-primary/60 p-2 sm:p-3 rounded-lg bg-transparent'>
            <legend className='bg-primary p-2 text-lg font-medium text-white mb-2'>Job Preferences</legend>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <InputComponent
                    id='preferredJobType'
                    name='jobPreferences.preferredJobType'
                    value={formData.jobPreferences.preferredJobType}
                    onChange={handleInputChange}
                    placeholder='Preferred Job Type'
                    label='Preferred Job Type' />
                <InputComponent
                    id='preferredWorkMode'
                    name='jobPreferences.preferredWorkMode'
                    value={formData.jobPreferences.preferredWorkMode}
                    onChange={handleInputChange}
                    placeholder='Preferred Work Mode'
                    label='Preferred Work Mode' />
                <InputComponent
                    id='preferredLocation'
                    name='jobPreferences.preferredLocation'
                    value={formData.jobPreferences.preferredLocation}
                    onChange={handleInputChange}
                    placeholder='Preferred Location'
                    label='Preferred Location' />
                <InputComponent
                    id='expectedSalary'
                    name='jobPreferences.expectedSalary'
                    value={formData.jobPreferences.expectedSalary}
                    onChange={handleInputChange}
                    placeholder='Expected Salary'
                    label='Expected Salary' />
                <div className='flex items-center gap-2'>
                    <input
                        type='checkbox'
                        id='openToRelocate'
                        name='jobPreferences.openToRelocate'
                        checked={formData.jobPreferences.openToRelocate}
                        onChange={(e) => setFormData({ ...formData, jobPreferences: { ...formData.jobPreferences, openToRelocate: e.target.checked } })}
                    />
                    <label htmlFor='openToRelocate' className='text-sm text-white'>Open to Relocate</label>
                </div>
            </div>
        </fieldset>
    )
}

export default JobPreferenceSection