"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";

interface Props {
  api: string;
  children?: React.ReactNode;
  fetch?: () => void;
  message?: string;
}

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
    padding: "20px",
    borderRadius: "8px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
};

const Delete = ({ api, children, fetch, message }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(import.meta.env.VITE_SERVER_URL + api);
      toast.success(message || "Deleted successfully");
      fetch && fetch();
      closeModal();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete");
    }
  };

  return (
    <>
      {children ? (
        <button
          onClick={openModal}
          className="text-red-600 hover:text-red-800 transition-colors"
        >
          {children}
        </button>
      ) : (
        <button
          onClick={openModal}
          className="text-gray-800 hover:text-red-600"
        >
          <FaTrashAlt size={16} />
        </button>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Delete Modal"
      >
        <div className="space-y-6 p-4 sm:p-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Confirm Deletion
          </h2>
          <p className="text-base text-gray-600">
            Are you sure you want to delete this item? This action cannot be
            undone.
          </p>
          <div className="mt-8 flex justify-end gap-3">
            <button
              onClick={closeModal}
              className="rounded-md bg-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors duration-200 ease-in-out hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors duration-200 ease-in-out hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Delete;
