import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants/index'

export const NavBar = () => {
  return (
    <header className="absolute z-10 w-full py-8 padding-x">
        <nav className='flex justify-between items-center max-container'>
            <a href='/' alt="Logo">
                <img src={headerLogo} alt='logo' width={130} height={29}/>
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {
                    navLinks.map((items)=>(
                        <li key={items.label}>
                            <a
                            href={items.href}
                            className='font-montserrat text-lg text-slate-gray leading-normal'
                            >
                                {
                                    items.label
                                }
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className='hidden max-lg:block'>
                <img src={hamburger}
                alt="Hamberger"
                width = {25}
                height = {25}
                />

            </div>
        </nav>
    </header>
  )
}
