import { ElementType } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '../../../utils/cn'
import { PolymorphicProps } from '../../../types/polymorphic'

const buttonStyle = cva(
  [
    'grid place-items-center truncate rounded-md text-base font-bold transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-regular disabled:pointer-events-none disabled:opacity-30',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-primary-regular p-3 text-white  hover:bg-primary-medium active:bg-primary-dark',
        neutral:
          'border border-neutral-light bg-white p-3 text-primary-regular hover:text-primary-medium active:bg-neutral-light active:text-primary-dark',
        outline:
          'border border-white bg-transparent p-3 text-white hover:bg-neutral-ghost active:bg-neutral-lightest',
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
  }
)

export type ButtonStyleProps = VariantProps<typeof buttonStyle>

export type ButtonBaseProps = {
  isLoading?: boolean
} & ButtonStyleProps

export type ButtonProps<E extends ElementType> = PolymorphicProps<
  E,
  ButtonBaseProps
>

export const Button = <E extends ElementType = 'button'>({
  isLoading,
  variant,
  size = 'base',
  className,
  children,
  as,
  ...props
}: ButtonProps<E>) => {
  const Tag = as || 'button'

  return (
    <Tag
      className={cn(
        buttonStyle({ variant, size }),
        {
          'pointer-events-none': isLoading,
        },
        className
      )}
      {...props}
    >
      {isLoading ? (
        <>
        Loading...
        </>
      ) : (
        children
      )}
    </Tag>
  )
}