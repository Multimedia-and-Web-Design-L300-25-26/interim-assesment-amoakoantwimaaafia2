import React from 'react';
import { Link } from 'react-router-dom';

function Button({
  children,
  bg = 'bg-blue-600',
  hoverBg = 'hover:bg-blue-700',
  textColor = 'text-white',
  rounded = 'rounded-full',
  size = 'px-4 py-2',
  className = '',
  href,
  to,
  onClick,
  type = 'button',
  ...props
}) {
  const base = `${size} ${bg} ${hoverBg} ${textColor} ${rounded} text-sm font-bold text-center transition-colors`;
  const classes = `${base} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
