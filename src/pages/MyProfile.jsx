import { RiTextSnippet } from "react-icons/ri";
import { BsCardText } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa6";
import { FaUser, FaRegUser, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGlobe, FaGraduationCap, FaCodeBranch } from "react-icons/fa";
import { AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { LuBriefcaseBusiness } from "react-icons/lu";
import { calculateProfileCompletion } from "../utils/calculateProfileCompletion";
import { MdOutlineSettings } from "react-icons/md";

const MyProfile = ({ initialData }) => {
  const completion = calculateProfileCompletion(initialData);
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <section className='w-full h-full pb-4 px-2 flex flex-col gap-y-3 justify-center items-center overflow-x-hidden'>
      <div className="w-full px-2 sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto mb-4 flex justify-between items-center">
        <button
          onClick={goBack}
          className=" text-white px-2 py-2 rounded-lg hover:bg-light-bg/50 transition duration-300 ease-in-out cursor-pointer"
        >
          ← Back
        </button>
        <h1 className='text-2xl font-semibold text-white mb-4 text-center'>My Profile</h1>
        <button
          className=" text-white px-2 py-2 rounded-lg hover:bg-light-bg/50 transition duration-300 ease-in-out cursor-pointer"
        >
          <MdOutlineSettings size={20} />
        </button>
      </div>
      <div className='max-w-6xl xl:w-[70%] mx-auto border border-br-primary/60 shadow-md rounded-lg p-2 sm:p-6'>

        <div className="mb-6">
          {initialData && (
            <div className="w-full max-w-6xl mx-auto px-2 mb-4">
              <p className="text-white text-sm mb-1">Profile Completion: {completion}%</p>
              <div className="w-full bg-light-bg/50 rounded h-3 overflow-hidden">
                <div
                  className="h-full bg-blue-500 dark:bg-light-bg transition-all duration-500"
                  style={{ width: `${completion}%` }}
                />
              </div>
            </div>
          )}

        </div>

        <div className='w-full space-y-5'>
          {initialData ? (
            <>
              <section className='rounded-lg p-2 sm:p-4 border border-br-primary/60 bg-secondary-bg'>
                <div className="w-full flex justify-between items-center pb-1.5 border-b border-light-bg/50">
                  <h2 className='text-lg font-semibold text-white mb-2 flex items-center gap-2'>
                    <span className="text-gray-700 dark:text-light-bg">
                      <FaUser />
                    </span>
                    <span>Basic Information</span>
                  </h2>

                  <button className="text-gray-700 dark:text-light-bg hover:text-white cursor-pointer transition duration-300 ease-in">
                    <AiOutlineEdit className='text-gray-600 dark:text-light-bg hover:text-gray-800 dark:hover:text-white' size={20} />
                  </button>
                </div>

                <div className='space-y-2 mt-3 text-white/80'>
                  <p className="flex gap-2 items-center"><span className=" text-gray-700 dark:text-light-bg"><FaRegUser /></span> {initialData.firstName} {initialData.lastName}</p>
                  {initialData.headline && <p className="flex gap-2 items-center"><span className=" text-gray-700 dark:text-light-bg"><RiTextSnippet /></span> {initialData.headline}</p>}
                </div>
              </section>

              <section className='rounded-lg p-2 sm:p-4 border border-br-primary/60 bg-secondary-bg'>
                <div className="w-full flex justify-between items-center pb-1.5 border-b border-light-bg/50">
                  <h2 className='text-lg font-semibold text-white mb-2 flex items-center gap-2'>
                    <span className='text-gray-600 dark:text-light-bg hover:text-gray-800 dark:hover:text-white'><FaRegAddressCard /></span>
                    <span>Contact Information</span>
                  </h2>
                  <Link to="/edit-profile" className="text-light-bg hover:text-white cursor-pointer transition">
                    <AiOutlineEdit className='text-gray-600 dark:text-light-bg hover:text-gray-800 dark:hover:text-white' size={20} />
                  </Link>
                </div>
                <div className='space-y-2 mt-3 text-white/80'>
                  {(
                    initialData?.contactInfo?.address1 ||
                    initialData?.contactInfo?.address2 ||
                    initialData?.contactInfo?.city ||
                    initialData?.contactInfo?.state ||
                    initialData?.contactInfo?.country
                  ) && (
                      <p className="flex gap-2 items-center">
                        <FaRegAddressCard className='text-gray-600 dark:text-light-bg hover:text-gray-800 dark:hover:text-white' />
                        {[
                          initialData.contactInfo.address1,
                          initialData.contactInfo.address2,
                          initialData.contactInfo.city,
                          initialData.contactInfo.state,
                          initialData.contactInfo.country
                        ].filter(Boolean).join(', ')}
                      </p>
                    )}
                  {initialData.contactInfo.phone && <p className="flex gap-2 items-center"><FaPhoneAlt className='text-gray-600 dark:text-light-bg hover:text-gray-800 dark:hover:text-white' />{initialData.contactInfo.phone}</p>}
                  {initialData.contactInfo.email && <p className="flex gap-2 items-center"><FaEnvelope className='text-gray-600 dark:text-light-bg hover:text-gray-800 dark:hover:text-white' />{initialData.contactInfo.email}</p>}
                  {initialData.contactInfo.linkedin && <p className="flex gap-2 items-center"><FaLinkedin className='text-gray-600 dark:text-light-bg hover:text-gray-800 dark:hover:text-white' />{initialData.contactInfo.linkedin}</p>}
                  {initialData.contactInfo.portfolio && <p className="flex gap-2 items-center"><FaGlobe className='text-gray-600 dark:text-light-bg hover:text-gray-800 dark:hover:text-white' />{initialData.contactInfo.portfolio}</p>}
                </div>
              </section>

              {initialData.bio && <section className='rounded-lg p-2 sm:p-4 border border-br-primary/60 bg-secondary-bg'>
                <div className="w-full flex justify-between items-center pb-1.5 border-b border-light-bg/50">
                  <h2 className='text-lg font-semibold text-white mb-2 flex items-center gap-2'>
                    <span className="text-gray-700 dark:text-light-bg">
                      <BsCardText />
                    </span>
                    <span>About Me</span>
                  </h2>

                  <button className="text-gray-700 dark:text-light-bg hover:text-white cursor-pointer transition duration-300 ease-in">
                    <AiOutlineEdit className='text-gray-600 dark:text-light-bg hover:text-gray-800 dark:hover:text-white' size={20} />
                  </button>
                </div>

                <div className='space-y-2 mt-3 text-white/80'>
                  <p>{initialData.bio}</p>
                </div>
              </section>}

              <section className='rounded-lg p-2 sm:p-4 border border-br-primary/60 bg-secondary-bg'>
                <div className="flex justify-between items-center pb-1.5 border-b border-light-bg/50">
                  <h2 className='text-lg font-semibold text-white mb-2 flex items-center gap-2'>
                    <FaGraduationCap className='text-gray-600 dark:text-light-bg hover:text-gray-800 dark:hover:text-white' /> Education
                  </h2>
                  <div className='flex gap-2'>
                    <Link to="/edit-profile"><AiOutlineEdit size={20} className='text-gray-600 dark:text-light-bg hover:text-gray-800 dark:hover:text-white' /></Link>
                    <button><AiOutlinePlus size={20} className="text-light-bg hover:text-white" /></button>
                  </div>
                </div>
                <div className="space-y-3 mt-3 text-white/80">
                  {initialData.education?.map((edu, idx) => (
                    <div key={idx} className='flex flex-col gap-1'>
                      <p><strong>Degree:</strong> {edu.degree}</p>
                      <p><strong>Specialization:</strong> {edu.specialization}</p>
                      <p><strong>Institution:</strong> {edu.institution}</p>
                      <p><strong>Duration:</strong> {edu.startDate} - {edu.isPresent ? "Present" : edu.endDate}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className='rounded-lg p-2 sm:p-4 border border-br-primary/60 bg-secondary-bg'>
                <div className="flex justify-between items-center pb-1.5 border-b border-light-bg/50">
                  <h2 className='text-lg font-semibold text-white mb-2 flex items-center gap-2'>
                    <MdWorkOutline className='text-gray-600 dark:text-light-bg hover:text-gray-800 dark:hover:text-white' /> Experience
                  </h2>
                  <div className='flex gap-2'>
                    <Link to="/edit-profile"><AiOutlineEdit size={20} className='text-gray-600 dark:text-light-bg hover:text-gray-800 dark:hover:text-white' /></Link>
                    <button><AiOutlinePlus size={20} className="text-light-bg hover:text-white" /></button>
                  </div>
                </div>
                <div className="space-y-3 mt-3 text-white/80">
                  {initialData.experience?.map((exp, idx) => (
                    <div key={idx} className='flex flex-col gap-1'>
                      <p><strong>Job Title:</strong> {exp.jobTitle}</p>
                      <p><strong>Company:</strong> {exp.companyName}</p>
                      <p><strong>Location:</strong> {exp.location}</p>
                      <p><strong>Duration:</strong> {exp.startDate} - {exp.isPresent ? "Present" : exp.endDate}</p>
                      <p><strong>Description:</strong> {exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className='rounded-lg p-2 sm:p-4 border border-br-primary/60 bg-secondary-bg'>
                <div className="flex justify-between items-center pb-1.5 border-b border-light-bg/50">
                  <h2 className='text-lg font-semibold text-white mb-2 flex items-center gap-2'>
                    <FaCodeBranch className='text-gray-600 dark:text-light-bg hover:text-gray-800 dark:hover:text-white' /> Skills
                  </h2>
                  <Link to="/edit-profile" className="text-light-bg hover:text-white cursor-pointer">
                    <AiOutlineEdit className='text-gray-600 dark:text-light-bg hover:text-gray-800 dark:hover:text-white' size={20} />
                  </Link>
                </div>
                <div className='mt-3 text-white flex flex-wrap gap-2'>
                  {initialData.skills?.length > 0 ? (
                    initialData.skills.map((skill, idx) => (
                      <span key={idx} className='bg-primary/80 border border-br-primary px-3 py-1 rounded-lg text-sm'>{skill}</span>
                    ))
                  ) : (
                    <p className='text-gray-400'>No skills added</p>
                  )}
                </div>
              </section>

              <section className='rounded-lg p-2 sm:p-4 border border-br-primary/60 bg-secondary-bg'>
                <div className="flex justify-between items-center pb-1.5 border-b border-light-bg/50">
                  <h2 className='text-lg font-semibold text-white mb-2 flex items-center gap-2'>
                    <LuBriefcaseBusiness className='text-gray-600 dark:text-light-bg hover:text-gray-800 dark:hover:text-white' /> Job Preferences
                  </h2>
                  <Link to="/edit-profile" className="text-light-bg hover:text-white cursor-pointer">
                    <AiOutlineEdit className='text-gray-600 dark:text-light-bg hover:text-gray-800 dark:hover:text-white' size={20} />
                  </Link>
                </div>
                <div className='mt-3 text-white/80 space-y-1'>
                  {initialData.jobPreferences.preferredJobType && <p><strong>Job Type:</strong> {initialData.jobPreferences.preferredJobType}</p>}
                  {initialData.jobPreferences.preferredWorkMode && <p><strong>Work Mode:</strong> {initialData.jobPreferences.preferredWorkMode}</p>}
                  {initialData.jobPreferences.preferredLocation && <p><strong>Location:</strong> {initialData.jobPreferences.preferredLocation}</p>}
                  {initialData.jobPreferences.expectedSalary && <p><strong>Expected Salary:</strong> {initialData.jobPreferences.expectedSalary}</p>}
                  <p><strong>Open to Relocate:</strong> {initialData.jobPreferences.openToRelocate ? "Yes" : "No"}</p>
                </div>
              </section>



            </>
          ) : (
            <p className='text-gray-400'>No profile data available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyProfile