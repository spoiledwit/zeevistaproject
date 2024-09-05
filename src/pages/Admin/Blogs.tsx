import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { X, Edit, Trash2, Plus, Search, Loader2 } from "lucide-react";
import Modal from "react-modal";
import PhotosUploader from "../../components/Uploader";
import toast from "react-hot-toast";
import axios from "axios";
import Delete from "../../components/Delete";

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

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '800px',
    maxHeight: '90vh',
    overflow: 'auto',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1000,
  },
};

const Blogs: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [id, setId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const initialFormData = {
    author: "",
    authorImage: [] as any,
    title: "",
    titleImage: [] as any,
    description: "",
    content: "",
    timeToRead: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    filterBlogs();
  }, [searchTerm, blogs]);

  const getBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/blogs`
      );
      setBlogs(response.data);
      setFilteredBlogs(response.data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      toast.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  const filterBlogs = () => {
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setModalIsOpen(false);
    setEditMode(false);
    setId(null);
    setFormData(initialFormData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.title === "" ||
      formData.description === "" ||
      formData.content === "" ||
      formData.author === "" ||
      formData.timeToRead === "" ||
      formData.authorImage.length === 0 ||
      formData.titleImage.length === 0
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const url = editMode && id 
        ? `${import.meta.env.VITE_SERVER_URL}/blogs/${id}`
        : `${import.meta.env.VITE_SERVER_URL}/blogs`;
      
      const method = editMode && id ? axios.put : axios.post;

      await method(url, {
        author: formData.author,
        authorImage: formData.authorImage[0],
        title: formData.title,
        titleImage: formData.titleImage[0],
        description: formData.description,
        content: formData.content,
        timeToRead: formData.timeToRead,
      });

      toast.success(editMode ? "Blog updated successfully" : "Blog added successfully");
      closeModal();
      getBlogs();
    } catch (error) {
      console.error("Failed to save blog:", error);
      toast.error("Failed to save blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 p-6 md:p-10">
      <div className="mb-8 flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Manage Blogs</h1>
        <button
          onClick={openModal}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          <Plus size={20} className="mr-2" />
          Add a Blog
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="animate-spin text-blue-500" size={48} />
        </div>
      ) : filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <div key={blog._id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:shadow-lg hover:-translate-y-1">
              <img
                src={blog.titleImage}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h4>
                <p className="text-gray-600 mb-4 line-clamp-2">{blog.description}</p>
                <div className="flex items-center mb-4">
                  <img
                    src={blog.authorImage}
                    alt={blog.author}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{blog.author}</p>
                    <p className="text-sm text-gray-500">{blog.timeToRead} min read</p>
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => {
                      setFormData({
                        author: blog.author,
                        authorImage: [blog.authorImage],
                        title: blog.title,
                        titleImage: [blog.titleImage],
                        description: blog.description,
                        content: blog.content,
                        timeToRead: blog.timeToRead,
                      });
                      setEditMode(true);
                      setId(blog._id);
                      openModal();
                    }}
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors duration-200"
                  >
                    <Edit size={18} />
                  </button>
                  <Delete
                    api={`/blogs/${blog._id}`}
                    message="Blog deleted successfully"
                    fetch={getBlogs}
                    // className="p-2 text-red-600 hover:bg-red-100 rounded-full transition-colors duration-200"
                  >
                    <Trash2 size={18} />
                  </Delete>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg">No blogs found.</p>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={editMode ? "Edit Blog" : "Add Blog"}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {editMode ? "Edit Blog" : "Add Blog"}
          </h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
              Author
            </label>
            <input
              type="text"
              id="author"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="authorImage" className="block text-sm font-medium text-gray-700 mb-1">
              Author Image
            </label>
            <PhotosUploader
              addedPhotos={formData.authorImage}
              maxPhotos={1}
              onChange={(photos: any) => setFormData({ ...formData, authorImage: photos })}
            />
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="titleImage" className="block text-sm font-medium text-gray-700 mb-1">
              Title Image
            </label>
            <PhotosUploader
              addedPhotos={formData.titleImage}
              maxPhotos={1}
              onChange={(photos: any) => setFormData({ ...formData, titleImage: photos })}
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <Editor
              apiKey="g0zqs3p6v9zx7zhnrzgdphkxjcz3dvgt6kl7bxln19etxto6"
              init={{
                plugins:
                  "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
              }}
              value={formData.content}
              onEditorChange={(content) => setFormData({ ...formData, content })}
            />
          </div>
          <div>
            <label htmlFor="timeToRead" className="block text-sm font-medium text-gray-700 mb-1">
              Time to Read (in minutes)
            </label>
            <input
              type="number"
              id="timeToRead"
              value={formData.timeToRead}
              onChange={(e) => setFormData({ ...formData, timeToRead: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            {editMode ? "Update Blog" : "Add Blog"}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Blogs;