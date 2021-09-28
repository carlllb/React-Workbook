import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

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
    <div className={styles.container}>
      <input
        value={value}
        placeholder={placeholder}
        style={{
          border: `1px solid ${style}`,
          borderRadius: "5px",
          padding: "10px",
          outline: "none",
        }}
        type={type}
        name={name}
        {...rest}
      />
      {helperText && <small className={styles.helper}>{helperText}</small>}
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
