import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useUserStore } from "@/store/user";
import { Loader2, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const setUser = useUserStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/user/login`, data);
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      setUser(user);
      toast.success("Logged in successfully", {
        icon: '🎉',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Invalid credentials", {
        icon: '❌',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Welcome Back</h2>
            <p className="mt-2 text-sm text-gray-600">Please sign in to your account</p>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <input
                {...register("email")}
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pl-10"
                id="email"
                type="email"
                placeholder="you@example.com"
              />
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            </div>
            {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email.message}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                {...register("password")}
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pl-10 pr-10"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="******************"
              />
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-400 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs italic mt-1">{errors.password.message}</p>}
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
           
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-black hover:bg-black/80 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline flex items-center justify-center w-full transition duration-150 ease-in-out"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>
        <p className="text-center text-gray-200 text-xs">
          &copy;2024 ZeeVista Advisors. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Login;