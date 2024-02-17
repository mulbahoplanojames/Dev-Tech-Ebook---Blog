import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { text } = props;

  return (
    <>
      <Link to="" className="btn">
        {text}
      </Link>
    </>
  );
};

export default Button;
