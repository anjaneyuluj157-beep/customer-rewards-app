import PropTypes from "prop-types";

function ErrorMessage({
  message,
}) {
  return (
    <div
      style={{
        padding: "20px",
        color: "red",
        fontSize: "18px",
      }}
    >
      {message}
    </div>
  );
}

ErrorMessage.propTypes = {
  message:
    PropTypes.string.isRequired,
};

export default ErrorMessage;