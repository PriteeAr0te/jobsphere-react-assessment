import { Route, Routes } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import Home from '../pages/Home'
import JobDetails from '../pages/JobDetails'
import { useEffect, useState } from 'react'
import ProfileForm from '../pages/ProfileForm'
import MyProfile from '../pages/MyProfile'
import AllJobs from '../pages/AllJobs'

const AppRoutes = () => {
    const [fetchedUserProfile, setFetchedUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userProfile')) || null;
        setFetchedUserProfile(data);
        setLoading(false);
    }, []);

    if (loading) return <div className="text-white text-center">Loading Profile...</div>;

    return (
        <Routes>
            <Route element={<MainLayout />} >
                <Route path='/' element={<Home />} />
                <Route path='/jobs' element={<AllJobs />} />
                <Route path='/jobs/:id' element={<JobDetails />} />
                <Route path='/profile' element={<MyProfile initialData={fetchedUserProfile} />} />
                <Route path="/edit-profile" element={<ProfileForm initialData={fetchedUserProfile} type="edit" />} />
                <Route path="/create-profile" element={<ProfileForm type="create" />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes