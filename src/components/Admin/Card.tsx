import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  total: string;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  children,
}) => {
  return (
    <div className="rounded-sm border border-[#E2E8F0] bg-white px-8 py-6 shadow-lg w-full">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0F2F8]">
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-2xl font-bold text-black">{total}</h4>
          <span className="font-light">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
