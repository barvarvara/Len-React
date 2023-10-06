import React from 'react'
import "./CustomButton.scss"

const CustomButton = ({
                        addStyle,
                        href,
                        ...props
                      }) => {
  return (
    <a href={href} className={`link ${addStyle}`}>
      {props.children}
    </a>
  );
};

export default CustomButton;