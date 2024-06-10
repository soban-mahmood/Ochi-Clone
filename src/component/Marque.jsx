import { motion } from 'framer-motion'


function Marque() {
   
  return (
    <div className='w-full bg-[#004D43] rounded-t-lg  py-20' data-scroll data-scroll-section data-scroll-speed=".01" >
    <div className="text  border-b-2 border-t-2 border-zinc-500 flex   overflow-hidden whitespace-nowrap ">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity,duration:8}} className='text-[20vw] leading-none font-["FoundersGrotesk, Roboto, sans-serif"] uppercase pt-8 mb-5 font-semibold pr-10'>we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity,duration:8}} className='text-[20vw] leading-none font-["FoundersGrotesk, Roboto, sans-serif"] uppercase pt-8 mb-5 font-semibold'>we are ochi</motion.h1>
        
    </div>
    </div>
  )  
}

export default Marque
