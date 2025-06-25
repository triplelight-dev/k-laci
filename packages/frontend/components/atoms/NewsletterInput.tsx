import React from "react";

type NewsletterInputProps = {
  type: string;
  placeholder: string;
  flex?: number;
};

const NewsletterInput = ({ type, placeholder, flex = 1 }: NewsletterInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        flex,
        width: '100%',
        background: 'black',
        color: 'white',
        border: '1px solid white',
        borderRadius: '0.375rem',
        padding: '0.5rem',
        boxSizing: 'border-box',
      }}
    />
  );
};

export default NewsletterInput; 