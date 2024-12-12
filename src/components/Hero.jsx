import styles from '../style'
import { discount, logo_big } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img
            src={discount}
            alt='discount'
            className='w-[32px] h-[32px]'
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>End to End Technology </span>  {" "}
            <span className='text-white'>Solutions</span>
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
          We create Your <br className='sm:block hidden'/> {" "}
            <span className='text-gradient'> Imagination</span> {" "}
          </h1>
          {/* <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted/>
          </div> */}
        </div>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
           
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We are a one stop solution for all your product development needs - from Software and Hardware designing to IT services, 
        We have it all. Are experties lies in various domains including
        <b className='uppercase'> Mobile App development, Desktop apps, IOT, Circuit designing, 
        PCB layout, AI integration and product designing
        </b>.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={logo_big}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" /> */}
        {/* <div className="absolute z-[1] w-[60%] h-[60%] rounded-full white__gradient bottom-40" /> */}
        {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/> */}
      </div>
      {/* <div className={`ss:hidden ${styles.flexCenter}`}> */}
        {/* <GetStarted/> */}
      {/* </div> */}
    </section>
  )
}

export default Hero
