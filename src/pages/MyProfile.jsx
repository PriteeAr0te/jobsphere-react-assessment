import { RiTextSnippet, RiContactsLine } from "react-icons/ri";
import { BsCardText } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa6";
import { FaUser, FaRegUser, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGlobe, FaGraduationCap, FaBuilding, FaCodeBranch } from "react-icons/fa";
import { AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { LuBriefcaseBusiness } from "react-icons/lu";

const MyProfile = ({ initialData }) => {
  return (
    <section className='w-full h-full pb-4 px-2 flex flex-col gap-y-3 justify-center items-center'>
      <h1 className='text-2xl font-semibold text-white mb-4 text-center'>My Profile</h1>
      <div className='max-w-6xl xl:w-[70%] mx-auto border border-br-primary/60 shadow-md rounded-lg p-6'>

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
                    <AiOutlineEdit className='' size={20} />
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
                    <span className="text-light-bg"><FaRegAddressCard /></span>
                    <span>Contact Information</span>
                  </h2>
                  <Link to="/edit-profile" className="text-light-bg hover:text-white cursor-pointer transition">
                    <AiOutlineEdit size={20} />
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
                        <FaRegAddressCard className="text-light-bg" />
                        {[
                          initialData.contactInfo.address1,
                          initialData.contactInfo.address2,
                          initialData.contactInfo.city,
                          initialData.contactInfo.state,
                          initialData.contactInfo.country
                        ].filter(Boolean).join(', ')}
                      </p>
                    )}
                  {initialData.contactInfo.phone && <p className="flex gap-2 items-center"><FaPhoneAlt className="text-light-bg" />{initialData.contactInfo.phone}</p>}
                  {initialData.contactInfo.email && <p className="flex gap-2 items-center"><FaEnvelope className="text-light-bg" />{initialData.contactInfo.email}</p>}
                  {initialData.contactInfo.linkedin && <p className="flex gap-2 items-center"><FaLinkedin className="text-light-bg" />{initialData.contactInfo.linkedin}</p>}
                  {initialData.contactInfo.portfolio && <p className="flex gap-2 items-center"><FaGlobe className="text-light-bg" />{initialData.contactInfo.portfolio}</p>}
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
                    <AiOutlineEdit className='' size={20} />
                  </button>
                </div>

                <div className='space-y-2 mt-3 text-white/80'>
                  <p>{initialData.bio}</p>
                </div>
              </section>}

              <section className='rounded-lg p-2 sm:p-4 border border-br-primary/60 bg-secondary-bg'>
                <div className="flex justify-between items-center pb-1.5 border-b border-light-bg/50">
                  <h2 className='text-lg font-semibold text-white mb-2 flex items-center gap-2'>
                    <FaGraduationCap className="text-light-bg" /> Education
                  </h2>
                  <div className='flex gap-2'>
                    <Link to="/edit-profile"><AiOutlineEdit size={20} className="text-light-bg hover:text-white" /></Link>
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

              {/* ✅ Experience */}
              <section className='rounded-lg p-2 sm:p-4 border border-br-primary/60 bg-secondary-bg'>
                <div className="flex justify-between items-center pb-1.5 border-b border-light-bg/50">
                  <h2 className='text-lg font-semibold text-white mb-2 flex items-center gap-2'>
                    <MdWorkOutline className="text-light-bg" /> Experience
                  </h2>
                  <div className='flex gap-2'>
                    <Link to="/edit-profile"><AiOutlineEdit size={20} className="text-light-bg hover:text-white" /></Link>
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

              {/* ✅ Skills */}
              <section className='rounded-lg p-2 sm:p-4 border border-br-primary/60 bg-secondary-bg'>
                <div className="flex justify-between items-center pb-1.5 border-b border-light-bg/50">
                  <h2 className='text-lg font-semibold text-white mb-2 flex items-center gap-2'>
                    <FaCodeBranch className="text-light-bg" /> Skills
                  </h2>
                  <Link to="/edit-profile" className="text-light-bg hover:text-white cursor-pointer">
                    <AiOutlineEdit size={20} />
                  </Link>
                </div>
                <div className='mt-3 text-white/80 flex flex-wrap gap-2'>
                  {initialData.skills?.length > 0 ? (
                    initialData.skills.map((skill, idx) => (
                      <span key={idx} className='bg-primary/80 px-3 py-1 rounded-md text-sm'>{skill}</span>
                    ))
                  ) : (
                    <p className='text-gray-400'>No skills added</p>
                  )}
                </div>
              </section>

              {/* ✅ Job Preferences */}
              <section className='rounded-lg p-2 sm:p-4 border border-br-primary/60 bg-secondary-bg'>
                <div className="flex justify-between items-center pb-1.5 border-b border-light-bg/50">
                  <h2 className='text-lg font-semibold text-white mb-2 flex items-center gap-2'>
                    <LuBriefcaseBusiness className="text-light-bg" /> Job Preferences
                  </h2>
                  <Link to="/edit-profile" className="text-light-bg hover:text-white cursor-pointer">
                    <AiOutlineEdit size={20} />
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