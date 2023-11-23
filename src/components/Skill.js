import React from "react";

const Skill = ({ level, label }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between my-3">
        <p className="t text-lg text-gray-300">{label}</p>
        <p className="t text-lg text-gray-300">{level}</p>
      </div>
      <div class="h-1 w-full bg-zinc-700">
        <div class="h-1 bg-orange-600" style={{ width: level }}></div>
      </div>
    </div>
  );
};

export default Skill;
