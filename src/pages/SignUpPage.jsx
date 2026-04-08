import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
import { API } from '../api/api';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoles } from '../store/actions/clientActions';

const FormField = ({ label, error, children }) => (
  <div className="flex flex-col gap-1 w-full">
    <label className="text-sm font-bold text-[#252B42] ml-1">{label}</label>
    {children}
    {error && (
      <span className="text-red-500 text-xs font-medium ml-1 animate-pulse">
        {error.message}
      </span>
    )}
  </div>
);

const SignUpPage = () => {
  const dispatch = useDispatch();

  const roles = useSelector((state) => state.client.roles);
  
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid }
  } = useForm({
    mode: 'all',
    defaultValues: { role_id: '3' } 
  });

  const selectedRole = watch("role_id");

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  useEffect(() => {
    if (roles.length > 0) {
      setValue("role_id", "3");
    }
  }, [roles, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);

    let payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
    };

    if (data.role_id === "2") {
      payload.store = {
        name: data.storeName,
        phone: data.phone,
        tax_no: data.tax_no,
        bank_account: data.bank_account
      };
    }

    try {
      await API.post('/signup', payload);
      toast.success("You need to click link in email to activate your account!");
      history.goBack(); 
    } catch (error) {
      const serverError = error.response?.data;
      if (serverError?.err?.code === "SQLITE_CONSTRAINT") {
        toast.error("This email or name is already registered!");
      } else {
        toast.error(serverError?.error || "Registration failed! Please check your info.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-16 px-4 font-montserrat">
      <div className="max-w-[500px] mx-auto bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
        
        <div className="bg-white p-8 text-center border-b border-gray-50">
          <h2 className="text-3xl font-bold text-[#252B42] tracking-tight text-center">Become a Member</h2>
          <p className="text-[#737373] text-sm mt-2">Join us and start shopping with exclusive deals.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-5">
          
          <FormField label="Full Name *" error={errors.name}>
            <input
              {...register("name", {
                required: "Name is required",
                minLength: { value: 3, message: "Name must be at least 3 characters" }
              })}
              className={`w-full px-4 py-3 rounded-lg border bg-[#F9F9F9] transition-all outline-none focus:bg-white focus:ring-2 focus:ring-[#23A6F0]/20 ${errors.name ? 'border-red-400' : 'border-[#E6E6E6] focus:border-[#23A6F0]'}`}
              placeholder="Your Full Name"
            />
          </FormField>

          <FormField label="Email Address *" error={errors.email}>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
              })}
              className={`w-full px-4 py-3 rounded-lg border bg-[#F9F9F9] transition-all outline-none focus:bg-white focus:ring-2 focus:ring-[#23A6F0]/20 ${errors.email ? 'border-red-400' : 'border-[#E6E6E6] focus:border-[#23A6F0]'}`}
              placeholder="example@mail.com"
            />
          </FormField>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Password *" error={errors.password}>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/,
                    message: "The password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character."
                  }
                })}
                className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] bg-[#F9F9F9] focus:border-[#23A6F0] outline-none"
              />
            </FormField>

            <FormField label="Confirm Password *" error={errors.confirmPassword}>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Please confirm password",
                  validate: value => value === watch('password') || "Mismatch"
                })}
                className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] bg-[#F9F9F9] focus:border-[#23A6F0] outline-none"
              />
            </FormField>
          </div>

          <FormField label="Who are you?">
            <select 
              {...register("role_id")} 
              className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] bg-[#F9F9F9] focus:border-[#23A6F0] transition-all cursor-pointer outline-none"
            >
              {roles.map(role => (
                <option key={role.id} value={role.id.toString()}>{role.name}</option>
              ))}
            </select>
          </FormField>

          {selectedRole === "2" && (
            <div className="bg-[#F3F9FE] p-5 rounded-xl border border-[#23A6F0]/20 space-y-4">
              <h3 className="text-[#23A6F0] font-bold text-sm uppercase tracking-wider">Store Details</h3>
              
              <FormField label="Store Name *" error={errors.storeName}>
                <input
                  {...register("storeName", { required: "Store name is required",  minLength: { value: 3, message: "Store Name must be at least 3 characters" } })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#E6E6E6] outline-none focus:border-[#23A6F0]"
                />
              </FormField>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <FormField label="Phone *" error={errors.phone}>
                  <input
                    placeholder="05XXXXXXXXX"
                    {...register("phone", { 
                      required: "Required", 
                      pattern: { value: /^(05)([0-9]{9})$/, message: "Valid Türkiye phone required" } 
                    })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#E6E6E6] outline-none focus:border-[#23A6F0]"
                  />
                </FormField>

                <FormField label="Tax ID *" error={errors.tax_no}>
                  <input
                    placeholder="T1234V567890"
                    {...register("tax_no", { required: "Required", pattern: /^T\d{4}V\d{6}$/ })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#E6E6E6] outline-none focus:border-[#23A6F0]"
                  />
                </FormField>
              </div>

              <FormField label="IBAN *" error={errors.bank_account}>
                <input
                  placeholder="TR..."
                  {...register("bank_account", { required: "Required", pattern: /^[A-Z]{2}[0-9]{24}$/ })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#E6E6E6] outline-none focus:border-[#23A6F0]"
                />
              </FormField>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !isValid}
            className="w-full bg-[#23A6F0] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#1a85c2] active:scale-[0.95] transition-all disabled:bg-[#BDBDBD] shadow-lg shadow-[#23A6F0]/20 flex justify-center items-center gap-2"
          >
            {loading ? (
              <div className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : "Join Now"}
          </button>

          <div className="pt-4 text-center">
            <span className="text-[#737373] text-sm italic">Already a member?</span>{" "}
            <Link to="/login" className="text-[#23A6F0] font-bold text-sm hover:underline ml-1">
              Login to your account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;