import React from "react";

export default function ThreeLevelPyramid() {
  return (
    <div className="flex flex-col items-center w-full select-none">
      {/* Top: Triangle */}
      <div className="relative" style={{ height: 0 }}>
        <div
          className="w-0 h-0 border-l-[60px] border-r-[60px] border-b-[60px] border-l-transparent border-r-transparent border-b-red-500"
        />
        <span className="absolute left-1/2 top-8 -translate-x-1/2 text-white font-bold text-base">Text 3</span>
      </div>
      {/* Middle: Trapezoid */}
      <div className="relative" style={{ height: 0, marginTop: -8 }}>
        <div
          className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[40px] border-l-transparent border-r-transparent border-b-green-500"
          style={{ borderTop: 'solid 20px transparent', borderLeftWidth: 80, borderRightWidth: 80, borderBottomWidth: 40 }}
        />
        <span className="absolute left-1/2 top-5 -translate-x-1/2 text-white font-bold text-base">Text 2</span>
      </div>
      {/* Bottom: Trapezoid */}
      <div className="relative" style={{ height: 0, marginTop: -8 }}>
        <div
          className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[40px] border-l-transparent border-r-transparent border-b-blue-500"
          style={{ borderTop: 'solid 20px transparent', borderLeftWidth: 100, borderRightWidth: 100, borderBottomWidth: 40 }}
        />
        <span className="absolute left-1/2 top-5 -translate-x-1/2 text-white font-bold text-base">Text 1</span>
      </div>
    </div>
  );
} 