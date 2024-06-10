

const Card = () => {
  return (
    <div  >
      <div className="w-full h-screen flex gap-5 items-center px-28 bg-zinc-100">
        <div className="cardcontainer h-[50vh] w-1/2">
          <div className="card relative rounded-lg w-full h-full bg-[#004D43] flex justify-center items-center">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
            <button className="absolute left-5 bottom-5 px-6 py-1 border-2 rounded-full text-lime-300 border-lime-300">
              &copy;<span>2019-2022</span>
            </button>
          </div>
        </div>
        <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
          <div className="card relative rounded-lg w-full h-full flex justify-center items-center bg-[#212121]">
            <img 
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
            <button className="absolute left-5 bottom-5 px-6 py-1 border-2 rounded-full text-zinc-300 border-zinc-300">
              &copy;<span>2019-2022</span>
            </button>
          </div>
          <div className="card relative rounded-lg w-full h-full flex justify-center items-center bg-[#212121]">
            <img 
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
            />
            <button className="absolute left-5 bottom-5 px-6 py-1 border-2 rounded-full text-zinc-300 border-zinc-300">
              &copy;<span>2019-2022</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
