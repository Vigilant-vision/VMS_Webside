import React, { useState, useEffect } from 'react'
import { FiCamera, FiLock, FiMail, FiEyeOff, FiEye, FiLoader, FiChevronRight, FiUser } from 'react-icons/fi'
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/Action/AuthActions";
import { useNavigate } from 'react-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formFilled, setFormFilled] = useState(false)

  const navigate = useNavigate(); // Initialize the navigate hook
  const dispatch = useDispatch(); // Initialize the Redux dispatch


  useEffect(() => {
    const interval = setInterval(() => {
      const hue = Math.floor(Math.random() * 360)
      document.documentElement.style.setProperty('--random-hue', `${hue}deg`)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setFormFilled(email !== '' && password !== '')
  }, [email, password])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    const apiUrl = 'https://vigilantvisionsystem.com/ec2/api/v1/oversees/login';
    
    // Send the email and password as query parameters
    const params = new URLSearchParams({
      email: email,
      password: password
    });
  
    try {
      const response = await axios.get(apiUrl, { params });
  
      setIsLoading(false);
  
      if (response.data?.success && response.data?.data) {
        console.log('Token:', response.data.data);
        dispatch(setToken(response.data.data));
        navigate('/');
      } else {
        console.error('Login failed:', response.data);
      }
    } catch (error) {
      setIsLoading(false);
      console.error('An error occurred:', error.response?.data || error.message);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-700/20 via-blue-800/20 to-gray-900/20 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwMjAiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iIzAwMDAwMDQwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20"></div>
      </div>
      <div className="max-w-md w-full space-y-8 relative">
        <div className="absolute inset-0 bg-gray-800/50 rounded-2xl shadow-2xl transform transition-all duration-700 ease-out hover:scale-105 hover:rotate-1 opacity-75 blur-sm"></div>
        <div className="bg-gray-800/80 p-10 rounded-2xl shadow-2xl relative z-10 backdrop-blur-sm">
          <div className="text-center relative">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-50 blur-xl animate-pulse"></div>
                <div className="relative bg-gray-900 rounded-full p-3 shadow-inner">
                  <FiCamera className="h-12 w-12 text-blue-400" />
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-2">
              Welcome to CameraAI
            </h2>
            <p className="text-sm text-blue-300 mb-6">
              Sign in to access your smart camera dashboard
            </p>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="relative group">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <FiMail className="absolute top-3 left-3 h-5 w-5 text-blue-300 group-focus-within:text-blue-500 transition-colors duration-200" />
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:z-10 sm:text-sm pl-10 transition-all duration-300"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-blue-500 group-focus-within:opacity-100 opacity-0 transition-opacity duration-200">
                    <FiChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="relative group">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <FiLock className="absolute top-3 left-3 h-5 w-5 text-blue-300 group-focus-within:text-blue-500 transition-colors duration-200" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:z-10 sm:text-sm pl-10 transition-all duration-300"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FiEyeOff className="h-5 w-5 text-blue-300 hover:text-blue-200 transition-colors duration-200" />
                  ) : (
                    <FiEye className="h-5 w-5 text-blue-300 hover:text-blue-200 transition-colors duration-200" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-blue-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading || !formFilled}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                {isLoading ? (
                  <>
                    <FiLoader className="absolute left-0 inset-y-0 flex items-center pl-3 h-5 w-5 text-blue-300 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <FiUser className="h-5 w-5 text-blue-300 group-hover:text-blue-100 transition-colors duration-300" />
                    </span>
                    Sign in
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
