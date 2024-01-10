const Button = ({label, iconUrl}) => {
  return (
    <button className="flex items-center justify-center gap-2 px-7 py-4 
                        border font-montserrat text-lg leading-none bg-coral-red 
                        rounded-full text-white border-coral-red">
        {label}
        <img 
        alt="icon"
        src={iconUrl}
        className="rounded-full w-5 h-5 ml-2"
        />
    </button>
  )
}

export default Button