export const FILTER_OPTIONS = {
    category: ["Software Development", "Mobile Development", "Cloud & Infrastructure", "Marketing", "Sales", "Finance", "Human Resources", "Content & Editorial", "Product Management", "Customer Service", "DevOps & Infrastructure", "Data Science & Analytics", "Legal", "Project Management",],
    experience: ["Fresher", "Junior", "Mid-Level", "Senior", "Expert"],
    location: ["Remote", "Pune", "Mumbai", "Bangalore", "Delhi", "Hyderabad", "Chennai"],
    job_type: ["Full-time", "Part-time", "Internship", "Contract"]
};

export const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getSuggestedJobs = (profile, jobs) => {
    if (!profile) return jobs.slice(0, 5);

    const skills = profile.skills || [];
    const headline = profile.headline || '';
    const lowerHeadline = headline.toLowerCase();

    return jobs
        .filter((job) => {
            const titleMatch = job.title.toLowerCase().includes(lowerHeadline);
            const skillMatch = skills.some((skill) =>
                job.skills?.map((s) => s.toLowerCase()).includes(skill.toLowerCase())
            );
            return titleMatch || skillMatch;
        })
        .slice(0, 6);
};

export const getRecommendedJobs = (profile, jobs) => {
    if (!profile) return jobs.slice(0, 10);

    const { jobPreferences = {} } = profile;
    const { location, jobType, category } = jobPreferences;

    return jobs
        .filter((job) => {
            const locMatch = !location || job.location === location;
            const typeMatch = !jobType || job.job_type === jobType;
            const catMatch = !category || job.category === category;
            return locMatch && typeMatch && catMatch;
        })
        .slice(0, 10);
};
