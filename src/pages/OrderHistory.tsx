import InvoiceCard from "../components/molecules/InvoiceCard";

const OrderHistory = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-red-400">Order History</h1>
      <div className="py-4 px-4">
        <InvoiceCard
          invoiceNumber="HEL/VI/10062023"
          date="10 Juni 2023"
          time="14:17"
          status="Berhasil"
          courseTitle="Belajar Microsoft Office dan Google Workspace untuk Pemula"
          price={300000}
          total={300000}
        />
      </div>

      {/* Render order history items here */}
    </div>
  );
};

export default OrderHistory;
