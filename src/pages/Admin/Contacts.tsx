"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import * as exceljs from "exceljs";
import { saveAs } from "file-saver";

type Inquiry = {
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  education: string;
  nationality: string;
  text: string;
  createdAt?: string;
  updatedAt?: string;
};

const Inquiries = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("");
  const [loading, setLoading] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const email = "admin@zeevistaadvisors.com";
      const password = "zeevista@2023";
      const res = await axios.post(
        `https://zeevistaserver.vercel.app/contact/all`,
        {
          email,
          password,
        }
      );
      const { data } = res;
      console.log(data);
      setInquiries(
        data.sort((a: Inquiry, b: Inquiry) => {
          return (
            new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
          );
        })
      );
    } catch (error) {
      toast.error("Error fetching contacts");
    }
    setLoading(false);
  };

  const sortedInquiries = inquiries.sort((a, b) => {
    if (sortField === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortField === "email") {
      return a.email.localeCompare(b.email);
    } else if (sortField === "nationality") {
      return a.nationality.localeCompare(b.nationality);
    }
    return 0;
  });

  const filteredInquiries = sortedInquiries.filter(
    (inquiry) =>
      inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.education.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.nationality.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const download = async () => {
    const workbook = new exceljs.Workbook();
    const worksheet = workbook.addWorksheet("Contacts");
    worksheet.columns = [
      {
        header: "Name",
        key: "name",
        width: 30,
      },
      {
        header: "Email",
        key: "email",
        width: 30,
      },
      {
        header: "Phone",
        key: "phone",
        width: 30,
      },
      {
        header: "Job Title",
        key: "jobTitle",
        width: 50,
      },
      {
        header: "Education",
        key: "education",
        width: 30,
      },
      {
        header: "Nationality",
        key: "nationality",
        width: 30,
      },
      {
        header: "Text",
        key: "text",
        width: 100,
      },
    ];
    inquiries.forEach((inquiry) => {
      worksheet.addRow(inquiry);
    });
    worksheet.getRow(1).eachCell((c) => {
      c.font = { bold: true };
    });
    const buf = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buf]), "Inquiries.xlsx");
    toast.success("Inquiries exported successfully");
  };

  return (
    <div className="min-h-screen w-full md:w-4/5 p-4 sm:p-10">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="bg-white rounded shadow p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              Manage Inquiries
            </h1>
            <button
              onClick={download}
              className="mt-4 sm:mt-0 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Export to Excel
            </button>
          </div>

          <div className="bg-white rounded shadow">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                All Inquiries
              </h4>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 sm:mt-0">
                <div className="flex items-center gap-2 border border-gray-300 px-4 py-2.5 rounded text-gray-500 text-sm">
                  <h2>Total Inquiries:</h2>
                  <p>{filteredInquiries.length}</p>
                </div>
                <select
                  value={sortField}
                  onChange={(e) => setSortField(e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2.5 bg-white focus:ring-2 focus:ring-blue-500 appearance-none text-sm text-gray-500"
                >
                  <option value="" disabled>
                    Sort By
                  </option>
                  <option value="name">Name</option>
                  <option value="email">Email</option>
                  <option value="nationality">Nationality</option>
                </select>
                <input
                  type="text"
                  placeholder="Search inquiries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 text-gray-800 bg-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-gray-800">Name</th>
                    <th className="p-4 text-gray-800">Email</th>
                    <th className="p-4 text-gray-800">Phone</th>
                    <th className="p-4 text-gray-800">Job Title</th>
                    <th className="p-4 text-gray-800">Education</th>
                    <th className="p-4 text-gray-800">Nationality</th>
                    <th className="p-4 text-gray-800">Text</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInquiries.map((inquiry, index) => (
                    <tr key={index} className="border-t border-gray-200">
                      <td className="p-4 text-gray-800">{inquiry.name}</td>
                      <td className="p-4 text-gray-800">{inquiry.email}</td>
                      <td className="p-4 text-gray-800">{inquiry.phone}</td>
                      <td className="p-4 text-gray-800">{inquiry.jobTitle}</td>
                      <td className="p-4 text-gray-800">{inquiry.education}</td>
                      <td className="p-4 text-gray-800">
                        {inquiry.nationality}
                      </td>
                      <td className="p-4 text-gray-800">{inquiry.text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredInquiries.length === 0 && (
                <p className="p-4 text-center text-gray-800">
                  No inquiries found.
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Inquiries;
