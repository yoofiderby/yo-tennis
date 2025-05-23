import { Bebas_Neue } from 'next/font/google'
import { ReactNode } from 'react'

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], display: 'swap' })

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'white' | 'gradient' | 'secondary';
  size?: 'default' | 'large' | 'small';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const sizeStyles = {
  default: 'text-[48px] sm:text-[80px]',
  large: 'text-[56px] sm:text-[96px]',
  small: 'text-[32px] sm:text-[48px]'
}

const variantStyles = {
  primary: 'text-[#071008]',
  white: 'text-white',
  gradient: 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent',
  secondary: 'text-secondary'
}

const SectionTitle = ({ 
  children, 
  className = '', 
  variant = 'primary',
  size = 'default',
  as: Component = 'h1',
  ...props 
}: SectionTitleProps) => {
  return (
    <Component 
      className={`
        ${bebasNeue.className}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        font-normal
        leading-none
        uppercase
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  )
}

export default SectionTitle