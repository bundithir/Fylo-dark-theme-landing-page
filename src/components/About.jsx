import React from "react";

class About extends React.Component{
    render(){
        return(
            <div className="container px-5 lg:px-0 mx-auto text-sm grid text-white lg:grid-cols-2 items-center lg:gap-[1rem] gap-[4rem] lg:mt-[5rem] mt-[8rem]">
                <img src="./images/illustration-stay-productive.png" alt="stay-productive" className="justify-self-center w-full"/>
                <div className="text-left lg:ml-[4rem]">
                    <h1 className="font-bold text-4xl font-['Raleway'] lg:max-w-[450px] mb-[1rem] lg:text-left text-center">Stay productive, wherever you are</h1>
                    
                    <p className="lg:max-w-[475px] mb-[1rem] text-[#65E2D9]">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
                    </p>

                    <p className="lg:max-w-[475px] mb-[1rem] text-[#65E2D9]">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
                    </p>
                    <div className="flex gap-1 py-1 border-b w-fit text-[#65E2D9] border-[#65E2D9] hover:text-white hover:border-white">
                        <a href="/">See how Fylo works</a>
                        <img src="./images/icon-arrow.svg" alt="arrow" />
                    </div>
                </div>
            </div>
        )
    }
}
export default About;