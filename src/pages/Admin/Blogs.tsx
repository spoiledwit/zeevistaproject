import { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
import PhotosUploader from "../../components/Uploader";
import toast from "react-hot-toast";
import axios from "axios";
import Delete from "../../components/Delete";
import { FaEdit } from "react-icons/fa";

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
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "650px",
    maxHeight: "90vh",
    backgroundColor: "#ffffff",
    color: "#000000",
    border: "1px solid #ccc",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
};

const Blogs = () => {
  const email = "admin@zeevistaadvisors.com";
  const password = "zeevista@2023";
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
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      setLoading(false);
    }
  };

  const filterBlogs = () => {
    if (searchTerm === "") {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditMode(false);
    setId(null);
    setFormData(initialFormData);
  };

  const handleSubmit = async (e: any) => {
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
      if (editMode && id !== null) {
        await axios.put(`${import.meta.env.VITE_SERVER_URL}/blogs/${id}`, {
          author: formData.author,
          authorImage: formData.authorImage[0],
          title: formData.title,
          titleImage: formData.titleImage[0],
          description: formData.description,
          content: formData.content,
          timeToRead: formData.timeToRead,
          email: email,
          password: password,
        });
        toast.success("Blog updated successfully");
      } else {
        await axios.post(`${import.meta.env.VITE_SERVER_URL}/blogs`, {
          author: formData.author,
          authorImage: formData.authorImage[0],
          title: formData.title,
          titleImage: formData.titleImage[0],
          description: formData.description,
          content: formData.content,
          timeToRead: formData.timeToRead,
          email: email,
          password: password,
        });
        toast.success("Blog added successfully");
      }

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
    <div className="min-h-screen w-4/5 p-10">
      <div className="bg-white rounded shadow p-6 flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Manage Blogs</h1>
        <button
          onClick={openModal}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add a Blog
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded border border-gray-300 bg-gray-100 px-4 py-2 text-black focus:border-blue-500 focus-visible:outline-none"
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <div
              key={blog._id}
              className="rounded-md border border-gray-300 bg-white p-4 shadow-md"
            >
              <img
                src={blog.titleImage}
                alt={blog.title}
                className="h-40 w-full rounded-md object-cover"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-800">
                {blog.title}
              </h4>
              <p className="mt-2 text-sm text-gray-600">{blog.description}</p>
              <div className="mt-4 flex items-center gap-4">
                <img
                  src={blog.authorImage}
                  alt={blog.author}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {blog.author}
                  </p>
                  <p className="text-gray-600 text-xs">
                    {blog.timeToRead} min read
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-end gap-2">
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
                  className="text-gray-800"
                >
                  <FaEdit size={18} />
                </button>
                <Delete
                  api={`/blogs/${blog._id}`}
                  message="Blog deleted successfully"
                  fetch={getBlogs}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="w-full px-4 py-6 text-center text-gray-800">
          No blogs found.
        </p>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={editMode ? "Edit Blog" : "Add Blog"}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <h4 className="text-xl font-semibold text-black">
            {editMode ? "Edit Blog" : "Add Blog"}
          </h4>
          <button
            onClick={closeModal}
            className="text-black hover:text-gray-600"
          >
            <IoMdClose size={18} />
          </button>
        </div>
        <form className="px-4 py-4">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="author"
                className="block text-sm font-medium text-black"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
                className="w-full rounded border border-gray-300 bg-gray-100 px-2 py-2 text-black focus:border-blue-500 focus-visible:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="authorImage"
                className="block text-sm font-medium text-black"
              >
                Author Image
              </label>
              <PhotosUploader
                addedPhotos={formData.authorImage}
                maxPhotos={1}
                onChange={(photos: any) =>
                  setFormData({ ...formData, authorImage: photos })
                }
              />
            </div>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-black"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full rounded border border-gray-300 bg-gray-100 px-2 py-2 text-black focus:border-blue-500 focus-visible:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="titleImage"
                className="block text-sm font-medium text-black"
              >
                Title Image
              </label>
              <PhotosUploader
                addedPhotos={formData.titleImage}
                maxPhotos={1}
                onChange={(photos: any) =>
                  setFormData({ ...formData, titleImage: photos })
                }
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-black"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full rounded border border-gray-300 bg-gray-100 px-2 py-2 text-black focus:border-blue-500 focus-visible:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-black"
              >
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
                onEditorChange={(content) =>
                  setFormData({ ...formData, content })
                }
              />
            </div>
            <div>
              <label
                htmlFor="timeToRead"
                className="block text-sm font-medium text-black"
              >
                Time to Read
              </label>
              <input
                type="text"
                id="timeToRead"
                name="timeToRead"
                value={formData.timeToRead}
                onChange={(e) =>
                  setFormData({ ...formData, timeToRead: e.target.value })
                }
                className="w-full rounded border border-gray-300 bg-gray-100 px-2 py-2 text-black focus:border-blue-500 focus-visible:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-4 w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
          >
            {editMode ? "Update Blog" : "Add Blog"}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Blogs;
