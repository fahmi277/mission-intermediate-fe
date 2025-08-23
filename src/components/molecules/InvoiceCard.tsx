// components/InvoiceCard.tsx
import React from "react";
import courseImage from "../../data/courseImage";

type InvoiceProps = {
  invoiceNumber: string;
  date: string;
  time: string;
  status: "Berhasil" | "Gagal" | "Pending";
  courseTitle: string;
  price: number;
  total: number;
};

const statusColor = {
  Berhasil: "text-green-600",
  Gagal: "text-red-600",
  Pending: "text-yellow-600",
};

const InvoiceCard: React.FC<InvoiceProps> = ({
  invoiceNumber,
  date,
  time,
  status,
  courseTitle,
  price,
  total,
}) => {
  return (
    <div className=" mx-auto bg-white shadow-md rounded-lg border border-gray-200 p-6 text-sm font-sans">
      <div className="mb-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-6">
            <h2 className="font-semibold text-gray-800">
              No. Invoice: {invoiceNumber}
            </h2>
            <h2 className="font-semibold text-gray-800">
              Waktu Pembayaran: {time}
            </h2>
          </div>
          <span
            className={`${statusColor[status]} rounded-md bg-green-400 p-2 text-white`}
          >
            {status}
          </span>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="mb-4 border-t border-gray-200 pt-4 flex flex-row gap-3 w-[244px] md:basis-2/3">
          {/* <p className="text-gray-700 font-medium">Kursus:</p> */}
          <img
            className="w-[52px] h-[52px] rounded-md"
            src={courseImage[0]}
            alt={courseTitle}
          />
          <p className="text-gray-800 text-xl font-bold">{courseTitle}</p>
        </div>
        {/* untuk harga */}
        <div className="flex flex-col md:basis-1/3 justify-center items-end">
          <span>Harga</span>
          <span>Rp {price.toLocaleString("id-ID")}</span>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between text-gray-700">
          <span>Harga</span>
          <span>Rp {price.toLocaleString("id-ID")}</span>
        </div>
        <div className="flex justify-between font-semibold text-gray-900 mt-2">
          <span>Total Pembayaran</span>
          <span>Rp {total.toLocaleString("id-ID")}</span>
        </div>
      </div>
    </div>
  );
};

export default InvoiceCard;
