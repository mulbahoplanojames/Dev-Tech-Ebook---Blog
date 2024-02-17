import React from "react";

const Button = (props) => {
  const { text } = props;

  return (
    <>
      <a href="" className="btn">
        {text}
      </a>
    </>
  );
};

export default Button;
