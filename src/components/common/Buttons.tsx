import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-2 text-xs min-h-[38px]',
    md: 'px-5 py-2.5 text-sm min-h-[44px]',
    lg: 'px-6 py-3.5 text-base min-h-[48px]',
  };

  const variantClasses = {
    primary:
      'bg-[#3B241C] text-white hover:bg-[#291710] border border-[#3B241C] shadow-xs active:scale-[0.99]',
    secondary:
      'bg-[#687653] text-white hover:bg-[#4D5B3C] border border-[#687653] shadow-xs active:scale-[0.99]',
    outline:
      'bg-transparent text-[#3B241C] hover:bg-[#3B241C]/5 border border-[#3B241C] active:scale-[0.99]',
    ghost:
      'bg-transparent text-[#3B241C] hover:bg-[#3B241C]/5 border border-transparent active:scale-[0.99]',
  };

  return (
    <button
      disabled={disabled}
      className={`inline-flex items-center justify-center font-sans font-medium rounded-lg transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed ${
        fullWidth ? 'w-full' : ''
      } ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2 shrink-0">{icon}</span>}
      <span className="whitespace-nowrap">{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2 shrink-0">{icon}</span>}
    </button>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = (props) => {
  return <PrimaryButton variant="secondary" {...props} />;
};
