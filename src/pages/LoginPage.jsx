import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { loginUser } from '../store/actions/clientActions';

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "all",
    defaultValues: { rememberMe: false }
  });
  
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    const { rememberMe, ...credentials } = data;
    dispatch(loginUser(credentials, history, rememberMe));
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#FAFAFA] px-4 font-montserrat">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-3xl font-bold text-[#252B42] text-center mb-2">Login</h2>
        <p className="text-[#737373] text-sm text-center mb-8">Enter your details to access your account</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Alanı */}
          <div className="space-y-1">
            <label className="text-sm font-bold text-[#252B42]">Email Address</label>
            <input
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Please enter a valid email" }
              })}
              className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${errors.email ? 'border-red-500' : 'border-[#E6E6E6] focus:border-[#23A6F0]'}`}
              placeholder="example@mail.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Şifre Alanı */}
          <div className="space-y-1">
            <label className="text-sm font-bold text-[#252B42]">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${errors.password ? 'border-red-500' : 'border-[#E6E6E6] focus:border-[#23A6F0]'}`}
              placeholder="******"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="rememberMe" 
              {...register("rememberMe")}
              className="w-4 h-4 rounded border-gray-300 text-[#23A6F0] focus:ring-[#23A6F0]"
            />
            <label htmlFor="rememberMe" className="text-sm font-medium text-[#737373] cursor-pointer">
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#23A6F0] text-white py-4 rounded-lg font-bold hover:bg-[#1a85c2] transition-colors shadow-lg shadow-blue-200"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#737373]">
            Don't have an account? 
            <Link to="/signup" className="text-[#23A6F0] font-bold ml-1 hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;