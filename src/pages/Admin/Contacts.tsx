"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import * as exceljs from "exceljs";
import { saveAs } from "file-saver";
import { Search, Download, ChevronDown, Loader2, Eye } from "lucide-react";
import { MdDelete } from "react-icons/md";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Inquiry = {
  _id: string;
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

const Inquiries: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("");
  const [loading, setLoading] = useState(true);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/contact/all`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const { data } = res;
      setInquiries(
        data.sort((a: Inquiry, b: Inquiry) => {
          return (
            new Date(b.createdAt || "").getTime() -
            new Date(a.createdAt || "").getTime()
          );
        })
      );
    } catch (error) {
      toast.error("Error fetching inquiries");
    }
    setLoading(false);
  };

  const deleteInquiry = async (id: string) => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/contact/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success("Inquiry deleted successfully");
      fetchInquiries();
    } catch (error) {
      toast.error("Error deleting inquiry");
    }
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
    const worksheet = workbook.addWorksheet("Inquiries");
    worksheet.columns = [
      { header: "Name", key: "name", width: 30 },
      { header: "Email", key: "email", width: 30 },
      { header: "Phone", key: "phone", width: 20 },
      { header: "Job Title", key: "jobTitle", width: 30 },
      { header: "Education", key: "education", width: 30 },
      { header: "Nationality", key: "nationality", width: 20 },
      { header: "Text", key: "text", width: 50 },
      { header: "Created At", key: "createdAt", width: 20 },
    ];
    inquiries.forEach((inquiry) => {
      worksheet.addRow({
        ...inquiry,
        createdAt: inquiry.createdAt
          ? new Date(inquiry.createdAt).toLocaleString()
          : "N/A",
      });
    });
    worksheet.getRow(1).eachCell((c) => {
      c.font = { bold: true };
    });
    const buf = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buf]), "Inquiries.xlsx");
    toast.success("Inquiries exported successfully");
  };

  const shortenText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="min-h-screen w-[80vw] bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">
              Manage Inquiries
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
                placeholder="Search inquiries..."
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
                  {filteredInquiries.length}
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
                  <option value="name">Name</option>
                  <option value="email">Email</option>
                  <option value="nationality">Nationality</option>
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
                    <th className="px-3 py-2 text-left text font-semibold text-gray-600">Name</th>
                    <th className="px-3 py-2 text-left text font-semibold text-gray-600">Email</th>
                    <th className="px-3 py-2 text-left text font-semibold text-gray-600">Phone</th>
                    <th className="px-3 py-2 text-left text font-semibold text-gray-600">Job Title</th>
                    <th className="px-3 py-2 text-left text font-semibold text-gray-600">Education</th>
                    <th className="px-3 py-2 text-left text font-semibold text-gray-600">Nationality</th>
                    <th className="px-3 py-2 text-left text font-semibold text-gray-600">Message</th>
                    <th className="px-3 py-2 text-left text font-semibold text-gray-600">Created At</th>
                    <th className="px-3 py-2 text-center text font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredInquiries.map((inquiry, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-3 py-2 whitespace-nowrap text text-gray-900">{shortenText(inquiry.name, 25)}</td>
                      <td className="px-3 py-2 whitespace-nowrap text text-gray-600">{shortenText(inquiry.email, 35)}</td>
                      <td className="px-3 py-2 whitespace-nowrap text text-gray-600">{shortenText(inquiry.phone, 20)}</td>
                      <td className="px-3 py-2 whitespace-nowrap text text-gray-600">{shortenText(inquiry.jobTitle, 35)}</td>
                      <td className="px-3 py-2 whitespace-nowrap text text-gray-600">{shortenText(inquiry.education, 35)}</td>
                      <td className="px-3 py-2 whitespace-nowrap text text-gray-600">{shortenText(inquiry.nationality, 20)}</td>
                      <td className="px-3 py-2 whitespace-nowrap text text-gray-600">{shortenText(inquiry.text, 50)}</td>
                      <td className="px-3 py-2 whitespace-nowrap text text-gray-600">
                        {inquiry.createdAt ? new Date(inquiry.createdAt).toLocaleDateString() : "N/A"}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-center text font-medium">
                        <button
                          onClick={() => setSelectedInquiry(inquiry)}
                          className="text-blue-600 hover:text-blue-900 mr-2"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => deleteInquiry(inquiry._id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <MdDelete size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredInquiries.length === 0 && (
                <p className="text-center text-gray-500 py-8 text-base">
                  No inquiries found.
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      <Dialog open={!!selectedInquiry} onOpenChange={() => setSelectedInquiry(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Inquiry Details</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            {selectedInquiry && (
              <div className="space-y-2">
                <p><strong>Name:</strong> {selectedInquiry.name}</p>
                <p><strong>Email:</strong> {selectedInquiry.email}</p>
                <p><strong>Phone:</strong> {selectedInquiry.phone}</p>
                <p><strong>Job Title:</strong> {selectedInquiry.jobTitle}</p>
                <p><strong>Education:</strong> {selectedInquiry.education}</p>
                <p><strong>Nationality:</strong> {selectedInquiry.nationality}</p>
                <p><strong>Message:</strong> {selectedInquiry.text}</p>
                <p><strong>Created At:</strong> {selectedInquiry.createdAt ? new Date(selectedInquiry.createdAt).toLocaleString() : "N/A"}</p>
              </div>
            )}
          </DialogDescription>
          <Button onClick={() => setSelectedInquiry(null)}>Close</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Inquiries;