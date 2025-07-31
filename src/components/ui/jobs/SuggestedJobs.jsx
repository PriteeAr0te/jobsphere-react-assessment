"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import jobsData from "../../../data/jobs.json";
import JobCard from "./JobCard";
import { Link, useNavigate } from "react-router-dom";
import { getSuggestedJobs } from "../../../utils/filters";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function CustomNavigation() {
    const swiper = useSwiper();

    return (
        <>
            <button
                size="lg"
                variant="ghost"
                onClick={() => swiper.slidePrev()}
                className="!absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-white/10 hover:bg-white/20 sr-only"
            >
                <FaArrowLeft className="h-6 w-6 stroke-2" />
            </button>
            <button
                size="lg"
                variant="ghost"
                onClick={() => swiper.slideNext()}
                className="!absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-white/10 hover:bg-white/20"
            >
                <FaArrowRight className="h-6 w-6 stroke-2" />
            </button>
        </>
    );
}

const SuggestedJobs = () => {
    const [suggestedJobs, setSuggestedJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const userProfile = JSON.parse(localStorage.getItem("userProfile"));
        const jobs = getSuggestedJobs(userProfile, jobsData);
        setSuggestedJobs(jobs);
    }, []);

    if (!suggestedJobs.length) return null;

    return (
        <div className="relative w-full h-full sm:w-[450px] md:w-[500px]">

            <div className="w-full flex justify-between items-center">
                <h3 className="text-lg font-semibold mb-3">Suggested for You</h3>
                <Link to='/jobs' className="text-gray-800 hover:underline dark:text-light-bg italic">
                    View All
                </Link>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                modules={[Navigation, Pagination]}
                className="relative rounded-xl p-1 items-stretch"
            >
                {suggestedJobs.map((job) => (
                    <SwiperSlide key={job.id} className="select-none">
                        <JobCard onSelect={() => navigate(`/jobs/${job.id}`)} job={job} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SuggestedJobs;