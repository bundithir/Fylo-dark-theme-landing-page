import React from "react";

class Hero extends React.Component{
    render(){
        return(
            <div className="relative">
                <div className="container px-5 lg:px-0 mx-auto text-sm py-[2rem] flex flex-col items-center justify-center text-white text-center ">
                    <img src="./images/illustration-intro.png" alt="intro" className="mb-[2rem] z-10" />
                    <h1 className="text-5xl md:w-[750px] font-bold font-['Raleway'] mb-[2rem] z-10">All your files in one secure location, accessible anywhere</h1>
                    <p className="font-normal md:w-[400px] text-sm mb-[2rem] z-10 text-[#65E2D9]">Fylo stores all your most important files in one secure location. Access them wherever 
                    you need, share and collaborate with friends family, and co-workers.</p>
                    <button className="transition-all duration-500 bg-size-200 bg-pos-100 hover:bg-pos-200 via-[#65E2D9] font-bold py-[1rem] px-[5rem] rounded-full bg-gradient-to-r from-[#65E2D9] to-[#339ECC] z-10 ">Get started</button>
                </div>
                <img src="./images/bg-curvy-desktop.svg" alt="curvy" className='absolute bottom-0 w-full z-0' />
                
            </div> 
        )
    }
}

export default Hero;