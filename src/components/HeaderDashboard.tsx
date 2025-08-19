import { AlignJustify } from "lucide-react";
import MoreMenu from "./molecules/More";
import PaymentProgress from "./molecules/PaymentProgress";
import OrderCountdown from "./molecules/OrderCountDown";

type HeaderDashboardProps = {
    isPaymentPage?: boolean;
}



const HeaderDashboard: React.FC<HeaderDashboardProps> = ({ isPaymentPage = false }) => {
    return (
        <>



            <div className="h-[74px] w-full flex bg-white items-center justify-between px-4">
                <img
                    src="../src/assets/logo.png"
                    alt="Videobelajar Logo"
                    className="h-[42px] w-[152px] ml-[24px] md:h-[56px] md:w-[237px] md:ml-[120px]"
                />

                <MoreMenu />
            </div>


        </>
    );
}

export default HeaderDashboard