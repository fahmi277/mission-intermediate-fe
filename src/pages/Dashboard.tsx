import React from "react";

import { AlignJustify } from "lucide-react"
import HeaderDashboard from "../components/HeaderDashboard";




const Dashboard: React.FC = () => {
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
                    <div className="relative z-10 p-6">
                        <h2 className="text-xl font-semibold mb-3">Revolusi <br className="md:hidden" /> Pembelajaran: <br className="hidden md:block" /> Temukan <br className="hidden md:block" /> Ilmu Baru <br /> melalui Platform <br /> Video Interaktif!</h2>

                        <p className="text-white mb-6">Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>
                        <button className="bg-[#3ECF4C] hover:bg-green-700 text-[14px] text-white py-3 px-6 rounded-md transition duration-300">
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
            </div>


        </div>


    );
}

export default Dashboard;