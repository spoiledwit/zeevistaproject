"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import * as exceljs from "exceljs";
import { saveAs } from "file-saver";
import { Search, Download, ChevronDown, Loader2 } from "lucide-react";
import { MdDelete } from "react-icons/md";

type ContactDetails = {
  name: string;
  email: string;
  phone: string;
  nationality: string;
  message: string;
};

type CostCalculator = {
  _id: string;
  businessActivity: string;
  businessName: string;
  contactDetails: ContactDetails;
  jurisdiction: string;
  officeSpace: string;
  owners: string;
  visa: string;
  createdAt?: string;
  updatedAt?: string;
};

const CostCalculators: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("");
  const [loading, setLoading] = useState(true);
  const [calculators, setCalculators] = useState<CostCalculator[]>([]);

  useEffect(() => {
    fetchCalculators();
  }, []);

  const fetchCalculators = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/costCalculator`
      );
      const { data } = res;
      setCalculators(
        data.sort((a: CostCalculator, b: CostCalculator) => {
          return (
            new Date(b.createdAt || "").getTime() -
            new Date(a.createdAt || "").getTime()
          );
        })
      );
    } catch (error) {
      toast.error("Error fetching cost calculators");
      console.log(error);
    }
    setLoading(false);
  };

  const deleteCalculator = async (id: string) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/costCalculator/${id}`
      );
      toast.success("Cost calculator deleted successfully");
      fetchCalculators();
    } catch (error) {
      toast.error("Error deleting cost calculator");
    }
  };

  const sortedCalculators = calculators.sort((a, b) => {
    if (sortField === "businessName") {
      return a.businessName.localeCompare(b.businessName);
    } else if (sortField === "jurisdiction") {
      return a.jurisdiction.localeCompare(b.jurisdiction);
    }
    return 0;
  });

  const filteredCalculators = sortedCalculators.filter(
    (calculator) =>
      calculator.businessName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      calculator.businessActivity
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      calculator.contactDetails.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      calculator.contactDetails.email
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      calculator.contactDetails.phone
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      calculator.contactDetails.nationality
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      calculator.jurisdiction
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      calculator.officeSpace.toLowerCase().includes(searchTerm.toLowerCase()) ||
      calculator.owners.toLowerCase().includes(searchTerm.toLowerCase()) ||
      calculator.visa.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const download = async () => {
    const workbook = new exceljs.Workbook();
    const worksheet = workbook.addWorksheet("Cost Calculators");
    worksheet.columns = [
      { header: "Business Name", key: "businessName", width: 30 },
      { header: "Business Activity", key: "businessActivity", width: 30 },
      { header: "Name", key: "name", width: 30 },
      { header: "Email", key: "email", width: 30 },
      { header: "Phone", key: "phone", width: 20 },
      { header: "Nationality", key: "nationality", width: 20 },
      { header: "Message", key: "message", width: 50 },
      { header: "Jurisdiction", key: "jurisdiction", width: 30 },
      { header: "Office Space", key: "officeSpace", width: 30 },
      { header: "Owners", key: "owners", width: 20 },
      { header: "Visa", key: "visa", width: 20 },
      { header: "Created At", key: "createdAt", width: 20 },
    ];
    calculators.forEach((calculator) => {
      worksheet.addRow({
        ...calculator,
        name: calculator.contactDetails.name,
        email: calculator.contactDetails.email,
        phone: calculator.contactDetails.phone,
        nationality: calculator.contactDetails.nationality,
        message: calculator.contactDetails.message,
        createdAt: calculator.createdAt
          ? new Date(calculator.createdAt).toLocaleString()
          : "N/A",
      });
    });
    worksheet.getRow(1).eachCell((c) => {
      c.font = { bold: true };
    });
    const buf = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buf]), "CostCalculators.xlsx");
    toast.success("Cost calculators exported successfully");
  };

  return (
    <div className="min-h-screen w-[80vw] bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">
              Manage Cost Calculators
            </h1>
            <button
              onClick={download}
              className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200 text-sm md:text-base"
            >
              <Download size={18} className="mr-2" />
              Export to Excel
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative flex-grow w-full md:w-auto">
              <input
                type="text"
                placeholder="Search cost calculators..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="bg-gray-100 px-4 py-2 rounded-md">
                <span className="text-sm font-medium text-gray-600">
                  Total:
                </span>
                <span className="ml-2 text-sm font-bold text-gray-900">
                  {filteredCalculators.length}
                </span>
              </div>
              <div className="relative flex-grow md:flex-grow-0">
                <select
                  value={sortField}
                  onChange={(e) => setSortField(e.target.value)}
                  className="w-full md:w-auto appearance-none bg-white border border-gray-300 rounded-md pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
                >
                  <option value="" disabled>
                    Sort By
                  </option>
                  <option value="businessName">Business Name</option>
                  <option value="jurisdiction">Jurisdiction</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-2.5 text-gray-400 pointer-events-none"
                  size={18}
                />
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="animate-spin text-gray-500" size={48} />
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-3 py-3 text-left text-sm font-semibold text-gray-600">
                      Business Name
                    </th>
                    <th className="px-3 py-3 text-left text-sm font-semibold text-gray-600">
                      Business Activity
                    </th>
                    <th className="px-3 py-3 text-left text-sm font-semibold text-gray-600">
                      Name
                    </th>
                    <th className="px-3 py-3 text-left text-sm font-semibold text-gray-600">
                      Email
                    </th>
                    <th className="px-3 py-3 text-left text-sm font-semibold text-gray-600">
                      Phone
                    </th>
                    <th className="px-3 py-3 text-left text-sm font-semibold text-gray-600">
                      Nationality
                    </th>
                    <th className="px-3 py-3 text-left text-sm font-semibold text-gray-600">
                      Message
                    </th>
                    <th className="px-3 py-3 text-left text-sm font-semibold text-gray-600">
                      Jurisdiction
                    </th>
                    <th className="px-3 py-3 text-left text-sm font-semibold text-gray-600">
                      Office Space
                    </th>
                    <th className="px-3 py-3 text-left text-sm font-semibold text-gray-600">
                      Owners
                    </th>
                    <th className="px-3 py-3 text-left text-sm font-semibold text-gray-600">
                      Visa
                    </th>
                    <th className="px-3 py-3 text-left text-sm font-semibold text-gray-600">
                      Created At
                    </th>
                    <th className="px-3 py-3 text-end text-sm font-semibold text-gray-600">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredCalculators.map((calculator, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                        {calculator.businessName}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-600">
                        {calculator.businessActivity}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-600">
                        {calculator.contactDetails.name}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-600">
                        {calculator.contactDetails.email}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-600">
                        {calculator.contactDetails.phone}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-600">
                        {calculator.contactDetails.nationality}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-600 max-w-xs truncate">
                        {calculator.contactDetails.message}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-600">
                        {calculator.jurisdiction}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-600">
                        {calculator.officeSpace}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-600">
                        {calculator.owners}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-600">
                        {calculator.visa}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-600">
                        {calculator.createdAt
                          ? new Date(calculator.createdAt).toLocaleString()
                          : "N/A"}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => deleteCalculator(calculator._id)}
                        >
                          <MdDelete size={24} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredCalculators.length === 0 && (
                <p className="text-center text-gray-500 py-8 text-base">
                  No cost calculators found.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CostCalculators;
