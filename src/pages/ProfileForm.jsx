import React, { useEffect, useState } from 'react'
import BasicInfoSection from '../components/ui/profile-sections/BasicInfoSection';
import ContactInfoSection from '../components/ui/profile-sections/ContactInfoSection';
import SkillsSection from '../components/ui/profile-sections/SkillsSection';
import JobPreferenceSection from '../components/ui/profile-sections/JobPreferenceSection';
import ProgressBarComponent from '../components/ui/ProgressBarComponent';
import EducationSection from '../components/ui/profile-sections/EducationSection';
import ExperienceSection from '../components/ui/profile-sections/ExperienceSection';
import { useNavigate } from 'react-router-dom';
import { MdOutlineSettings } from "react-icons/md";

const ProfileForm = ({ initialData, type }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    headline: "",
    bio: "",
    contactInfo: {
      address1: "",
      address2: "",
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
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const validateStep = () => {
    const newErrors = {};

    if (currentStep === 0) {
      if (!formData.firstName?.trim()) newErrors.firstName = "First name is required.";
      if (!formData.lastName?.trim()) newErrors.lastName = "Last name is required.";
      if (!formData.headline?.trim()) newErrors.headline = "Headline is required.";
    }

    if (currentStep === 1) {
      if (!formData.contactInfo.email?.trim()) newErrors['contactInfo.email'] = "Email is required.";
      if (!formData.contactInfo.phone?.trim()) newErrors['contactInfo.phone'] = "Phone is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const steps = ['Basic Info', 'Contact Info', 'Education', 'Experience', 'Skills', 'Preferences'];
  const [currentStep, setCurrentStep] = useState(0);

  const goNext = () => {
    if (!validateStep()) return;
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const goBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const isLastStep = currentStep === steps.length - 1;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const keys = name.split(".");
    if (keys.length === 1) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => {
        const updated = { ...prev };
        let nested = updated;
        for (let i = 0; i < keys.length - 1; i++) {
          nested[keys[i]] = { ...nested[keys[i]] };
          nested = nested[keys[i]];
        }
        nested[keys[keys.length - 1]] = value;
        return updated;
      });
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <BasicInfoSection formData={formData} errors={errors} setFormData={setFormData} handleInputChange={handleInputChange} />;
      case 1:
        return <ContactInfoSection formData={formData} errors={errors} handleInputChange={handleInputChange} />;
      case 2:
        return <EducationSection formData={formData} errors={errors} setFormData={setFormData} handleInputChange={handleInputChange} />;
      case 3:
        return <ExperienceSection formData={formData} errors={errors} setFormData={setFormData} handleInputChange={handleInputChange} />;
      case 4:
        return <SkillsSection formData={formData} errors={errors} setFormData={setFormData} handleInputChange={handleInputChange} />;
      case 5:
        return <JobPreferenceSection formData={formData} errors={errors} setFormData={setFormData} handleInputChange={handleInputChange} />;
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userProfile", JSON.stringify(formData));
    alert("Profile saved successfully!");
    navigate('/profile');
  };

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };


  return (
    <section id='profile' className='w-full flex flex-col justify-center items-center overflow-x-hidden h-full px-2 '>
      <form
        type='submit'
        onSubmit={handleSubmit}
        className='w-full sm:w-[92%] md:w-[85%] lg:w-[78%] xl:w-[75%] py-4 bg-transparent shadow-md'>
        <div className="w-full px-2 mx-auto mb-4 flex justify-between items-center">
          <button
            onClick={handleBack}
            className=" text-white px-2 py-2 rounded-lg hover:bg-light-bg/50 transition duration-300 ease-in-out cursor-pointer whitespace-nowrap"
          >
            ← Back
          </button>
          <h1 className='text-2xl font-semibold text-white mb-4 text-center w-full'> {type === 'create' ? "Create Profile" : "Edit Profile"}</h1>
          <button
            className=" text-white px-2 py-2 rounded-lg hover:bg-light-bg/50 transition duration-300 ease-in-out cursor-pointer"
          >
            <MdOutlineSettings size={20} />
          </button>
        </div>
        <div className='py-4 w-full flex justify-between items-center'>
          <ProgressBarComponent currentStep={currentStep} steps={steps} />
        </div>
        <div className='w-full space-y-5'>
          {renderStep()}

          <div className='w-full flex justify-end items-center gap-4 mb-6'>
            <div className="flex justify-between gap-4">
              <button
                type="button"
                onClick={goBack}
                disabled={currentStep === 0}
                className={`relative group bg-gray-600 text-white px-4 py-2 rounded-lg transition 
                ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}
              `}
              >
                Back
              </button>


              {!isLastStep ? (
                <button
                  type="button"
                  onClick={goNext}
                  className="bg-btn-bg hover:bg-light-bg/50 cursor-pointer transform ease-in duration-300 text-white px-4 py-2 rounded"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-btn-bg hover:bg-light-bg/50 cursor-pointer transform ease-in duration-300 text-white px-4 py-2 rounded"
                >
                  {type === 'create' ? "Submit Profile" : 'Edit Profile'}
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default ProfileForm