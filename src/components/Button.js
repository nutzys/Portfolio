import React from "react";

const Button = ({ title }) => {
  return (
    <button className="bg-orange-600 text-gray-200 py-2 px-4 rounded-md hover:bg-orange-400">
      {title}
    </button>
  );
};

export default Button;
