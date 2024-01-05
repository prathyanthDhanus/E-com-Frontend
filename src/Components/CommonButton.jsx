import React from "react";

const CommonButton = ({ onClick, label, className }) => {

  const buttonStyle = {
    display: "flex",
    borderRadius: "1.25rem",
    border: "none",
    justifyContent: "center",
    alignItems: "center",        //set button colour and assigned it to a variable
    gap: "0.625rem",
    fontFamily: "Poppins",
    backgroundColor: "#EDA415",
    color: "#FFF",
    width: "8.25rem",
    height: "3rem",
   
    fontSize: "0.875rem",  
    fontStyle: "normal",   
    fontWeight: 600,       
    lineHeight: "normal"
  };
  return (
    <button
      onClick={onClick}
      className={`common-button ${className}`}
      style={buttonStyle}
    >
      {label}
    </button>
  );
};

export default CommonButton;
