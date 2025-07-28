import { Route, Routes } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import Home from '../pages/Home'
import JobDetails from '../pages/JobDetails'
import Profile from '../pages/Profile'

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />} >
                <Route path='/' element={<Home />} />
                <Route path='/jobs/:id' element={<JobDetails />} />
                <Route path='/profile' element={<Profile />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes