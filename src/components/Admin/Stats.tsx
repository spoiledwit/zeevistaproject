import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Stats = () => {
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({ queries: 0, serverStatus: 'Normal', uptime: '96%' });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const email = "admin@zeevistaadvisors.com";
      const password = "zeevista@2023";
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/contact/count`,
        { email, password }
      );
      const { data } = res;
      setStats({
        queries: data,
        serverStatus: "Normal",
        uptime: "96"
      })
    } catch (error) {
      console.error(error);
      toast.error("Error fetching Stats");
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      {loading ? (
        <div className="flex justify-center items-center">
            <p>Loading...</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">Total Number of Queries:</h2>
            <span className="text-md">{stats.queries}</span>
          </div>

          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">Server Status:</h2>
            <span className="text-md">{stats.serverStatus}</span>
          </div>

          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">Server Uptime:</h2>
            <span className="text-md">{stats.uptime}%</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stats;