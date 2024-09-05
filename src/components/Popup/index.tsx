"use client"

import { useState } from 'react';
import { X, User, Mail, Phone, Briefcase, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  service: z.string().min(2, { message: "Service must be at least 2 characters." }),
});

const ProfessionalPopup = ({ isOpen, onClose }: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/popup`, data);
      toast.success('Form submitted successfully');
      onClose();
      reset();
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again later');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg p-8 shadow-2xl w-11/12 md:w-2/3 lg:w-1/2 max-w-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              onClick={onClose}
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl font-bold mb-6 text-[#E9B306]">Contact Us</h2>
            <p className="text-gray-600 mb-6">We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute top-3 left-3 text-gray-400" size={18} />
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[#E9B306] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute top-3 left-3 text-gray-400" size={18} />
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[#E9B306] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <div className="relative">
                  <Phone className="absolute top-3 left-3 text-gray-400" size={18} />
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[#E9B306] focus:border-transparent"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service
                </label>
                <div className="relative">
                  <Briefcase className="absolute top-3 left-3 text-gray-400" size={18} />
                  <input
                    {...register("service")}
                    type="text"
                    id="service"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[#E9B306] focus:border-transparent"
                    placeholder="Service you're interested in"
                  />
                </div>
                {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#E9B306] hover:bg-[#E9B306]/80 text-white px-6 py-2 rounded-lg font-semibold transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#E9B306] focus:ring-opacity-50 flex items-center"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfessionalPopup;