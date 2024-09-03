import { useEffect, useState } from "react";
import london from "../../assets/consultancy.jpeg";
import axios from "axios";
import { Link } from "react-router-dom";

interface Props {
  setProgress: (progress: number) => void;
}

type Blog = {
  _id: string;
  author: string;
  authorImage: string;
  title: string;
  titleImage: string;
  description: string;
  content: string;
  timeToRead: string;
};

const Blogs = ({ setProgress }: Props) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setProgress(70);
    setTimeout(() => {
      setProgress(100);
    }, 300);
  }, []);

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

  return (
    <>
      <div className="flex w-full h-[60vh] md:rounded-none rounded-b-[40px] overflow-hidden md:h-[100vh] justify-center items-center relative">
        <img
          src={london}
          alt="immigration consultants"
          className="object-cover w-full h-full absolute z-0"
        />
        <div className="absolute w-full h-full bg-black opacity-50 z-10"></div>
        <span className="absolute w-full mt-12 h-full flex px-4 md:px-20 xl:px-40 z-20">
          <span className="flex flex-col mt-20 justify-center items-start">
            <span className="text-white text-3xl md:text-5xl mb-4 leading-snug font-play">
              Blogs
            </span>
            <span className="text-white text-lg md:text-xl max-w-[1000px] mb-12">
              Stay updated with the latest news and updates from ZeeVista
              Advisors
            </span>
          </span>
        </span>
      </div>

      <div className="md:px-20 px-8 xl:px-40 py-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <span className="text-lg">Loading...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link
                to={`/blogs/${blog._id}`}
                key={blog._id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={blog.titleImage}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                  <p className="text-gray-700 mb-4">{blog.description}</p>
                  <div className="flex items-center">
                    <img
                      src={blog.authorImage}
                      alt={blog.author}
                      className="w-10 h-10 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <p className="text-gray-900 font-semibold">
                        {blog.author}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {blog.timeToRead} min read
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Blogs;
