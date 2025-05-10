import { cva } from 'class-variance-authority';
import React from 'react';
const buttonVariants = cva('font-semibold rounded-lg', {
  variants: { variant: { default: 'bg-indigo-600 text-white hover:bg-indigo-700', outline: 'border border-white text-white hover:bg-white hover:text-indigo-600' } },
  defaultVariants: { variant: 'default' },
});
export function Button({ className, variant, ...props }) {
  return <button className={buttonVariants({ variant, className })} {...props} />;
}