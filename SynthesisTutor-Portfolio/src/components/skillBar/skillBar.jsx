import { useEffect, useState } from "react";

export const SkillBar = ({ skill, percentage }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-[21px]  font-semibold text-[#b7d0ff]">{skill}</span>
        <span className="text-[21px] text-white">{percentage}%</span>
      </div>
      <div className="h-2.5 bg-[#17357d] rounded-full overflow-hidden">
        <div
          className="h-2.5 bg-green rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${percentage}%` : "0%",
          }}
        />
      </div>
    </div>
  );
};