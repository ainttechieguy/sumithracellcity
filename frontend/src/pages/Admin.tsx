import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, Users, Wrench, Package, Settings, LogOut, CheckCircle, Search, Edit3 } from 'lucide-react';
import { businessData } from '../data/business';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('Overview');

  // Simple mock authentication for development
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials. Use admin123 for development.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-3xl p-8 w-full max-w-md shadow-2xl"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-secondary dark:text-white mb-2">{businessData.name}</h1>
            <p className="text-gray-500">Admin Dashboard Login</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-secondary dark:text-gray-300">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary text-secondary dark:text-white"
                placeholder="Enter password..."
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  const tabs = [
    { name: 'Overview', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'Repair Jobs', icon: <Wrench className="w-5 h-5" /> },
    { name: 'Customers', icon: <Users className="w-5 h-5" /> },
    { name: 'Services', icon: <Package className="w-5 h-5" /> },
    { name: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] flex flex-col md:flex-row text-secondary dark:text-white">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white dark:bg-[#111] border-r border-gray-200 dark:border-white/10 flex flex-col">
        <div className="p-6 border-b border-gray-200 dark:border-white/10">
          <h2 className="font-bold text-lg">{businessData.name}</h2>
          <span className="text-xs text-primary font-medium px-2 py-1 bg-primary/10 rounded">Admin Panel</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium text-sm ${
                activeTab === tab.name 
                  ? 'bg-primary text-white' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'
              }`}
            >
              {tab.icon} {tab.name}
            </button>
          ))}
        </nav>
        
        <div className="p-4 border-t border-gray-200 dark:border-white/10">
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors font-medium text-sm"
          >
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">{activeTab}</h1>
          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-blue-700">
            + New Job
          </button>
        </div>

        {activeTab === 'Overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Active Repairs', val: '12', color: 'text-blue-500' },
                { label: 'Completed Today', val: '5', color: 'text-green-500' },
                { label: 'Pending Approval', val: '3', color: 'text-orange-500' },
                { label: 'Total Revenue', val: '₹42,500', color: 'text-purple-500' }
              ].map((stat, i) => (
                <div key={i} className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 p-6 rounded-2xl shadow-sm">
                  <p className="text-gray-500 text-sm font-medium mb-2">{stat.label}</p>
                  <p className={`text-3xl font-bold ${stat.color}`}>{stat.val}</p>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-white/10 flex justify-between items-center">
                <h3 className="font-bold text-lg">Recent Repair Jobs</h3>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="text" placeholder="Search ID or Phone..." className="pl-9 pr-4 py-2 bg-gray-50 dark:bg-black border border-gray-200 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:border-primary" />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 dark:bg-white/5 text-gray-500 font-medium">
                    <tr>
                      <th className="px-6 py-4">Job ID</th>
                      <th className="px-6 py-4">Customer</th>
                      <th className="px-6 py-4">Device</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                    {[
                      { id: 'JOB-9482', name: 'Arun Kumar', device: 'iPhone 13 Pro', status: 'Repairing' },
                      { id: 'JOB-1029', name: 'Priya S', device: 'MacBook Air M1', status: 'Pending Approval' },
                      { id: 'TEST', name: 'Demo User', device: 'Samsung S22', status: 'Quality Testing' }
                    ].map((job, i) => (
                      <tr key={i} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 font-mono text-primary">{job.id}</td>
                        <td className="px-6 py-4">{job.name}</td>
                        <td className="px-6 py-4">{job.device}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-gray-100 dark:bg-white/10 rounded text-xs font-medium">{job.status}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-gray-400 hover:text-primary transition-colors">
                            <Edit3 className="w-4 h-4 inline" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab !== 'Overview' && (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <CheckCircle className="w-12 h-12 mb-4 text-gray-300 dark:text-white/20" />
            <p>Module '{activeTab}' is ready for backend integration.</p>
          </div>
        )}
      </div>
    </div>
  );
}
