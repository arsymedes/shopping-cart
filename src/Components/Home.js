import React from "react";

function Home() {
  return (
    <div className="bg-main h-screen bg-cover">
      <main className="bg-black/[.54] h-screen flex flex-col items-center justify-center text-white cursor-default gap-8">
        <h1>
          <div className="font-semibold text-[4rem] sm:text-[6rem] tracking-wide relative top-12 sm:top-16 text-center">Sounds like</div>
          <div className="font-semibold text-[5.5rem] sm:text-[8.5rem] tracking-wide">a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bbdfff] to-[#e7afb1]">Dream</span></div>
        </h1>
        <p className="font-light text-center w-3/4 sm:max-w-xl relative bottom-6">Introducing Iphone 14 Pro Max A magical new way to interact with iPhone. Groundbreaking safety features designed to save lives. An innovative 48MP camera for mind-blowing detail. All powered by the ultimate smartphone chip. </p>
        <button className="text-zinc-600 px-6 py-3 rounded-3xl bg-gradient-to-r from-[#bbdfff] to-[#e7afb1] hover:text-white hover:outline hover:outline-white hover:outline-2 hover:bg-none transition ease-in-out duration-500">Buy Now</button>
      </main>
    </div>
  )
}

export default Home