import React from "react";

type OrderCountdownProps = {
  hours: string;
  minutes: string;
  seconds: string;
};

const OrderCountdown: React.FC<OrderCountdownProps> = ({
  hours,
  minutes,
  seconds,
}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-[#fae8d4]">
        <div className="flex items-center justify-between p-3">
          <p className="text-gray-700 px-2">Selesaikan pesanan dalam</p>
          <div className="flex items-center gap-2">
            <TimeBlock value={hours} />
            <Separator />
            <TimeBlock value={minutes} />
            <Separator />
            <TimeBlock value={seconds} />
          </div>
        </div>
      </div>
    </div>
  );
};

const TimeBlock: React.FC<{ value: string }> = ({ value }) => (
  <button className="bg-[#f54720] text-white px-2 py-1 rounded-md min-w-[32px] text-center">
    {value}
  </button>
);

const Separator = () => <p className="text-gray-700">:</p>;

export default OrderCountdown;