import { useRouter } from 'next/dist/client/router';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import { ReactElement, cloneElement } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClass: string;
}

const ActiveLink = ({ children, activeClass, ...rest }: ActiveLinkProps) => {
  const { asPath } = useRouter();

  const className = asPath === rest.href ? activeClass : '';

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
};

export default ActiveLink;
