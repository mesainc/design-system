import { ElementType, ComponentPropsWithoutRef } from 'react'

export type PolymorphicProps<E extends ElementType, P> = P & {
  as?: E
} & Omit<ComponentPropsWithoutRef<E>, 'as'>