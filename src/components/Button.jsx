import React from "react";

const Button = (props) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded">
      {props.name}
    </button>
  );
};

export default Button;
