import React, { Component } from "react";
import PaymentMethode from "../components/molecules/PaymentMethode";
import CoursePromoBanner from "../components/molecules/CoursePromoBanner";
import OrderSummaryCard from "../components/molecules/OrderSummary";
import FooterContent from "../components/molecules/FooterContent";
import HeaderDashboard from "../components/HeaderDashboard";
import { useNavigate } from "react-router-dom";

const MethodePaymentPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderDashboard />
            <div className="flex flex-col-reverse md:flex-row gap-6 w-full max-w-7xl mx-auto px-4 ">
            <div>
                <PaymentMethode />
                <OrderSummaryCard />
            </div>
            <div className="w-full md:max-w-[200px]">
                <CoursePromoBanner isBanner={false} />
            </div>
            </div>

            <FooterContent />
      </div>
    );
  };

export default MethodePaymentPage;
