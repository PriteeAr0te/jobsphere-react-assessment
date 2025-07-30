import React from 'react'

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    profileImage: "",
    headline: "",
    aboutMe: "",
    contactInfo: {
      city: "",
      state: "",
      country: "",
      phone: "",
      email: "",
      linkedin: "",
      portfolio: ""
    },
    education: [
      {
        degree: "",
        specialization: "",
        institution: "",
        startDate: "",
        endDate: "",
        isPresent: false
      }
    ],
    experience: [
      {
        jobTitle: "",
        companyName: "",
        location: "",
        startDate: "",
        endDate: "",
        isPresent: false,
        description: ""
      }
    ],
    skills: [],
    jobPreferences: {
      preferredJobType: "",
      preferredWorkMode: "",
      preferredLocation: "",
      expectedSalary: "",
      openToRelocate: false
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }


  return (
    <section id='profile' className='w-full overflow-x-hidden h-full px-2 '>
      <div className='max-w-7xl mx-auto py-8 border border-br-primary/60 rounded-lg bg-secondary-bg shadow-md'>
        <h1 className='text-2xl font-semibold text-white mb-4 text-center w-full'> Create Profile</h1>
        <div className='w-full space-y-4'>
          <fieldset className='w-full'>
            <legend className='text-lg font-medium text-white mb-2'>Basic Info</legend>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <InputComponent
                id='firstName'
                name='firstName'
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder='First Name'
                label='First Name' />

              <InputComponent
                id='lastName'
                name='lastName'
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder='Last Name'
                label='Last Name' />

              <InputComponent
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Email Address'
                label='Email Address' />

              <InputComponent
                id='headline'
                name='headline'
                value={formData.headline}
                onChange={handleInputChange}
                placeholder='Headline'
                label='Headline' />

            </div>

          </fieldset>

        </div>
      </div>
    </section>
  )
}

export default Profile