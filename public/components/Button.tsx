import React, { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a>
        <button>{children}</button>
      </a>
    </Link>
  );
};

export default Button;