import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import dayjs from "dayjs";

// Define the type for inquiry data
interface Inquiry {
  createdAt: string; // Assuming the date is stored as a string
}

interface ChartOneProps {
  inquiries: Inquiry[];
}

const options: ApexOptions = {
  legend: {
    show: false,
  },
  colors: ["#75924B"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 2,
    curve: "straight",
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#012D19"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    fillOpacity: 1,
    hover: {
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    min: 0,
    max: 100,
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 300, // For mobile or smaller screens
        },
      },
    },
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 350, // For tablet or medium screens
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350, // For desktop or large screens
        },
      },
    },
    {
      breakpoint: 1920,
      options: {
        chart: {
          height: 350, // For large desktop screens
        },
      },
    },
  ],
};

const getMonthlyInquiries = (inquiries: Inquiry[], year: number): number[] => {
  const monthlyInquiries = Array(12).fill(0);

  inquiries.forEach((inquiry) => {
    const inquiryYear = dayjs(inquiry.createdAt).year();
    if (inquiryYear === year) {
      const monthIndex = dayjs(inquiry.createdAt).month(); // January is 0, December is 11
      monthlyInquiries[monthIndex] += 1; // Count each inquiry
    }
  });

  return monthlyInquiries;
};

const ChartOne: React.FC<ChartOneProps> = ({ inquiries }) => {
  const currentYear = dayjs().year();
  const [selectedYear, setSelectedYear] = useState<number>(currentYear);

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(parseInt(e.target.value, 10));
  };

  const monthlyInquiries = getMonthlyInquiries(inquiries, selectedYear);

  const series = [
    {
      name: "Total Inquiries",
      data: monthlyInquiries,
    },
  ];

  const chartOptions: ApexOptions = {
    ...options,
    yaxis: {
      ...options.yaxis,
      max: Math.max(...monthlyInquiries) + 10, // Adjust max value dynamically
    },
  };

  const years = Array.from(
    new Set(inquiries.map((inquiry) => dayjs(inquiry.createdAt).year()))
  ).sort((a, b) => b - a); // Sort years in descending order

  return (
    <div className="mt-5 rounded-sm border border-gray-300 bg-white px-4 sm:px-5 pb-5 pt-5 sm:pt-8 shadow-lg">
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
        <div>
          <h3 className="text-lg font-semibold text-black">
            Inquiries Overview
          </h3>
          <p className="text-sm text-gray-500">
            Total inquiries received this year
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <span className="mr-2 mt-1 flex h-4 w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-2.5 rounded-full bg-primary"></span>
            </span>
            <p className="font-semibold text-primary">Total Inquiries</p>
          </div>
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="appearance-none rounded-md border border-gray-300 bg-gray-100 px-3 py-1 text-black focus:border-primary focus-visible:outline-none"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <div id="chartOne" className="-ml-2 sm:ml-0">
          <ReactApexChart
            options={chartOptions}
            series={series}
            type="area"
            height={350}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
