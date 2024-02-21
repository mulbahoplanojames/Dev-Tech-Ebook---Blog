const Button = (props) => {
  const { text } = props;

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0 });
        }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
