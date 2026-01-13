export const Button = ({className = "", size = "default", children})=>{
const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20b2a6] bg-[#20b2a6] text-primary-foreground hover:bg-[#20b2a6]/90 shadow-lg shadow-[#20b2a6]/25"
const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
};
const classes = `${baseClasses} ${sizeClasses[size]} ${className}`
    return (
        <button className={classes}> 
        <span className="realative flex items-center gap-2">
            {children}
        </span>
    </button>)
       
}