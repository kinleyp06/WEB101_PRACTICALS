'use client';
import { useState } from 'react';
import { useAuth } from '@/contexts/authContext';
import toast from 'react-hot-toast';

export function LoginForm({ onSuccess, onSwitchToRegister }) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success('Logged in successfully!');
      onSuccess?.();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Enter your password"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50"
      >
        {loading ? 'Logging in...' : 'Log In'}
      </button>
      <p className="text-center text-sm text-gray-500">
        Don't have an account?{' '}
        <button type="button" onClick={onSwitchToRegister} className="text-pink-500 font-medium hover:underline">
          Sign up
        </button>
      </p>
    </form>
  );
}

export function RegisterForm({ onSuccess, onSwitchToLogin }) {
  const { register } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await register(username, email, password);
      toast.success('Account created successfully!');
      onSuccess?.();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Choose a username"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Create a password"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50"
      >
        {loading ? 'Creating account...' : 'Sign Up'}
      </button>
      <p className="text-center text-sm text-gray-500">
        Already have an account?{' '}
        <button type="button" onClick={onSwitchToLogin} className="text-pink-500 font-medium hover:underline">
          Log in
        </button>
      </p>
    </form>
  );
}