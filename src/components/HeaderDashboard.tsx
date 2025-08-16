import { AlignJustify } from "lucide-react";



const HeaderDashboard: React.FC = () => {
    return (
        <div className="h-[74px] w-full bg-white flex items-center justify-between px-4">
            <img
                src="../src/assets/logo.png"
                alt="Videobelajar Logo"
                className="h-[42px] w-[152px] ml-[24px] md:h-[56px] md:w-[237px] md:ml-[120px]"
            />
            <AlignJustify className="w-6 h-6 text-gray-600 cursor-pointer" />
        </div>
    );
}

export default HeaderDashboard