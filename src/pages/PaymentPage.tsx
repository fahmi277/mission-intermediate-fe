import React, { Component } from "react";
import HeaderDashboard from "../components/HeaderDashboard";
import PaymentProgress from "../components/molecules/PaymentProgress";
import CourseCard from "../components/molecules/CourseCard";
import BannerCard from "../components/molecules/BannerCard";
import CoursePromoBanner from "../components/molecules/CoursePromoBanner";

export default class PaymentPage extends Component {
  render() {
    return (
      <div>
        <HeaderDashboard />

        <div className=" max-w-4xl mx-auto">
          <div className="bg-[#fae8d4]">
            <div className="flex flex-row items-center justify-between p-3">
              <p className="text-gray px-2">Selesaikan pesanan dalam</p>
              <button className="bg-[#f54720] text-white px-2 py-1 rounded-md">
                00
              </button>
              <p>:</p>
              <button className="bg-[#f54720] text-white px-2 py-1 rounded-md">
                00
              </button>
              <p>:</p>
              <button className="bg-[#f54720] text-white px-2 py-1 rounded-md">
                00
              </button>
            </div>
          </div>
        </div>
        <div className="px-4">

          <PaymentProgress currentStep="pay" />
          <CoursePromoBanner isBanner={true} />
        </div>
      </div>
    );
  }
}
