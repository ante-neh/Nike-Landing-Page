import { services } from '../constants'
import  ServiceCard  from '../components/ServiceCard'
export const Services = () => {
  return (
    <section className="max-container flex justify-center gap-9">
      {
        services.map((service)=>(
          <ServiceCard key = {service.label} {...service}/>
        ))
      }
    </section>
  )
}
