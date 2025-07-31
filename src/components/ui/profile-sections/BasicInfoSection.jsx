import React from 'react'
import InputComponent from '../InputComponent'
import TextareaComponent from '../TextareaComponent'

const BasicInfoSection = ({ formData, handleInputChange, errors }) => {
    return (
        <fieldset className='w-full border border-br-primary/60 p-2 sm:p-3 rounded-lg bg-transparent'>
            <legend className='bg-primary p-2 text-lg font-medium text-white mb-2'>Basic Information</legend>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <InputComponent
                    id='firstName'
                    name='firstName'
                    required={true}
                    error={errors.firstName}
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder='First Name'
                    label='First Name' />

                <InputComponent
                    id='lastName'
                    name='lastName'
                    required={true}
                    error={errors.lastName}
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder='Last Name'
                    label='Last Name' />
            </div>

            <div className='mb-4'>
                <InputComponent
                    id='headline'
                    name='headline'
                    value={formData.headline}
                    onChange={handleInputChange}
                    placeholder='Headline'
                    label='Headline' />
            </div>

            <div className='w-full'>
                <TextareaComponent
                    id='bio'
                    name='bio'
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder='Bio'
                    label='Bio' />
            </div>
        </fieldset>
    )
}

export default BasicInfoSection