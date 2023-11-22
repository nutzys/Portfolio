import React from "react";

const Info = ({ label, content }) => {
  return (
    <div className="flex-1 text-center">
      <h1 className="text-orange-600 font-montserrat">{label}</h1>
      <p className="text-gray-300 text-lg font-montserrat">{content}</p>
    </div>
  );
};

export default Info;
