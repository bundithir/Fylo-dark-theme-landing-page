import React from "react";

class Feature extends React.Component{
    render(){
        return(
            <div className="container px-5 lg:px-0 mx-auto text-sm py-[2rem] grid lg:grid-cols-2 lg:grid-rows-2 text-center gap-[6rem] lg:gap-y-[4rem] lg:gap-x-[10rem] text-white lg:mt-[6rem] mt-[4rem]">
                <div className="col-start-1 col-span-1 row-start-1 row-span-1 flex flex-col items-center justify-center lg:ml-auto">
                    <img src="./images/icon-access-anywhere.svg" alt="access" className="mb-[2rem]"/>
                    <h3 className="font-bold font-['Raleway'] text-xl mb-2">Access your files, anywhere</h3>
                    <p className="sm:w-[350px] text-[#65E2D9]">The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.
                    </p>
                </div>

                <div className="col-start-1 col-span-1 row-start-3 lg:row-start-2 row-span-1 flex flex-col items-center justify-center lg:ml-auto">
                    <img src="./images/icon-collaboration.svg" alt="collaboration" className="mb-[2rem]" />
                    <h3 className="font-bold font-['Raleway'] text-xl mb-2">Real-time collaboration</h3>
                    <p className="sm:w-[350px] text-[#65E2D9]">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
                    </p>

                </div>
                <div className="lg:col-start-2 col-start-1 col-span-1 lg:row-start-1 row-start-2 row-span-1 flex flex-col items-center justify-center lg:mr-auto">
                    <img src="./images/icon-security.svg" alt="security" className="mb-[2rem]" />
                    <h3 className="font-bold font-['Raleway'] text-xl mb-2">Security you can trust</h3>
                    <p className="sm:w-[350px] text-[#65E2D9]">2-factor authentication and user-controlled encryption are just a couple of the security 
                    features we allow to help secure your files.
                    </p>

                </div>
                <div className="lg:col-start-2 col-start-1 col-span-1 lg:row-start-2 row-start-4 row-span-1 flex flex-col items-center justify-center lg:mr-auto">
                    <img src="./images/icon-any-file.svg" alt="file" className="mb-[2rem]" />
                    <h3 className="font-bold font-['Raleway'] text-xl mb-2">Store any type of file</h3>
                    <p className="sm:w-[350px] text-[#65E2D9]">Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.
                    </p>
                </div>
            </div>
        )
    }
}

export default Feature;