import { useState } from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'

export const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section id="home" className="w-full min-h-screen flex xl:flex-row flex-col gap-10 justify-center max-container"> 
        <div className="relative flex flex-col justify-center items-center w-full xl:w-2/5 max-xl:padding-x pt-28">
          <p className='text-xl text-coral-red font-montserrat'>Our summer Collection</p>
          <h1 className='mt-10 text-8xl font-palanquin font-bold max-sm:text-[72px] max-sm:leading-[82px]'>
             <span className='xl:bg-white xl:whitespace-nowrap relative z-10'>The New Arrival</span>
             <br/>
             <span className='inline-block text-coral-red mt-4'>Nike</span> Shoes
          </h1>
          <p className='mt-8 mb-4 text-slate-gray text-lg sm:max-w-sm'>
              Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
          </p>
          <Button label={"Shop now"} iconUrl={arrowRight}/>
          <div className='flex justify-start items-start gap-16 w-full flex-wrap mt-20'>
            {
              statistics.map((statistic, index)=>(
                <div key={index}> 
                  <p className='text-4xl font-bold font-palanquin'>{statistic.value}</p>
                  <p className='leading-7 text-slate-gray font-montserrat'>{statistic.label}</p>
                </div>
              ))
            }
          </div>
        </div>

        <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
          <img
          src={bigShoeImg}
          alt="shoeimage"
          width={610}
          height={500}
          className='object-contain relative z-10'
          />
          <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
            {shoes.map((shoe)=>(
              <div key={shoe}>
                <ShoeCard
                  imgUrl = {shoe}
                  changeBigShoeImg={
                    (shoe)=>{setBigShoeImg(shoe)}
                  }
                  bigShoeImg = {bigShoeImg}
                />
              </div>
            ))
            }
          </div>
        </div>
    </section>
  )
}
