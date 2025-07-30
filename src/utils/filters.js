export const FILTER_OPTIONS = {
    category: ["Software Development", "Mobile Development", "Cloud & Infrastructure", "Marketing", "Sales", "Finance", "Human Resources", "Content & Editorial", "Product Management", "Customer Service","DevOps & Infrastructure", "Data Science & Analytics", "Legal", "Project Management",],
    experience: ["Fresher", "Junior", "Mid-Level", "Senior", "Expert"],
    location: ["Remote", "Pune", "Mumbai", "Bangalore", "Delhi", "Hyderabad", "Chennai"],
    job_type: ["Full-time", "Part-time", "Internship", "Contract"]
};

export const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
};