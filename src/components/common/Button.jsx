import React from 'react'

const Button = ({ onClick, className, children, inverse, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        ${inverse
          ? 'bg-transparent border-accent text-accent hover:bg-accent hover:text-secondary hover:scale-110'
          : 'bg-accent border-accent text-secondary hover:bg-transparent hover:text-accent hover:scale-110'
        }
        font-semibold w-fit rounded-full
        active:scale-95
        border-2
        transition-all duration-300
        shadow-accent-glow
        tracking-wide
        lg:text-lg
        ${disabled ? 'opacity-50 pointer-events-none' : ''}
        ${className}
        px-7 py-3
      `}
    >
      {children}
    </button>
  )
}

export default Button