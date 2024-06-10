function Featured() {
  return (
    <div className="w-full py-10 bg-zinc-100 text-black" >
      <div className="w-full px-20 border-b-[1px] border-zinc-200 pb-10 text-6xl ">
        <h1>Featured projects</h1>
      </div>
      <div className=" px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardContainer w-1/2 relative h-[80vh] ">
            <div className="card w-full  rounded-xl h-full overflow-hidden ">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                className="w-full h-full"
                alt=""
              />
            </div>
          </div>
          <div className="cardContainer  relative w-1/2 h-[80vh] ">
            <div className="card  w-full rounded-xl h-fulloverflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                className="w-full h-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
