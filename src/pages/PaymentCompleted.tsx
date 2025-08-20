import React, { Component } from "react";
import HeaderDashboard from "../components/HeaderDashboard";

export class PaymentCompleted extends Component {
  render() {
    return (
      <div>
        <HeaderDashboard isPaymentPage={true} isPaymentCompleted={true} />
        <div className="bg-[#fffdf2] min-h-[calc(100vh-74px)] flex items-center justify-center px-4">
          <div className="w-full max-w-md h-[460px] flex flex-col items-center justify-center text-center rounded-lg bg-white shadow-md">
            <h1 className="font-bold text-xl mb-2">Pembayaran Berhasil!</h1>
            <p className="text-sm px-4">
              Silahkan cek email kamu untuk informasi lebih lanjut. Hubungi kami
              jika kamu tidak menerima email.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentCompleted;
