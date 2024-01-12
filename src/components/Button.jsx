const Button = ({ label, iconUrl, backgroundColor, borderColor, textColor }) => {
  return (
    <button className={`flex items-center justify-center gap-2 px-7 py-4 
                        border font-montserrat text-lg leading-none

                        ${
                          backgroundColor? `${backgroundColor} ${textColor} ${borderColor}`:
                          `bg-coral-red text-white border-coral-red`
                        }
                        rounded-full
                        `
                        }>
                        
        {label}
        { iconUrl && <img 
                      alt="icon"
                      src={iconUrl}
                      className="rounded-full w-5 h-5 ml-2"
        />}
    </button>
  )
}

export default Button