export const Button = ({className = "", size = "default", children, onClick, ...props})=>{
const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#447eeaff] bg-[#578ef4ff] text-primary-foreground hover:bg-[#447eeaff]/90 shadow-lg shadow-[#20b2a6]/25"
const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
};
const classes = `${baseClasses} ${sizeClasses[size]} ${className}`
    return (
        <button className={classes} onClick={onClick} {...props}> 
        <span className="realative flex items-center gap-2">
            {children}
            
        </span>
    </button>)
       
}