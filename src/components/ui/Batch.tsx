import React from "react"

 interface BatchProps {
  children: React.ReactNode;
  key:any;
 }
export const Batch = ({children, ...props}:BatchProps) => {
  return (
    <div className="relative inline-flex items-center justify-center px-3 py-1 bg-white/[0.03] backdrop-blur-md border border-white/5 text-[14px] font-medium text-white/80 tracking-wide rounded-md shadow-sm hanken-grotesk transition-all duration-300 hover:bg-white/[0.08] hover:scale-105 hover:border-white/10">
     {children}
    </div>
  )
}