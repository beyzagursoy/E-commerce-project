import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { API } from '../api/api';
import { toast } from 'react-toastify';

const SignUpPage = () => {
  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({
    mode: 'all',
    defaultValues: { role_id: '3' }
  });
  
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const selectedRole = watch("role_id");

  useEffect(() => {
    API.get('/roles')
      .then(res => setRoles(res.data))
      .catch(err => console.error("Roles fetch error:", err));
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    
    const payload = {
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
      toast.error(error.response?.data?.message || "Registration failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-8 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        {/* Name */}
        <div>
          <label className="block text-sm font-bold">Name *</label>
          <input 
            {...register("name", { required: "Name is required", minLength: { value: 3, message: "Min 3 chars" } })}
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-bold">Email *</label>
          <input 
            type="email"
            {...register("email", { 
              required: "Email is required", 
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } 
            })}
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-bold">Password *</label>
          <input 
            type="password"
            {...register("password", { 
              required: true,
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Must be 8+ chars, include upper, lower, number and special char"
              }
            })}
            className="w-full p-2 border rounded"
          />
          {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-bold">Confirm Password *</label>
          <input 
            type="password"
            {...register("confirmPassword", { 
              validate: value => value === watch('password') || "Passwords do not match" 
            })}
            className="w-full p-2 border rounded"
          />
          {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
        </div>

        {/* Role Selection */}
        <div>
          <label className="block text-sm font-bold">Role</label>
          <select {...register("role_id")} className="w-full p-2 border rounded">
            {roles.map(role => (
              <option key={role.id} value={role.id}>{role.name}</option>
            ))}
          </select>
        </div>

        {/* Store Specific Fields (Dynamic) */}
        {selectedRole === "2" && (
          <div className="space-y-4 p-4 bg-gray-50 rounded border animate-fade-in">
            <div>
              <label className="block text-sm font-bold">Store Name</label>
              <input {...register("storeName", { required: true, minLength: 3 })} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-bold">Store Phone</label>
              <input 
                placeholder="05XXXXXXXXX"
                {...register("phone", { required: true, pattern: /^(05)([0-9]{9})$/ })} 
                className="w-full p-2 border rounded" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold">Tax ID (TXXXXVXXXXXX)</label>
              <input 
                {...register("tax_no", { required: true, pattern: /^T\d{4}V\d{6}$/ })} 
                className="w-full p-2 border rounded" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold">Store Bank (IBAN)</label>
              <input 
                {...register("bank_account", { required: true, pattern: /^[A-Z]{2}[0-9]{24}$/ })} 
                className="w-full p-2 border rounded" 
              />
            </div>
          </div>
        )}

        <button 
          type="submit" 
          disabled={loading || !isValid}
          className="w-full bg-blue-500 text-white p-3 rounded font-bold hover:bg-blue-600 disabled:bg-gray-400 transition-all flex justify-center items-center"
        >
          {loading ? <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div> : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;