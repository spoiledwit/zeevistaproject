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

  useEffect(() => {
    fetchInquiries();
  }, []);

  return (
    <div className="w-4/5 p-10">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2 className="text-4xl font-semibold mb-6">Dashboard</h2>
          <div className="grid grid-cols-2 gap-5">
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
          <ChartOne inquiries={inquiries} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
