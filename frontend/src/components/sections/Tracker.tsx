import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Loader2, Phone, MessageCircle, Package, Settings, PenTool, CheckCircle, PackageCheck } from 'lucide-react';

const STAGES = [
  { id: 'received', label: 'Device Received', icon: <Package className="w-4 h-4" /> },
  { id: 'diagnosis', label: 'Under Diagnosis', icon: <Search className="w-4 h-4" /> },
  { id: 'approved', label: 'Repair Approved', icon: <CheckCircle className="w-4 h-4" /> },
  { id: 'repairing', label: 'Repair in Progress', icon: <Settings className="w-4 h-4" /> },
  { id: 'testing', label: 'Quality Testing', icon: <PenTool className="w-4 h-4" /> },
  { id: 'ready', label: 'Ready for Collection', icon: <PackageCheck className="w-4 h-4" /> }
];

export default function Tracker() {
  const [jobId, setJobId] = useState('');
  const [mobile, setMobile] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobId || !mobile) {
      setError('Please enter both Job ID and Registered Mobile Number.');
      return;
    }
    
    setError('');
    setIsLoading(true);
    setResult(null);

    // Simulate API lookup
    setTimeout(() => {
      setIsLoading(false);
      
      // Look up in local storage (created by Booking form)
      const existing = JSON.parse(localStorage.getItem('bookings') || '[]');
      const found = existing.find((b: any) => b.id === jobId && b.mobile === mobile);
      
      if (found) {
        setResult({
          ...found,
          status: 'repairing', // Hardcoded status for dev demo
          estimatedCompletion: 'Tomorrow, 5:00 PM',
          technicianNote: 'Screen replaced, currently running diagnostic tests on display assembly.'
        });
      } else if (jobId.toUpperCase() === 'TEST') {
        // Fallback test case
        setResult({
          id: 'TEST',
          name: 'Demo User',
          brand: 'Apple',
          model: 'iPhone 13 Pro',
          service: 'Screen Replacement',
          status: 'testing',
          estimatedCompletion: 'Today, 6:00 PM',
          technicianNote: 'Repair successful. Running final battery drain and touch tests.'
        });
      } else {
        setError('No repair job found matching those details. Please check and try again, or use Job ID: TEST');
      }
    }, 1200);
  };

  return (
    <section id="track" className="py-24 px-6 bg-gray-50 dark:bg-[#0a0a0a] min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-secondary dark:text-white"
          >
            Track Repair Status
          </motion.h2>
          <p className="text-gray-500 dark:text-gray-400">Enter your Job ID and registered mobile number to check the live status of your device.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-[#111] rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 dark:border-white/5"
        >
          <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4 mb-8">
            <input 
              type="text" 
              placeholder="Job ID (e.g. JOB-1234)" 
              value={jobId}
              onChange={(e) => setJobId(e.target.value.toUpperCase())}
              className="flex-1 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary uppercase"
            />
            <input 
              type="tel" 
              placeholder="Registered Mobile Number" 
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="flex-1 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className="bg-secondary dark:bg-white text-white dark:text-black font-bold rounded-xl px-8 py-4 flex items-center justify-center min-w-[140px] hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-70"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Track Job'}
            </button>
          </form>

          {error && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl text-sm mb-8 text-center border border-red-100 dark:border-red-900/30">
              {error}
            </motion.div>
          )}

          {result && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }}
              className="border-t border-gray-100 dark:border-white/10 pt-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-secondary dark:text-white">{result.brand} {result.model}</h3>
                  <p className="text-sm text-gray-500">Job ID: <span className="font-mono text-primary dark:text-cyan-400">{result.id || jobId}</span></p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-sm text-gray-500">Est. Completion</p>
                  <p className="font-bold text-secondary dark:text-white">{result.estimatedCompletion}</p>
                </div>
              </div>

              {/* Status Timeline */}
              <div className="relative mb-12 overflow-x-auto pb-4">
                <div className="flex items-center min-w-[600px] px-2">
                  {STAGES.map((stage, index) => {
                    const currentStageIndex = STAGES.findIndex(s => s.id === result.status);
                    const isCompleted = index <= currentStageIndex;
                    const isCurrent = index === currentStageIndex;
                    
                    return (
                      <div key={stage.id} className="flex-1 relative">
                        {/* Connecting Line */}
                        {index < STAGES.length - 1 && (
                          <div className={`absolute top-5 left-1/2 w-full h-1 -translate-y-1/2 ${isCompleted && !isCurrent ? 'bg-primary dark:bg-cyan-500' : 'bg-gray-200 dark:bg-white/10'}`}></div>
                        )}
                        
                        {/* Node */}
                        <div className="relative flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 relative z-10 transition-colors ${
                            isCompleted 
                              ? 'bg-primary dark:bg-cyan-500 border-white dark:border-[#111] text-white' 
                              : 'bg-white dark:bg-[#111] border-gray-200 dark:border-white/10 text-gray-400'
                          }`}>
                            {isCurrent && (
                              <div className="absolute inset-0 rounded-full border-2 border-primary dark:border-cyan-500 animate-ping opacity-20"></div>
                            )}
                            {stage.icon}
                          </div>
                          <span className={`text-xs mt-3 font-medium text-center ${isCurrent ? 'text-primary dark:text-cyan-400' : 'text-gray-500'}`}>
                            {stage.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Technician Note */}
              <div className="bg-blue-50 dark:bg-primary/10 rounded-xl p-4 md:p-6 mb-8 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-black flex items-center justify-center flex-shrink-0 text-primary">
                  <span className="text-xl">👨‍🔧</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-1 text-secondary dark:text-white">Technician Note</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{result.technicianNote}</p>
                </div>
              </div>

              {/* Support Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 py-3 rounded-xl border border-gray-200 dark:border-white/10 flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors font-medium">
                  <Phone className="w-4 h-4" /> Call Support
                </button>
                <button className="flex-1 py-3 rounded-xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 flex items-center justify-center gap-2 hover:bg-[#25D366]/20 transition-colors font-medium">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </button>
              </div>

            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
