import { useState, useEffect } from "react";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import CardDataStats from "../../components/Admin/Card";
import ChartOne from "../../components/Admin/Chart";
import axios from "axios";
import toast from "react-hot-toast";

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

const Dashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/blogs`
      );
      setBlogs(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      setLoading(false);
    }
  };

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
            new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
          );
        })
      );
    } catch (error) {
      toast.error("Error fetching contacts");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-10">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6">
            Dashboard
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            <CardDataStats
              title="Inquiries"
              total={inquiries.length.toString()}
            >
              <MdOutlineContactPhone size={20} />
            </CardDataStats>
            <CardDataStats title="Total Blogs" total={blogs.length.toString()}>
              <IoBookOutline size={20} />
            </CardDataStats>
          </div>
          <div className="mt-6">
            <ChartOne inquiries={inquiries} />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;