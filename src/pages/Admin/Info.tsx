import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import toast from "react-hot-toast";

const Info: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchContactInfo = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/contactInfo`
      );
      setFormData({
        email: res.data.email,
        phones: res.data.phones,
        address: res.data.address,
        facebook: res.data.facebook,
        linkedin: res.data.linkedin,
        instagram: res.data.instagram,
        timings: res.data.timings,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContactInfo();
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    phones: [] as string[],
    address: "",
    facebook: "",
    linkedin: "",
    instagram: "",
    timings: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index?: number
  ) => {
    const { name, value } = e.target;

    if (name === "phones" && index !== undefined) {
      const updatedPhones = [...formData.phones];
      updatedPhones[index] = value;
      setFormData({ ...formData, phones: updatedPhones });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleUpdateClick = async () => {
    if (
      !formData.email ||
      !formData.phones[0] ||
      !formData.address ||
      !formData.facebook ||
      !formData.linkedin ||
      !formData.instagram ||
      !formData.timings
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    setLoading(true);
    try {
      await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/contactInfo`,
        formData
      );
      toast.success("Information updated successfully");
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      setLoading(false);
    }
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 p-6 md:p-10">
      <div className="bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
              isEditing ? "bg-white" : ""
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phones</label>
          {formData.phones.map((phone: any, index: any) => (
            <div className="flex items-center gap-3" key={index}>
              {index === 0 ? (
                <FaPhone className="text-gray-700" size={20} />
              ) : (
                <IoLogoWhatsapp className="text-gray-700" size={20} />
              )}
              <input
                type="text"
                name="phones"
                value={phone}
                onChange={(e) => handleInputChange(e, index)}
                disabled={!isEditing}
                className={`mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  isEditing ? "bg-white" : ""
                }`}
              />
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
              isEditing ? "bg-white" : ""
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Facebook</label>
          <input
            type="text"
            name="facebook"
            value={formData.facebook}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
              isEditing ? "bg-white" : ""
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">LinkedIn</label>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
              isEditing ? "bg-white" : ""
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Instagram</label>
          <input
            type="text"
            name="instagram"
            value={formData.instagram}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
              isEditing ? "bg-white" : ""
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Timings</label>
          <input
            type="text"
            name="timings"
            value={formData.timings}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
              isEditing ? "bg-white" : ""
            }`}
          />
        </div>

        {!isEditing ? (
          <button
            onClick={handleEditClick}
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-black focus:outline-none"
          >
            Edit
          </button>
        ) : (
          <div className="flex space-x-4">
            <button
              onClick={handleCancelClick}
              className="w-full bg-gray-300 text-black py-2 px-4 rounded-md hover:text-white hover:bg-gray-400 focus:outline-none"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdateClick}
              disabled={loading}
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-black focus:outline-none"
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Info;
