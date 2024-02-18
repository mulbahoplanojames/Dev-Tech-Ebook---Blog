const Button = (props) => {
  const { text } = props;

  return (
    <>
      <button className="btn">{text}</button>
    </>
  );
};

export default Button;
