export const Button = ({ children, className, variant, size, ...props }) => {
    const baseStyles = "inline-flex items-center justify-center transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
    return (
      <button className={`${baseStyles} ${className}`} {...props}>
        {children}
      </button>
    );
  };