import React from "react";

class Review extends React.Component{
    render(){
        return(
            <div className="container px-5 lg:px-0 mx-auto text-sm text-[#65E2D9] grid lg:grid-cols-3 gap-[3rem] lg:gap-[1rem] mt-[12rem] relative before:content-[''] before:absolute before:bg-quote before:left-10 lg:before:left-0 before:-top-8 before:w-[80%] lg:before:w-full before:z-[0] before:h-full before:bg-no-repeat">
                <div className="col-start-1 col-span-1 row-start-1 row-span-1 w-[95%] px-[2rem] py-[3rem] pb-[2.25rem] h-fit bg-[#202A3C] rounded mx-auto z-10">
                    <p className="mb-[2rem]">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <div className="flex items-center gap-[1rem]">
                        <img src="./images/profile-1.jpg" alt="profile-1" className="rounded-full w-[40px] h-[40px]"/>
                        <div className="flex flex-col">
                            <h3 className="font-bold text-white">Satish Patel</h3>
                            <p className="text-xs">Founder & CEO, Huddle</p>
                        </div>
                    </div>
                </div>
                <div className="col-start-1 col-span-1 row-start-2 row-span-1 lg:col-start-2 lg:row-start-1 w-[95%] px-[2rem] py-[3rem]  pb-[2.25rem]  h-fit bg-[#202A3C] rounded mx-auto">
                    <p className="mb-[2rem]">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <div className="flex items-center gap-[1rem]">
                        <img src="./images/profile-2.jpg" alt="profile-2" className="rounded-full w-[40px] h-[40px]"/>
                        <div className="flex flex-col">
                            <h3 className="font-bold text-white">Bruce McKenzie</h3>
                            <p className="text-xs">Founder & CEO, Huddle</p>
                        </div>
                    </div>
                </div>
                <div className="col-start-1 col-span-1 row-start-3 row-span-1 lg:col-start-3 lg:row-start-1 w-[95%] px-[2rem] py-[3rem] pb-[2.25rem]  h-fit bg-[#202A3C] rounded mx-auto">
                    <p className="mb-[2rem]">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <div className="flex items-center gap-[1rem]">
                        <img src="./images/profile-3.jpg" alt="profile-3" className="rounded-full w-[40px] h-[40px]" />
                        <div className="flex flex-col">
                            <h3 className="font-bold text-white">Iva Boyd</h3>
                            <p className="text-xs">Founder & CEO, Huddle</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Review;