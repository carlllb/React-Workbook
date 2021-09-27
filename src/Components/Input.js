import React from "react";
import PropTypes from "prop-types";

const Input = ({
  value,
  placeholder,
  type,
  name,
  style,
  helperText,
  ...rest
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <input
        value={value}
        placeholder={placeholder}
        style={{
          borderColor: style,
          border: "1px",
          borderStyle: "solid",
          borderRadius: "5px",
          padding: "10px",
          outline: "none",
        }}
        type={type}
        name={name}
        {...rest}
      />
      {helperText && <small style={{ color: "red" }}>{helperText}</small>}
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  style: "",
  placeholder: "Text here...",
};

Input.propTypes = {
  value: PropTypes.any,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    "text",
    "number",
    "date",
    "url",
    "password",
    "submit",
    "image",
    "email",
    "checkbox",
  ]),
};

export default Input;
