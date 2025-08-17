import React from "react";
import { useMemo } from 'react'


import { AlignJustify, Star, StarHalf, StarOff } from "lucide-react"
import HeaderDashboard from "../components/HeaderDashboard";
import courseImage from '../data/courseImage'; // import courseImage from the correct path
import avatarImage from "../data/avatarImage"; // import avatarImage from the correct path

import { RatingStars } from "../components/molecules/RatingStars"; // import RatingStars component

import CourseCard from "../components/molecules/CourseCard";





const Dashboard: React.FC = () => {
    const randomImage = useMemo(() => {
        const index = Math.floor(Math.random() * courseImage.length)
        console.log("Random Image Index:", index);
        
        return courseImage[index]
    }, [])
    const randomAvatar = useMemo(() => {
        const index = Math.floor(Math.random() * avatarImage.length)
        return avatarImage[index]
    }, [])

    const dataImage = randomImage;
    console.log("Image Data:", dataImage);
    

    return (
        <div>


            <div className="mb-7">
                <HeaderDashboard />
            </div>

            <div className="container mx-auto px-4 ">
                <div className="relative min-h-[400px] bg-dashboard bg-cover bg-no-repeat text-white shadow-md rounded-lg overflow-hidden flex justify-center text-center mb-6">
                    {/* Overlay hanya di gambar */}
                    <div className="absolute inset-0 bg-black opacity-60 z-0 rounded-lg" />

                    {/* Konten di atas overlay */}
                    <div className="relative z-10 px-4 py-[24px] md:py-[20px] flex flex-col items-center text-center">
                        <h2 className="text-[24px] md:text-[48px] font-semibold mb-3 max-w-[240px] md:max-w-[800px] leading-snug">
                            <span className="block md:hidden">
                                Revolusi <br /> Pembelajaran: <br />
                                Temukan Ilmu Baru melalui Platform Video Interaktif!
                            </span>
                            <span className="hidden md:inline">
                                Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
                            </span>
                        </h2>

                        <p className="text-white text-[14px] md:text-[16px] mb-6 max-w-[270px] md:max-w-[480px] lg:max-w-[920px] mx-auto leading-relaxed">
                            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, <br className="hidden md:inline" /> Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
                        </p>

                        <button className="bg-[#3ECF4C] hover:bg-green-700 text-sm text-white py-2 px-6 rounded-md transition duration-300">
                            Temukan Video Course untuk Dipelajari!
                        </button>
                    </div>
                </div>
                <h2 className="text-xl font-semibold mb-3">Kelola Video <br /> Pembelajaran Unggulan</h2>
                <p className="text-[#333333AD] text-sm md:text-base mb-4 md:mb-8">
                    Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                </p>
                <div className="bg-[#fdfbf5] mb-6 md:mb-8">
                    <div
                        className="category-buttons flex-nowrap flex justify-start gap-4 md:gap-6 px-4 py-3 md:py-4 text-xs md:text-sm font-medium overflow-x-auto scrollbar-hide"
                    >
                        <button className="text-[#f25c05] relative pb-1 px-1 md:px-0 whitespace-nowrap">
                            Semua Kelas
                            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#f25c05] rounded-full"></span>
                        </button>
                        <button className="text-gray-500 hover:text-black transition px-1 md:px-0 whitespace-nowrap">
                            Pemasaran
                        </button>
                        <button className="text-gray-500 hover:text-black transition px-1 md:px-0 whitespace-nowrap">
                            Desain
                        </button>
                        <button className="text-gray-500 hover:text-black transition px-1 md:px-0 whitespace-nowrap">
                            Pengembangan Diri
                        </button>
                        <button className="text-gray-500 hover:text-black transition px-1 md:px-0 whitespace-nowrap">
                            Bisnis
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {/* Contoh Kartu Video Course */}
                    
                    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full mx-auto">

                        <div className="p-4 flex flex-row md:flex-col gap-4 items-center md:items-start">

                            <img
                                src={randomImage}
                                alt="Course Thumbnail"
                                className="w-[82px] h-[82px] md:w-[344px] md:h-[193px] rounded-md object-cover"
                            />

                            <div>
                                <h3 className="font-semibold text-[16px] mb-1">Big 4 Auditor Financial Analyst</h3>

                                <div className="flex flex-row items-center gap-2 mb-2">
                                    <img
                                        src={randomAvatar}
                                        alt="Avatar"
                                        className="w-[40px] h-[40px] rounded-sm object-cover"
                                    />
                                    <div>
                                        <h2 className="text-[16px] font-semibold text-gray-800">Jenna Ortega</h2>
                                        <p className="text-[14px] text-gray-600 mb-3">Senior Accountant</p>
                                    </div>
                                </div>

                            </div>


                        </div>
                        {/* Image */}


                        {/* Content */}
                        <div className="px-4 mb-4 flex flex-row gap-4 justify-between items-center">

                            <RatingStars rating={2.5} reviewCount={86} className="mb-2" />
                            <div className="text-green-600 font-semibold text-lg">Rp 300K</div>
                        </div>
                    </div>

                    <CourseCard
                        courseImage={randomImage}
                        avatarImage={randomAvatar}
                        courseName="Big 4 Auditor Financial Analyst"
                        instructorName="Jenna Ortega"
                        instructorJob="Senior Accountant"
                        rating={2.5}
                        reviewCount={86}
                        price="Rp 300K"
                    />

                    {/* Tambahkan lebih banyak kartu video course sesuai kebutuhan */}
                </div>
            </div>


        </div>


    );
}

export default Dashboard;