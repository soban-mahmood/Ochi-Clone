import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
function Landing() {
  motion;
  return (
    <div  data-scroll data-scroll-speed="-.6" className="w-full h-screen bg-zinc-100 pt-1 text-black">
      <div className="textstructure mt-40 px-20">
        <div className="masker">
          <h1 className="uppercase text-[7vw] leading-[6.5vw] tracking-tighter font-['FoundersGrotesk, Roboto, sans-serif'] font-medium">
            {" "}
            we create
          </h1>
        </div>
        <div className="masker w-fit flex items-center">
          < motion.div initial={{width:0}} animate={{width:"7vw"}} transition={{ease : [0, 0.55, 0.45, 1], duration:2}} className=" w-[7vw] h-[5vw] rounded-md bg-red-500 relative top-[.4vw]"></motion.div>
          <h1 className="uppercase text-[7vw] leading-[6.5vw] tracking-tighter font-['FoundersGrotesk, Roboto, sans-serif'] font-medium">
            EYE-OPENING
          </h1>
        </div>
        <div className="masker">
          <h1 className="uppercase text-[7vw] leading-[6.5vw] tracking-tighter font-['FoundersGrotesk, Roboto, sans-serif'] font-medium">
            PRESENTATIONS
          </h1>
        </div>
      </div>
      <div className="border-t-[2px] border-zinc-800 mt-20 flex justify-between items-center py-5  px-10">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
          // eslint-disable-next-line react/jsx-key
        ].map((item) => (
          // eslint-disable-next-line react/jsx-key
          <p className="font-semibold text-md tracking-tighter leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-3 py-2 border-[1px] border-zinc-600 rounded-full">
            START THE PROJECT
          </div>
          <div className="w-10 h-10 border-[1px] flex items-center justify-center  border-zinc-600 rounded-full">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
