const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 flex-col shadow-3xl rounded-[20px] w-full sm:w-[350px] sm:min-w-[350px] px-10 py-16">
        <div className="flex justify-center items-center w-11 h-11 bg-coral-red rounded-full">
            <img 
            src={imgURL} 
            alt={label}
            width={25}
            height={25}
            className="object-contain"
            />
        </div>
        <h3 className="mt-4 text-3xl font-palanquin font-bold leading-normal">{label}</h3>
        <p className="text-slate-gray font-montserrat text-lg leading-normal break-words mt-4">{subtext}</p>

    </div>
  )
}

export default ServiceCard