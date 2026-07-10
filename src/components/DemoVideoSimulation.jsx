import React, { useState, useEffect } from 'react';

export default function DemoVideoSimulation({ onViewReport }) {
 const [progress, setProgress] = useState(0);
 const [logs, setLogs] = useState([]);
 const [isComplete, setIsComplete] = useState(false);

 const fullLogs = [
 "Initializing Tekki Blaze kernel...",
 "Accessing hardware abstraction layer...",
 "Querying WMI classes for Processor details...",
 "Scanning Intel Core i5-1135G7 frequencies...",
 "Processor diagnostic: OK (94%)",
 "Checking physical memory modules...",
 "Memory integrity verified: OK (88%)",
 "Accessing NVMe SSD S.M.A.R.T. data...",
 "Warning: Drive wear detected at 72% health.",
 "Reading thermal sensors...",
 "Temperatures within safe bounds (Max 71°C)",
 "Analyzing graphics drivers...",
 "Drivers up to date.",
 "Compiling final health report..."
 ];

 useEffect(() => {
 let currentProgress = 0;
 let logIndex = 0;

 const interval = setInterval(() => {
 // Increment progress
 currentProgress += Math.random() * 4 + 1;
 if (currentProgress > 100) currentProgress = 100;
 setProgress(currentProgress);

 // Add a log roughly based on progress
 const targetLogIndex = Math.floor((currentProgress / 100) * fullLogs.length);
 if (targetLogIndex > logIndex && logIndex < fullLogs.length) {
 setLogs(prev => [...prev, fullLogs[logIndex]]);
 logIndex++;
 }

 if (currentProgress === 100) {
 clearInterval(interval);
 setTimeout(() => setIsComplete(true), 500);
 }
 }, 150);

 return () => clearInterval(interval);
 }, []);

 return (
 <div className="w-full bg-[#051511] text-teal-pale font-mono text-[13px] rounded-lg overflow-hidden flex flex-col min-h-[400px]">
 <div className="bg-[#0A2B20] px-4 py-3 flex items-center justify-between border-b border-teal-base/20">
 <div className="flex items-center gap-2">
 <span className="w-3 h-3 rounded-full bg-[#FF6058]"></span>
 <span className="w-3 h-3 rounded-full bg-[#FFBE2F]"></span>
 <span className="w-3 h-3 rounded-full bg-[#28C940]"></span>
 </div>
 <div className="font-semibold text-teal-light tracking-wider">tekki-blaze.exe</div>
 <div className="w-16"></div> {/* Spacer for centering */}
 </div>

 <div className="flex-1 p-6 flex flex-col justify-end">
 {!isComplete ? (
 <>
 <div className="space-y-2 mb-8 h-[200px] overflow-hidden flex flex-col justify-end">
 {logs.map((log, i) => (
 <div key={i} className="animate-[fadeIn_0.2s_ease-out]">
 <span className="text-teal-base mr-2">{'>'}</span>
 {log}
 </div>
 ))}
 <div className="animate-pulse">
 <span className="text-teal-base mr-2">{'>'}</span>_
 </div>
 </div>
 
 <div>
 <div className="flex justify-between mb-2 text-teal-light font-bold">
 <span>SCANNING SYSTEM...</span>
 <span>{Math.floor(progress)}%</span>
 </div>
 <div className="w-full h-2 bg-teal-deep rounded-full overflow-hidden">
 <div 
 className="h-full bg-teal-base transition-all duration-150 ease-out"
 style={{ width: `${progress}%` }}
 ></div>
 </div>
 </div>
 </>
 ) : (
 <div className="flex-1 flex flex-col items-center justify-center animate-[fadeIn_0.5s_ease-out]">
 <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-dark to-teal-base flex items-center justify-center shadow-[0_10px_30px_rgba(8,80,65,0.5)] mb-6 animate-[scaleUp_0.5s_ease-out]">
 <span className="font-serif font-bold text-6xl text-white">A</span>
 </div>
 <h3 className="text-2xl font-bold text-white mb-2 font-sans">Scan Complete!</h3>
 <p className="text-teal-light text-center max-w-sm mb-6 font-sans text-base">Your PC is healthy and reliable. 12 components checked, 0 critical issues found.</p>
 <button onClick={onViewReport} className="bg-teal-base text-[#051511] font-bold px-6 py-2.5 rounded-xl hover:bg-teal-light transition-colors font-sans cursor-pointer">
 View PDF Report
 </button>
 </div>
 )}
 </div>
 </div>
 );
}
