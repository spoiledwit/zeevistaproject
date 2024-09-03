import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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

const BlogDetails = ({ setProgress }: Props) => {
  const { id } = useParams<{ id: string }>(); // Extract the blog ID from the URL
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setProgress(70);
    setTimeout(() => {
      setProgress(100);
    }, 300);
  }, []);

  useEffect(() => {
    getBlogDetails();
  }, [id]);

  const getBlogDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/blogs/${id}`
      );
      setBlog(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch blog details:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="text-lg text-gray-600">Loading...</span>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="text-lg text-gray-600">Blog not found</span>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh] flex justify-center items-center overflow-hidden rounded-b-[40px]">
        <img
          src={blog.titleImage}
          alt={blog.title}
          className="absolute inset-0 object-cover w-full h-full z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 md:px-20 xl:px-40">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            {blog.title}
          </h1>
          <p className="text-white text-lg md:text-2xl mb-4">
            By {blog.author} • {blog.timeToRead} min read
          </p>
          <img
            src={blog.authorImage}
            alt={blog.author}
            className="w-16 h-16 rounded-full object-cover mx-auto mt-4 border-4 border-white"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 md:px-20 xl:px-60 py-12">
        <div className="prose prose-lg max-w-full bg-white p-8 rounded-lg shadow-lg">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
