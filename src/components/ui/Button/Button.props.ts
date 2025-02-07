import { ReactNode } from 'react';
import { To } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  version: 'unfilled' | 'filled' | 'outline' | 'custom' | 'remove' | 'advanced';
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  tag?: 'link' | 'button';
  href?: To;
  state?: any;
  lversion: 'regular' | 'bold' | 'medium';
}
