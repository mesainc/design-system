import { ElementType } from 'react';
import { VariantProps } from 'class-variance-authority';
import { PolymorphicProps } from '../../../types/polymorphic';
declare const buttonStyle: (props?: ({
    variant?: "link" | "primary" | "neutral" | "outline" | null | undefined;
    size?: "base" | "full" | "fit" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type ButtonStyleProps = VariantProps<typeof buttonStyle>;
export type ButtonBaseProps = {
    isLoading?: boolean;
} & ButtonStyleProps;
export type ButtonProps<E extends ElementType> = PolymorphicProps<E, ButtonBaseProps>;
export declare const Button: <E extends ElementType = "button">({ isLoading, variant, size, className, children, as, ...props }: ButtonProps<E>) => import("react/jsx-runtime").JSX.Element;
export {};
