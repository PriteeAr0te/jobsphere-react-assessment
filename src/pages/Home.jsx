import { useEffect, useMemo, useState } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import JobList from '../components/ui/jobs/JobList';
import JobDetailsPanel from '../components/JobDetailsPanel';
import jobsData from '../data/jobs.json';
import SearchBar from '../components/ui/SearchBar';
import { FILTER_OPTIONS, getRecommendedJobs } from '../utils/filters';
import ActiveFilterDropdown from '../components/ui/ActiveFilterDropdown';
import { useDebouncedValue } from '../utils/useDebouncedSearch';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineSettings } from "react-icons/md";
import SuggestedJobs from '../components/ui/jobs/SuggestedJobs';

const Home = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const [selectedJob, setSelectedJob] = useState(null);
  const [activeFilters, setActiveFilters] = useState([]);
  const [filterSelections, setFilterSelections] = useState({
    experience: [],
    category: [],
    location: [],
    job_type: [],
  });
  const [openFilterType, setOpenFilterType] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebouncedValue(searchTerm, 300);

  const userProfile = JSON.parse(localStorage.getItem("userProfile"));

  const recommendedJobs = useMemo(() => {
    return getRecommendedJobs(userProfile, jobsData);
  }, [userProfile]);

  const handleFilterTypeSelect = (type) => {
    if (!activeFilters.includes(type)) {
      setActiveFilters((prev) => [...prev, type]);
    }
  };

  const handleFilterOptionToggle = (type, option) => {
    setFilterSelections((prev) => {
      const currentOptions = prev[type];
      const updated = currentOptions.includes(option)
        ? currentOptions.filter((val) => val !== option)
        : [...currentOptions, option];
      return { ...prev, [type]: updated };
    });
  };

  const handleFilterClear = (type) => {
    setFilterSelections((prev) => ({
      ...prev,
      [type]: [],
    }));

    setActiveFilters((prev) => prev.filter((filter) => filter !== type));
    if (openFilterType === type) {
      setOpenFilterType(null);
    }
  };

  const filteredJobs = useMemo(() => {
    const filters = filterSelections;

    return recommendedJobs.filter((job) => {
      const matchesSearch =
        debouncedSearch === '' ||
        job.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        job.company.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        (job.location || '').toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        (job.skills || []).some((skill) =>
          skill.toLowerCase().includes(debouncedSearch.toLowerCase())
        );

      const matchesExperience =
        filters.experience.length === 0 ||
        filters.experience.includes(job.experience);

      const matchesCategory =
        filters.category.length === 0 ||
        filters.category.includes(job.category);

      const matchesLocation =
        filters.location.length === 0 ||
        filters.location.includes(job.location);

      const matchesJobType =
        filters.job_type?.length === 0 ||
        filters.job_type.includes(job.job_type);

      return (
        matchesSearch &&
        matchesExperience &&
        matchesCategory &&
        matchesLocation &&
        matchesJobType
      );
    });
  }, [debouncedSearch, filterSelections, recommendedJobs]);

  useEffect(() => {
    if (!isMobile && jobsData?.length) {
      setSelectedJob(jobsData[0]);
    }
  }, [isMobile]);

  const goBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <section className="w-full flex flex-col justify-center px-2">
      <div className='w-full pb-4 flex flex-col justify-center items-center'>
        <div className='w-full md:w-[75%] lg:w-[65%] xl:w-[50%] 2xl:w-[45%] overflow-x-hidden'>
          <div className="w-full px-2 mx-auto mb-4 flex justify-between items-center">
            <div></div>
            <h2 className='text-xl md:text-2xl font-semibold tracking-wide mb-1'>Let's Find Job</h2>
            <button className="text-white px-2 py-2 rounded-lg hover:bg-light-bg/50">
              <MdOutlineSettings size={20} />
            </button>
          </div>

          {/* Search & Filters */}
          <SearchBar
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            onFilterTypeSelect={handleFilterTypeSelect}
          />
          <div className="flex flex-wrap gap-2 mt-2 mb-1">
            {activeFilters.map((type) => (
              <ActiveFilterDropdown
                key={type}
                type={type}
                options={FILTER_OPTIONS[type]}
                selectedValues={filterSelections[type]}
                onChange={handleFilterOptionToggle}
                isOpen={openFilterType === type}
                onOpen={(type) => setOpenFilterType(type)}
                onClose={() => setOpenFilterType(null)}
                onClear={handleFilterClear}
              />
            ))}
          </div>

          <div className="mt-4 mb-4 w-full flex justify-center items-center">
            <SuggestedJobs userProfile={userProfile} />
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center'>
        <div className={`w-full max-w-6xl ${isMobile ? 'flex-col' : 'flex'}`}>
          <aside className={`${isMobile ? '' : 'w-2/5 xl:w-1/3'}`}>
            <div className="w-full flex justify-between items-center">
              <h3 className="lg:text-lg font-semibold mb-3">Recommended for You</h3>
              <Link to='/jobs' className="text-gray-800 hover:underline dark:text-light-bg italic">
                View All
              </Link>
            </div>
            <JobList
              searchTerm={searchTerm}
              jobs={filteredJobs}
              userProfile={userProfile}
              isMobile={isMobile}
              selectedJobId={selectedJob?.id}
              onSelect={(job) => {
                if (isMobile) {
                  window.location.href = `/jobs/${job.id}`;
                } else {
                  setSelectedJob(job);
                }
              }}
            />
          </aside>

          {!isMobile && selectedJob && (
            <div className="w-3/5 xl:w-2/3 md:pl-6 xl:pl-8">
              <div className="sticky top-4 h-full md:h-[94vh]">
                <JobDetailsPanel job={selectedJob} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
