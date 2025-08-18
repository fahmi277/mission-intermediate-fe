import React from 'react';

const CoursePromoBanner: React.FC = () => {
    return (
        <div className="relative rounded-xl shadow-lg overflow-hidden p-6 mb-6 w-full md:min-w-[350px] bg-white">
            {/* Header */}
            <h2 className="text-[18px] font-bold leading-snug mb-4">
                Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager
            </h2>

            {/* Pricing */}
            <div className="flex items-center gap-4 mb-4 flex-wrap justify-between">
                <div className="flex items-center gap-4">
                    <div className="text-[18px] font-bold text-green-400">Rp 250K</div>
                    <div className="line-through text-gray-300 text-[18px]">Rp 500K</div>
                </div>
                <div className="bg-green-500 text-white text-sm px-3 py-1 rounded-full font-semibold">Diskon 50%</div>
                <div className="text-sm text-blue-600 font-medium">Penawaran berlaku 2 hari lagi</div>
                <button
                    className="w-full bg-[#3ECF4C] hover:bg-green-600 text-white text-sm font-semibold py-2 px-6 rounded-xl transition duration-300"
                    onClick={() => window.location.href = '/checkout'} // Ganti sesuai rute
                >
                    Beli Sekarang
                </button>
            </div>

            {/* Features */}
            <div>
                <div className="text-sm font-medium text-black mb-2">Kelas ini Sudah Termasuk</div>
                <ul className="grid grid-cols-2 gap-2 text-sm mb-6">
                    <li>✅ Ujian Akhir</li>
                    <li>🎥 49 Video</li>
                    <li>📄 7 Dokumen</li>
                    <li>📜 Sertifikat</li>
                    <li>📝 Pretest</li>
                </ul>
            </div>

            <div >

                <div className="text-sm font-medium text-black">Bahasa Pengantar</div>
                <li>🌐 Bahasa Indonesia</li>
            </div>


            {/* CTA Button */}

        </div>
    );
};

export default CoursePromoBanner;