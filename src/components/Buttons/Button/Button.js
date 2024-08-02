import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { cva } from 'class-variance-authority';
import { cn } from '../../../utils/cn';
const buttonStyle = cva([
    'grid place-items-center truncate rounded-md text-base font-bold transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-regular disabled:pointer-events-none disabled:opacity-30',
], {
    variants: {
        variant: {
            primary: 'bg-primary-regular p-3 text-white  hover:bg-primary-medium active:bg-primary-dark',
            neutral: 'border border-neutral-light bg-white p-3 text-primary-regular hover:text-primary-medium active:bg-neutral-light active:text-primary-dark',
            outline: 'border border-white bg-transparent p-3 text-white hover:bg-neutral-ghost active:bg-neutral-lightest',
            link: 'text-primary-regular hover:text-primary-medium hover:underline active:text-primary-dark',
        },
        size: {
            base: 'w-[200px]',
            full: 'w-full',
            fit: 'w-fit',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'base',
    },
});
export const Button = ({ isLoading, variant, size = 'base', className, children, as, ...props }) => {
    const Tag = as || 'button';
    return (_jsx(Tag, { className: cn(buttonStyle({ variant, size }), {
            'pointer-events-none': isLoading,
        }, className), ...props, children: isLoading ? (_jsx(_Fragment, { children: "Loading..." })) : (children) }));
};
