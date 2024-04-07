import React, { useState } from "react";

export default function ChildTab({ content, passedFunction }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClick(index) {
    setCurrentIndex(index);
    passedFunction(index);
  }

  return (
    <div className="grid justify-items-center">
      <div className="flex justify-center w-1/2 my-10">
        {content.map((item, index) => (
          <div
            key={item.label}
            onClick={() => handleClick(index)}
            className={`${index==currentIndex? 'bg-blue-700':'bg-blue-200'} font-semibold text-xl p-3 m-3 cursor-pointer w-full text-center rounded-xl shadow-xl border border-black`}
          >
            {item.label}
          </div>
        ))}
      </div>
        
      <div className="bg-slate-300 rounded-lg p-5 shadow-xl font-bold text-5xl">
        {content[currentIndex] && content[currentIndex].data}
      </div>
    </div>
  );
}
