import React from 'react'
import InputComponent from '../InputComponent'

const ContactInfoSection = ({ formData, handleInputChange, errors }) => {
    return (
        <fieldset className='w-full border border-br-primary/60 p-2 sm:p-3 rounded-lg bg-transparent'>
            <legend className='bg-primary p-2 text-lg font-medium text-white mb-2'> Contact Information </legend>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <InputComponent
                    id='address1'
                    name='contactInfo.address1'
                    required={true}
                    error={errors["contactInfo.address1"]}
                    value={formData.contactInfo.address1}
                    onChange={handleInputChange}
                    placeholder='Address Line 1'
                    label='Address Line 1' />

                <InputComponent
                    id='address2'
                    required={true}
                    error={errors["contactInfo.address2"]}
                    name='contactInfo.address2'
                    value={formData.contactInfo.address2}
                    onChange={handleInputChange}
                    placeholder='Address Line 2'
                    label='Address Line 2' />

                <InputComponent
                    id='city'
                    name='contactInfo.city'
                    required={true}
                    error={errors["contactInfo.city"]}
                    value={formData.contactInfo.city}
                    onChange={handleInputChange}
                    placeholder='City'
                    label='City' />

                <InputComponent
                    id='state'
                    name='contactInfo.state'
                    required={true}
                    error={errors["contactInfo.state"]}
                    value={formData.contactInfo.state}
                    onChange={handleInputChange}
                    placeholder='State'
                    label='State' />

                <InputComponent
                    id='country'
                    name='contactInfo.country'
                    required={true}
                    error={errors["contactInfo.country"]}
                    value={formData.contactInfo.country}
                    onChange={handleInputChange}
                    placeholder='Country'
                    label='Country' />

                <InputComponent
                    id='phone'
                    name='contactInfo.phone'
                    value={formData.contactInfo.phone}
                    onChange={handleInputChange}
                    placeholder='Phone Number'
                    label='Phone Number' />

                <InputComponent
                    id='email'
                    name='contactInfo.email'
                    required={true}
                    error={errors["contactInfo.email"]}
                    value={formData.contactInfo.email}
                    onChange={handleInputChange}
                    placeholder='Email Address'
                    label='Email Address' />

                <InputComponent
                    id='linkedin'
                    name='contactInfo.linkedin'
                    value={formData.contactInfo.linkedin}
                    onChange={handleInputChange}
                    placeholder='LinkedIn Profile'
                    label='LinkedIn Profile' />

                <InputComponent
                    id='portfolio'
                    name='contactInfo.portfolio'
                    value={formData.contactInfo.portfolio}
                    onChange={handleInputChange}
                    placeholder='Portfolio URL'
                    label='Portfolio URL' />

            </div>
        </fieldset>
    )
}

export default ContactInfoSection